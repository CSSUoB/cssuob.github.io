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

### Adding new redirects

To manage a new redirect, then add it to `_data/redirects.yaml`, following
the format of the entries that are already there.

This avoids needing to add files and folders everywhere, keeping the site
cleaner.

### Writing a new post

To create a new post, create a markdown file in `_posts` with the post
content. You can see a template post already there to borrow from.

The filename should follow a precise format - to create this file from a
shell:

    $ touch _posts/"$(date +%Y-%m-%d)-<title>.md"

You can add a thumbnail to a post; simply link the thumbnail in the front
matter in the markdown file for the post. The thumbnail should be a 150px
square for best results.

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

### Calendar Events

Canendar events are extracted from the CSS public Google Calendar. 

Clicking on the calendar event shows the information about the event.

Title: The title of the event as on the Google Calendar event.

Date: The time and date of the event as on the Google Calendar event.

| Date Format                           | Use Case                                       |
|---------------------------------------|------------------------------------------------|
| DD MMM YYYY - DD MMM YYYY             | All Day when the year changes                  |
| DD MMM YYYY HH:MM - DD MMM YYYY HH:MM | Time specified when year changes               |
| DD MMM - DD MMM                       | All Day when month changes                     |
| DD MMM HH:MM - DD MMM HH:MM           | Time specified when month changes              |
| DD - DD MMM                           | All day on different days in same month        |
| DD MMM HH:MM - DD MMM HH:MM           | Time specified on different days in same month |
| DD MM HH:MM - HH:MM                   | Same day                                       |

Location: The location of the event as on the Google Calendar event.

More Info: The desctiption of the Google Calendar event, formatted as follows:

| Formatting                         | Description                                                                   |
|------------------------------------|-------------------------------------------------------------------------------|
| `<desc>text</desc>`                | `text` is displayed                                                           |
| `<br>`                             | Do not use. Escaped characters are placed into the text. Use native breaklines|
| Breakline in Google Calendar Event | A breakline is placed into the text                                           |
| `<fb>link</fb>`                    | `link` should be a Facebook Event link. Linked to by the button               |
| none                               | The text in the Google Calendar Event is displayed                            | 


