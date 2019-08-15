---
layout: post
title: "Website Update"
permalink: /newsletter/:title
thumbnail: /assets/thumbnails/tada.jpg
---

The new website is finally, finally here!

...it's taken a while to get here. In the last semester, when we were sitting
down to meetings with our new committee, one of the things we said we wanted
to focus on was communication with our members. After all, that's the only
real reason we're here. But a complaint I've heard a lot is that there's no
way to really keep up with what we're doing; so in response to that, I've
been working on this new website, Lik Kan has been working on making our
social media presence clearer and all of us are trying to make sure that
everyone's voice is heard and represented.

So what's actually on this new and flashy website?

- **[Newsletter](/newsletter)** - This is our new blog
  post area, where we'll post updates, such at this one! You'll be able to
  read what we've been getting up to as a society, as being able to find out
  more information about our events.
- **[Calendar](/calendar)** - We now have a calendar page!
  We organize a lot of events, and we've recently made a lot of changes to
  how we keep track of them. So now we have a new page on the webiste that
  lists all of them, all of the time.
- **[About](/about)** - An about page - we can keep a list
  of social media we're on as well as just some general information about
  the society.
- **[Committee](/committee)** - Probably my favoite part
  of the new site. Hopefully, by putting ourselves up there, it's easier to
  reach out to us and know who we are!

We're going to continue working on more stuff on this site and improving it
more and more, but the main work is done now. If you're interested in helping
out, you can checkout the GitHub [here](https://github.com/CSSUoB/cssuob.github.io/).

## Tech stack

So, now that's out of the way, the fun part... the tech stack!

We used to have just a few static pages as HTML documents - but now we have a
fully fledged [Jekyll](https://jekyllrb.com/) site! I've used Jekyll before in the past, but I've
never written a theme from scratch, or used any of the more advanced
features. So I got to learn a few new skills and can now comfortably use
Jekyll!

*(Disclaimer: Jekyll is awesome, and you should use it for everything on your
webiste. All of the rest of this post is me going on about why Jekyll is
great.)*

### Data files

Data files are super nifty, and let you use a collection of yaml files to
insert content into the site. As the yaml's much easier to edit and use, it's
easy to give to someone else to modify and re-use all across the site.

For example, before, we used to have to manually add new pages every time we
wanted to add a redirect link; now, thanks to a clever hack, we can use jekyll to
insert redirects from a yaml file into the javascript of our 404 page!

### Themes

Writing a theme from scratch is interesting - when we went from the old site
to the new one, there were already some stylesheets, but not particularly
organized. The very first task I looked at was to cleanup the CSS\* and move it
in SCSS.

There's only one problem with using SCSS - it makes going back to normal CSS\*
frustrating. Thanks to that, we're able to have easy-to-read and *hopefully*
easy-to-edit style sheets.

## Conclusion

That's probably enough about that.

Hopefully you all enjoy our new website!

**Justin**

---
\* Here we mean *Cascading Style Sheets*, not *Computer Science Society*
