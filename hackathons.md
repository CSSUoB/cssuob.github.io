---
layout: textpage
title: Hackathons
styles:
  - /css/hackathon-events.css

hackathons:
  - name: HackTheMidlands 4.0
    data: October 2019
    image: /assets/images/htm.jpg?raw=true
  - name: OxfordHack 2019
    data: November 2019
    image: /assets/images/oxfordhack.jpg?raw=true
  - name: DurHack 2019
    data: November 2019
    image: /assets/images/durhack.jpg?raw=true
  - name: ManMetHacks 2.0
    data: January 2020
    image: /assets/images/manmethacks.jpg?raw=true
  - name: CovHack2020
    data: February 2020
    image: /assets/images/covhack.jpg?raw=true
  - name: Hack the Burgh VI
    data: February/March 2020
    image: /assets/images/hacktheburghvi.jpg?raw=true
---

# Hackathons

Hackathons are a great way to learn new skills, meet new people, and have
lots of fun! Interested in attending hackathons? Contact anyone on the
existing [committee](/committee), and they'll be able to give you some more
information, or point you in the right direction.

## Calendar

You can find out what events are going on around the UK on the [Hackathons UK Wiki](https://hack.athon.uk). Some of the larger events are [Major League Hacking](https://mlh.io) Member Events. You can find these ones on their [calendar](https://mlh.io/eu).

## Frequently asked questions

### _What is a hackathon?_

A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn’t about hacking into a system, it’s instead about hacking something together and learning a great deal in the process.

### _What do you do at a hackathon?_

There's loads of different things you can get involved in at a hackathon, for example:

- Team building
- Build projects
- Workshops and talks
- Mini games
- Hang out in chill zones
- Present your project

### _How much do they cost?_

Student hackathons are usually completely free! Food, drinks, power, WiFi, and a sleeping area are all provided completely free! 

The only thing you'll need to pay for is your travel. Sometimes they will even provide travel reimbursement up to a certain amount. 

### _What should I bring with me?_

You should bring as a bare minimum:

- Your laptop and charger
- Student ID

We also suggest you bring along:

- Sleeping bag / blanket
- Deodorant
- Toothbrush + Toothpaste
- A change of clothes
- Any snacks you might want for the travel

### _What is a typical schedule like?_

Hackathons normally run over a weekend, with 24 hours to work on a project!

#### Saturday 

- Arrive: 10:00
- Opening Ceremony: 11:00
- Hacking Starts: 12:00
- Lunch: 13:00
- Workshops: 14:00 - 18:00
- Dinner: 19:00
- Mini Games: 20:00

#### Sunday 

- Midnight Pizza: 00:00
- Hacking Ends: 12:00
- Lunch: 12:30
- Judging: 13:00
- On Stage Demos: 15:00
- Awards: 16:00

## Events CSS has been to!

<div class="row">
{% for hackathon in page.hackathons %}
  <div class="column">
    <div class="card">
      <img src="{{ hackathon.image }}" alt="{{ hackathon.name }}" style="width:100%">
       <div class="container">
         <h2 class="name">{{ hackathon.name }}</h2>
         <p class="date">{{ hackathon.date }}</p>
       </div>
    </div>
  </div>
{% endfor %}
</div>
