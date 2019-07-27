# cssbham.com

This is the source code to [cssbham.com](https://cssbham.com).

## Configuration

A number of files can be used to configure the site:

- `_config.yml`
    - site-wide configuration
- `_data/`
    - contains data used to render the site, e.g. the committee
- `_posts/`
    - contains markdown files for each newletter post
- `_assets`
    - location for all static assets

Aside from modifying the theme of the site or adding new functionality, no
changes outsides these files should need to be made.

## Scripts

A number of utility scripts exist under `_scripts/`. Their functionality
should be detailed at the top of each one in a comment.

## Development

First, ensure that `gem` is installed.

Install bundle:

    $ gem install bundle

Install required dependencies:

    $ bundle install --path vendor/bundle

Run jekyll server:

    $ bundle exec jekyll serve

The website should now serving at http://127.0.0.1:4000.

### Writing a new post

To create a new post, create a markdown file in `_posts` with the post
content. You can see a template post already there to borrow from.

The filename should follow a precise format - to create this file from a
shell:

    $ touch _posts/"$(date +%Y-%m-%d)-<title>.md"

### Updating the committee

To update the committee:

1. Remove the old committee's photos from `assets/committee/`
2. Add the new committee's photos into `assets/committee/full`
    - Each image should have a 1:1 ratio.
    - Add the highest quality images you can (they'll be scaled down later).
    - Most common image formats are supported.
3. Create all the additional files by running `_scripts/committee.sh`
2. Edit `_data/committee.yaml` with the correct academic year and the new
   committee's details and pictures (make sure to use the `mini` images).
