---
layout: textpage
title: Meetings
---

<!-- PATH FORMAT:  assets/meetings/YYYY/MM/DD/agenda.pdf -->

{% assign files = site.static_files | where_exp: "item", "item.path contains 'assets/meetings'" %}


{% assign months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}

{% assign paths = "" | split: ',' %}

{% for file in files %}
    {% assign paths = paths | push: file.path %}
{% endfor %}

{% assign ps = "" | split: ',' %}
{% assign ys = "" | split: ',' %}

{% for path in paths %}
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
        {% assign ds = "" | split: ',' %}
        {% for p in ps reversed %}
            {% if p contains y %}
                {% assign tmp = p | slice: 5, 2 %}
                {% if tmp contains m %}
                    {% capture d %}{{ p | slice: 8, 2}}{% endcapture %}
                    {% assign ds = ds | push: d | uniq %}
                {% endif %}
            {% endif %}
        {% endfor %}
        {% assign n = m | minus: 1 %}
        <h4>{{months[n]}}</h4>
        <ul>
        {% for file in files reversed %}
            {% if file.path contains y %}
                {% assign tmp = file.path | remove: "/assets/meetings/" | slice: 5, 2 %}
                {% if tmp contains m %}
                    {% assign index = forloop.length | minus: forloop.index %}
                    {% assign new_path = files[index].path%}
                    {% assign path1 = new_path | slice: 0,28 %}
                    {% assign incrementIndex = index | plus: 1 %}
                    {% assign path2 = files[incrementIndex].path | slice: 0, 28 %}
                    {% assign decrementIndex = index | minus: 1 %}
                    {% assign path3 = files[decrementIndex].path | slice: 0, 28 %}

                    {% assign day = file.path | remove: "/assets/meetings" | slice: 9, 2 %}
                    {% assign month = file.path | remove: "/assets/meetings" | slice: 6, 2 %}
                    {% assign year = file.path | remove: "/assets/meetings" | slice: 1, 4 %}


                    {% if path2 contains path1 %}
                        {% if file.path contains '.html' %}
                            {% if file.path contains 'agm' %}
                                <li>
                                    AGM {{day}}/{{month}}/{{year}}: 
                                    <li>
                                        Agenda: <a href='{{path1}}agm/agenda.pdf'>PDF</a> - <a href='{{path1}}agm/agenda.html'>HTML (WIP)</a>
                                    </li>
                                    <li>
                                        Minutes: <a href='{{path1}}agm/minutes.pdf'>PDF</a> - <a href='{{path1}}agm/minutes.html'>HTML (WIP)</a>
                                    </li>
                                </li>
                            {% elsif file.path contains 'egm' %}
                                <li>
                                    EGM {{day}}/{{month}}/{{year}}: 
                                    <li>
                                        Agenda: <a href='{{path1}}egm/agenda.pdf'>PDF</a> - <a href='{{path1}}egm/agenda.html'>HTML (WIP)</a>
                                    </li>
                                    <li>
                                        Minutes: <a href='{{path1}}egm/minutes.pdf'>PDF</a> - <a href='{{path1}}egm/minutes.html'>HTML (WIP)</a>
                                    </li>
                                </li>
                            {% else %}
                                <li>
                                    Committee Meeting {{day}}/{{month}}/{{year}}: 
                                    <li>
                                        Agenda: <a href='{{path1}}/agenda.pdf'>PDF</a> - <a href='{{path1}}/agenda.html'>HTML (WIP)</a>
                                    </li>
                                    <li>
                                        Minutes: <a href='{{path1}}/minutes.pdf'>PDF</a> - <a href='{{path1}}/minutes.html'>HTML (WIP)</a>
                                    </li>
                                </li>
                            {% endif %}
                        {% else %}
                            {% if file.path contains 'agm' %}
                                <li>
                                    AGM {{day}}/{{month}}/{{year}}: <a href='{{path1}}agm/agenda.pdf'>Agenda</a> - <a href='{{path1}}agm/minutes.pdf'>Minutes</a>
                                </li>
                            {% elsif file.path contains 'egm' %}
                                <li>
                                    EGM {{day}}/{{month}}/{{year}}: <a href='{{path1}}egm/agenda.pdf'>Agenda</a> - <a href='{{path1}}egm/minutes.pdf'>Minutes</a>
                                </li>
                            {% else %}
                                <li>
                                    Committee Meeting {{day}}/{{month}}/{{year}}: <a href='{{path1}}agenda.pdf'>Agenda</a> - Minutes: <a href='{{path1}}minutes.pdf'>PDF</a>
                                </li>
                            {% endif %}
                        {% endif %}
                    {% elsif path1 contains path3 %}
                    {% else %}
                        {% if file.path contains 'agm' %}
                            <li>
                                 AGM {{day}}/{{month}}/{{year}}: <a href='{{path1}}agm/agenda.pdf'>Agenda</a>
                            </li>
                        {% elsif file.path contains 'egm' %}
                            <li>
                                EGM {{day}}/{{month}}/{{year}}: <a href='{{path1}}egm/agenda.pdf'>Agenda</a>
                            </li>
                        {% else %}
                            {% if new_path contains 'minutes' %}
                                <li>
                                    Committee Meeting {{day}}/{{month}}/{{year}}: <a href='{{path1}}minutes.pdf'>Minutes</a>
                                </li>
                            {% else %}
                                <li>
                                    Committee Meeting {{day}}/{{month}}/{{year}}: <a href='{{path1}}agenda.pdf'>Agenda</a>
                                </li>
                            {% endif %}
                        {% endif %}
                    {% endif %}
                {% endif %}
            {% endif %}
        {% endfor %}
        </ul>     
    {% endfor %}
{% endfor %}
</p>
