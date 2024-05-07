---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/agendas/YYYY/MM/DD -->

{% assign files = site.static_files, item.path | where_exp: "item", "item.path contains 'assets/meetings'" %}

{% assign years = "2020,2021,2022,2023,2024" | split: ',' | reversed %}
{% assign months = "01,02,03,04,05,06,07,08,09,10,11,12" | split: ',' | reversed %}

<h2>CSS Committee Meetings</h2>

<p>

{% for year in years reversed %}
    <h3>{{year}}</h3>
    {% for month in months reversed %}
        <h3>{{month}}</h3>
        {% for file in files reversed %}
            <p>Checking file: {{file.path}}</p><br>
            <!-- {% if file.path contains 'assets/meetings/{{year}}/{{month}}/' %}
                <a href='{{file.path}}'>{{file.name}}</a><br>
            {% endif %} -->
        {% endfor %}
    {% endfor %}
{% endfor %}

</p>
