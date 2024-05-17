---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/meetings/YYYY/MM/DD -->

{% assign files = site.static_files | where_exp: "item", "item.path contains 'assets/meetings'" %}


{% assign months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}

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
        {% if p contains y %}
            {% assign m = p | slice: 5, 7 %}            
            {% assign n = m | plus: -1 %}
            <h4>{{ months[n] }}</h4>
            {% assign revFiles = files | reverse %}
            <ul>
            {% for file in revFiles %}
                {% assign fp = 'assets/meetings' | append: '/' | append: p | append: '/' %}
                {% assign monthFiles = revFiles | where_exp:"file", "file.path contains fp" %}
                {% assign fileLength = monthFiles | size %}
                
                {% for file in monthFiles %}
                    <li>
                        {{ file.path }}
                    </li>
                {% endfor %}
            {% endfor %}
            </ul>
        {% endif %}
    {% endfor %}
{% endfor %}
</p>
