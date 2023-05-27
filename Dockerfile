FROM ruby:3.3 as base

RUN bundle config --global frozen 1 && \
    mkdir -p /vendor/bundle && \
    bundle config set --local path /vendor/bundle
WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

FROM base as build-step
RUN bundle exec jekyll build

FROM scratch as build
COPY --from=build-step /usr/src/app/_site /

FROM base as server
EXPOSE 4000
CMD bundle exec jekyll serve --host 0.0.0.0 --port 4000 --destination /tmp/_site
