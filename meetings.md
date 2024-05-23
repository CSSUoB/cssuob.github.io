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
{% assign ms = "" | split: ',' %}


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
        {% for p in ps reversed %}
            {% if p contains y %}   
                {% assign arr = "" | split: ',' %}
                {% capture m %}{{ p | slice: 5, 2}}{% endcapture %}
                {% assign arr = arr | push: m | uniq %}
                {{arr}}

                {% assign ms = arr[0] %}
                {% for item in arr %}
                    {% unless ms contains item %}
                        {% capture ms %}{{ ms }},{{ item }}{% endcapture %}
                    {% endunless %}
                {% endfor %}

            {% endif %}
        {% endfor %}
{% endfor %}
</p>
