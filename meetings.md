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

{% for path in paths %}{{ path | slice: -10, 1 }}{% endfor %}


{% assign years = "2022,2023" | split: ',' %}
{% assign months = "01,02,03,04,05,06,07,08,09,10,11,12" | split: ',' %}

<h2>CSS Committee Meetings</h2>

<p>

{% for year in years reversed %}
    <h3>{{year}}</h3>
    {% for month in months reversed %}

        <h3>{{month}}</h3>
        {% for file in files reversed %}
            {% assign file_path = 'assets/meetings' | append: '/' | append: year | append: '/' | append: month | append: '/' %}
            {% if file.path contains {{file_path}} %}
                    <a href='{{file.path}}'>{{file.name}}</a><br>
            {% endif %}
        {% endfor %}
    {% endfor %}
{% endfor %}

</p>
