FROM ruby:2

RUN bundle config --global frozen 1 && \
    mkdir -p /vendor/bundle && \
    bundle config set --local path /vendor/bundle
WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 4000
CMD bundle exec jekyll serve --host 0.0.0.0 --port 4000

