---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/meetings/YYYY/MM/DD -->

{% assign files = site.static_files | where_exp: "item", "item.path contains 'assets/meetings'" %}


{% assign paths = "" | split: ',' %}

{% for file in files %}
    {% assign paths = paths | push: file.path %}
{% endfor %}

{% assign ps = "" | split: ',' %}
{% assign ys = "" | split: ',' %}

{% for path in paths %}
    {% capture p %}{{ path | remove: "/assets/meetings/" | slice: 0, 7 }}{% endcapture %}
    {% capture y %}{{ path | remove: "/assets/meetings/" | slice: 0, 4 }}{% endcapture %}
    {% assign ps = ps | push: p | uniq %}
    {% assign ys = ys | push: y | uniq %}
{% endfor %}

<p>
<h2>CSS Committee Meetings</h2>
{% for y in ys reversed %}
    <h3>{{y | slice: 0, 4}}</h3>
    {% for p in ps reversed %}
        {% if p contains {{y}} %}
            {% assign m = p | slice: 5, 7 %}
            {% if {{m}} == '01' %}<h4>January</h4>
            {% elsif {{m}} == '02' %}<h4>February</h4>
            {% elsif {{m}} == '03' %}<h4>March</h4>
            {% elsif {{m}} == '04' %}<h4>April</h4>
            {% elsif {{m}} == '05' %}<h4>May</h4>
            {% elsif {{m}} == '06' %}<h4>June</h4>
            {% elsif {{m}} == '07' %}<h4>July</h4>
            {% elsif {{m}} == '08' %}<h4>August</h4>
            {% elsif {{m}} == '09' %}<h4>September</h4>
            {% elsif {{m}} == '10' %}<h4>October</h4>
            {% elsif {{m}} == '11' %}<h4>November</h4>
            {% elsif {{m}} == '12' %}<h4>December</h4>
            {% endif %}
            {% for file in files reversed %}
                {% assign fp = 'assets/meetings' | append: '/' | append: p | append: '/' %}
                {% if file.path contains fp %}
                    <a href='{{file.path}}'>{{file.name}}</a><br>
                {% endif %}
            {% endfor %}
        {% endif %}
    {% endfor %}
{% endfor %}
</p>
