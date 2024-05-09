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
            <ul>
            {% for file in files reversed %}
                {% assign fp = 'assets/meetings' | append: '/' | append: p | append: '/' %}
                {% if file.path contains fp %}
                    <li>
                    {% if file.name contains 'agm' %}
                        {% if file.name contains 'minutes' %}
                            <a href='{{file.path}}'>AGM Minutes - {{file.name}}</a><br>
                        {% else %}
                            <a href='{{file.path}}'>AGM Agenda - {{file.name | truncate: 2, ""}}/{{m}}/{{y}}</a><br>
                        {% endif %}
                    {% elsif file.name contains 'egm' %}
                        {% if file.name contains 'minutes' %}
                            <a href='{{file.path}}'>EGM Minutes - {{file.name}}</a><br>
                        {% else %}
                            <a href='{{file.path}}'>EGM Agenda - {{file.name | truncate: 2, ""}}/{{m}}/{{y}}</a><br>
                        {% endif %} 
                    {% else %}
                        {% if file.name contains 'minutes' %}
                            <a href='{{file.path}}'>Committee Meeting Minutes - {{file.name}}</a><br>
                        {% else %}
                            <a href='{{file.path}}'>Committee Meeting Agenda - {{file.name | truncate: 2, ""}}/{{m}}/{{y}}</a><br>
                        {% endif %}
                    {% endif %}
                    </li>
                {% endif %}
            {% endfor %}
            </ul>
        {% endif %}
    {% endfor %}
{% endfor %}
</p>
