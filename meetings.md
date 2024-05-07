---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/agendas/YYYY/MM/DD -->

{% assign files = site.static_files, item.path | where_exp: "item", "item.path contains 'assets/meetings'" %}

{% assign years = "2022,2023" | split: ',' %}
{% assign months = "01,02,03,04,05,06,07,08,09,10,11,12" | split: ',' %}

<h2>CSS Committee Meetings</h2>

<p>

{% for year in years reversed %}
    <h3>{{year}}</h3>
    {% for month in months reversed %}
        <h3>{{month}}</h3>
        {% assign slug = "{{year}}/{{month}}" %}
        {% for file in files reversed %}
            {% if file.path contains {{slug}} %}
                <a href='{{file.path}}'>{{file.name}}</a><br>
            {% endif %}
        {% endfor %}
    {% endfor %}
{% endfor %}

</p>
