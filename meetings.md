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
<!-- {{path | remove: "/assets/meetings/"}} -->
    {% capture p %}{{ path | remove: "/assets/meetings/" | slice: 0, 10 }}{% endcapture %}
    {% capture y %}{{ path | remove: "/assets/meetings/" | slice: 0, 4 }}{% endcapture %}
    {% assign ps = ps | push: p | uniq %}
    {% assign ys = ys | push: y | uniq %}
{% endfor %}

<p>
<h2>CSS Committee Meetings</h2>
{% for y in ys reversed %}
    <h3>{{y | slice: 0, 4}}</h3>
    {% assign ms = "" | split: ',' %}
        {% for p in ps reversed %}
            {% if p contains y %}   
                {% capture m %}{{ p | slice: 5, 2}}{% endcapture %}
                {% assign ms = ms | push: m | uniq %}
            {% endif %}
        {% endfor %}

    {% for m in ms %}  
        <h4>{{m}}</h4>
        <ul>
        {% for file in files reversed %}
            {% if file.path contains y %}
                    {% assign tmp = file.path | remove: "/assets/meetings/" | slice: 5, 2 %}
                    {% if tmp contains m %}
                        <li>
                        <a href="{{file.path}}">{{p}}</a>
                        </li>
                    {% endif %}
            {% endif %}
        {% endfor %}
        
        </ul>     
    {% endfor %}
{% endfor %}
</p>
