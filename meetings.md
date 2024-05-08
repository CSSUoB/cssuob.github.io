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
            <h4>{{p | slice: 5, 7}}</h4>
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
