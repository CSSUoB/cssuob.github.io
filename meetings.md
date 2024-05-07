---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/agendas/YYYY/MM/DD -->

{% assign agendas = site.static_files, item.path | where_exp: "item", "item.path contains 'assets/agendas'" %}

{% assign years = "2020,2021,2022,2023,2024" | split: ',' | reversed %}
{% assign months = "01,02,03,04,05,06,07,08,09,10,11,12" | split: ',' | reversed %}

<h2>CSS Committee Meetings</h2>

<p>
{% for year in years reversed %}
    <h3>{{year}}</h3>
    {% for month in months reversed %}
        <h3>{{month}}</h3>
        {% for agenda in agendas reversed %}
            {% if agenda.path contains 'assets/agendas/{{year}}/{{month}}/' %}
                <a href='{{agenda.path}}'>{{agenda.name}}</a> <br>
            {% endif %}
        {% endfor %}
    {% endfor %}
{% endfor %}

</p>