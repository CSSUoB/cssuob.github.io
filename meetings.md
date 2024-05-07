---
layout: textpage
title: Meetings
---

<h2>CSS Committee Meetings</h2>

<p>

{% for file in site.static_files %}
    {% if file.path contains 'assets/agendas' %}
        <a href='{{file.path}}'>{{file.name}}</a> <br>
    {% endif %}
{% endfor %}

</p>