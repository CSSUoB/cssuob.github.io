---
layout: textpage
title: TeX Talks Schedule
styles:
- /css/tex-talks.css

date: "13th March 2023"
schedule:
  # - time: "16:00"
  #   speaker: null
  #   title: Talk from BEAR
  #   description: Description

  - time: "16:30"
    speaker: Iran Mansuori
    title: What does culture mean for robots?
    description: >
      The vast majority of approaches to introducing cultural factors 
      into robotics rely on what is perceived to be a national culture. 
      It has been shown that the oversimplified confounding of culture 
      and nationality results in implicit support for conservative social
      policies, and the reproduction of cultural stereotypes. However, 
      there are many theories of culture not based solely on nationality. 
      These theories come from different disciplines ranging from 
      psychology, linguistics, anthropology and political science to 
      philosophy, only to name a few. In robotics, there are many 
      knowledge representations, automated reasoning, and machine 
      learning techniques, each of which has a different expressivity, and
      varying computational capacities that can be harnessed for representing 
      a different interpretation of culture. This talk advocates an epistemic 
      analysis of cultural theories through the lens of AI methods as an 
      essential step for endowing robots with culture. I argue that such an 
      analysis not only allows us to identify which fundamental theories of 
      culture are candidates to be programmed into, or learned by robots, but 
      also provides transparency in how an intelligent robot behaves in
      different cultural contexts.
    image: [images/iran-mansouri.jpg]

  - time: "17:00"
    speaker: Nat Abramenko and Caragh Green
    title: >
      The gift that keeps on taking: How to prepare organisations for ransomware 
      and other crises
    description: >
      This talk will provide an overview of what the PwC Crisis and Resilience
      team actually does day-to-day, including preparing and supporting 
      organisations to respond to crises like ransomware.

      We will look look at the ways in which we simulate crises and tailor 
      them to suit the organisation’s priorities and pain points; how different
      crises impact an organisation's operations, reputation, and financial
      stability; how we can help them during a real-life incident; and
      what we have been doing to support organisations as the cyber and
      geopolitical landscape continues to change.
    image: [images/nat.png, images/caragh.png]

  - time: "17:30"
    speaker: Aaron Tello-Wharton
    title: > 
      Artificial Intelligence is great, until it isn't. Why does this keep happening?
    description: >
      Aaron is a developer at Majestic, a Birmingham-based tech company who are 
      kindly providing pizza for TeX Talk attendees. He will be giving us a run down 
      of what modern AI and machine learning is and why the data you put into it is 
      vitally important to avoid getting crap out the other end!
    image: [images/aaron-tello-wharton.jpg]

  - time: "18:00"
    title: Pizza
    description: Pizza break!

  - time: "18:30"
    speaker: Martin Rudorfer
    title: Robotic Grasping and Manipulation
    description: >
        Martin will give an overview of his research revolving around robotic 
        grasping and manipulation. First, he will take on an industrial robotics 
        point of view, where we usually can exploit the availability of 3d models 
        of the objects we aim to manipulate, but often require high accurancy to 
        allow e.g. assembly operations. Second, he will consider robots in less 
        structured environments, like households, where unknown objects need to be
        grasped. The main challenges here are the generalisation to various 
        kinds of objects, the gap between simulation and reality and a limited 
        reproducibility of experiments.
    image: [images/martin-rudorfer.jpg]

  - time: "19:00"
    speaker: Lik Kan Chung
    title: "AWS: Why do people keep using it?"
    description: >
      CSS alumnus and Kainos grad LikKan will be talking about Amazon Web Services and
      the pros and cons of the cloud services industry for businesses and individuals. 
    image: [images/likkan.jpg]

  - time: "19:15"
    speaker: Jon Kingsley
    title: How to brick your car, ruin your printer, and destroy your relationships
    description: >
      Come on a magical mystery tour through the world of reverse 
      engineering, where nothing can be trusted, and drones, graphing 
      calculators, broken crypto, broken people, and angry Markov chains are 
      your only friends. We’ll discuss why all security will fail, how your 
      lightbulbs are plotting to kill you, how processors lie to you about 
      powerful they actually are, and why in the future your Fridge will be 
      held hostage by the Albanian Mafia.
    image: [images/jon-kingsley.avif]
---

# TeX Talks Schedule

## *{{ page.date }}*

Interested in learning beyond what your CS degree teaches? Want to find out about CS careers outside of software development? Pizza? Then come to the **Aston Webb building** on **Monday the 13th of March** at **4pm** for a series of short talks about new and different CS and technology topics in an event we're calling TeX Talks. 

Make sure to register for a **FREE** ticket: [cssbham.com/tex-talks-tickets](/tex-talks-tickets)

### Schedule

<div class="schedule">
<div class="tex-container"><div class="tex-image"><img class="tex" src="/assets/tex/raster/tex_megaphone.png" alt="Megaphone TeX"/></div></div>
{% for slot in page.schedule %}
<div class="slot-container">
    <div class="slot-header">
        <span class="slot-title">{% if slot.speaker %}<b>{{ slot.speaker }}</b>: {% endif %}{{ slot.title }}</span>
        <span class="slot-time"><img class="clock-symbol" src="/assets/clock.svg" alt="Clock"/><b><i>{{ slot.time }}</i></b></span>
    </div>
    {% if slot.description %}
    <div class="slot-body">
        {% if slot.image %}
        <div class="slot-image-container">
          {% for image in slot.image %}
          <div class="slot-image"><img src="/assets/{{ image }}" alt="{{ slot.speaker }}" /></div>
          {% endfor %}
        </div>
        {% endif %}
        <div class="slot-content" markdown="span">{{ slot.description }}</div>
    </div>
    {% endif %}
</div>
{% endfor %}
</div>

<div class="section-box" markdown="1">
## Need a ticket?

* Make sure register for a [free ticket](/tex-talks-tickets), so we can keep track of numbers! ✨
* This events starts at 4pm and is expected to last no more than 4 hours.
* The talks will be held in the Aston Webb Building, lecture theatre WG5.
* Food and drinks will be provided! 🍕

See you all there! 🚀
</div>
