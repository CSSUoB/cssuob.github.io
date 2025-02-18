FROM ruby:3.4.2 AS base

RUN bundle config --global frozen 1 && \
    mkdir -p /vendor/bundle && \
    bundle config set --local path /vendor/bundle
WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

FROM base AS build-step
RUN bundle exec jekyll build

FROM scratch AS build
COPY --from=build-step /usr/src/app/_site /

FROM base AS server
EXPOSE 4000
CMD bundle exec jekyll serve --host 0.0.0.0 --port 4000 --destination /tmp/_site
