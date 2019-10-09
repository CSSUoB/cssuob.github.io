# cssbham.com

This is the source code to [cssbham.com](https://cssbham.com).

## Configuration

A number of files can be used to configure the site:

- `_config.yml`
    - site-wide configuration
- `_data/`
    - contains data used to render the site, e.g. the committee
- `_collections/news/`
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

To create a new post, create a markdown file in `_collections/news` with the
post content. You can see a template post already there to borrow from.

The filename should follow a precise format - to create this file from a
shell:

    $ touch _collections/news/"$(date +%Y-%m-%d)-<title>.md"

You can add a thumbnail to a post; simply link the thumbnail in the front
matter in the markdown file for the post. The thumbnail should be a 150px
square for best results.

### Calendar Events

The calendar events are accessed from the public CSS Google calendar also
available [here][calendar]. They are accessed from the calendar using
[FullCalendar][fullcalendar] and an API key managed from the Google Cloud
Console.

To add a new calendar event, a member of the CSS committee with access to the
calendar must add a new event, and it will automatically appear on the
website.

#### Event formatting

The event data displayed on the webiste is taken directly from the Google
Calendar event. Some properties are extracted using XML-like tags from the
event description - note that this does **not** imply that other XML tags are
implemented, so no other tags aside from the ones specified here should be
used.

| Content       | Source                                                                                                                     |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------|
| title         | the name of it appears on the calendar                                                                                     |
| date          | the date and time as it appears on the calendar                                                                            |
| location      | the location as it appears on the calendar                                                                                 |
| description   | `<desc></desc>` tags in the event description, otherwise, the full event description, which may include other tags if used |
| facebook link | `<fb></fb>` tags in the event description                                                                                  |

Note that for the facebook event link, all matching `<a></a>` tags are then
removed from the event description.

The time and date format used is chosen automagically depending on the times
and dates given in the calendar event. The below table details the process:

| Date Format                           | Used when                                      |
| :------------------------------------ | :--------------------------------------------- |
| DD MMM YYYY - DD MMM YYYY             | all day when the year changes                  |
| DD MMM YYYY HH:MM - DD MMM YYYY HH:MM | time specified when year changes               |
| DD MMM - DD MMM                       | all day when month changes                     |
| DD MMM HH:MM - DD MMM HH:MM           | time specified when month changes              |
| DD - DD MMM                           | all day on different days in same month        |
| DD MMM HH:MM - DD MMM HH:MM           | time specified on different days in same month |
| DD MM HH:MM - HH:MM                   | same day                                       |

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

[calendar]: https://calendar.google.com/calendar/embed?src=kg5v9k480jn2qahpmq33h8g7cs%40group.calendar.google.com&ctz=Europe%2FLondon
[fullcalendar]: https://fullcalendar.io/