---
layout: textpage
title: TeX
styles:
  - /css/tex.css

tex_height: 130
tex_dir: assets/tex/raster
tex:
  - name: TeX
    path: tex_original.png
    description: Original TeX, CSS' mascot since 2019.
    ratio: 1.087

  - name: Christmas TeX
    path: tex_christmas.png
    description: TeX wearing a Santa hat and wrapped with fairy lights. Stickers of Christmas TeX are handed out at our Christmas meal.
    ratio: 1.087

  - name: Ball TeX
    path: tex_ball.png
    description: .
    ratio: 1.087

  - name: Pride TeX
    path: tex_pride.png
    description: .
    ratio: 1.087

  - name: BBQ TeX
    path: tex_bbq.png
    description: .
    ratio: 1.127   
    
  - name: Graduation TeX
    path: tex_graduation.png
    description: .
    ratio: 1.042

  - name: Old Joe TeX
    path: tex_old-joe.png
    description: .
    ratio: 0.704

  - name: Megaphone TeX
    path: tex_graduation.png
    description: .
    ratio: 1.326

  - name: Halloween TeX
    path: tex_halloween.png
    description: .
    ratio: 1.087

  - name: Speech TeX
    path: tex_speech.png
    description: .
    ratio: 1.130

  - name: Ballot TeX
    path: tex_ballot.png
    description: .
    ratio: 1.109

---

# TeX

TeX is the official mascot of the Computer Science Society. In 2019, CSS wore a purple dinosaur costume to the 
EPS Trophy sports day to motivate CS students, and eventually that turned into our mascot. TeX was 
illustrated by one of our former members, Kate ([@kyrallei](https://www.instagram.com/kyrallei/)).

<figure>
  <img src="/assets/tex/raster/tex_original.png" alt="TeX">
  <figcaption>TeX, our mascot since 2019.</figcaption>
</figure>

Fun Fact: TeX is non-binary and uses they/them pronouns. This is because they're an inanimate inflatable costume 
and gender is a lie.

## Variations

<table>
  <colgroup>
      <col span="1" style="width: 20%;">
      <col span="1" style="width: 20%;">
      <col span="1" style="width: 60%;">
  </colgroup>
  <tbody>
    <tr>
      <th>TeX</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
  {% for tex in page.tex %}
    <tr>
      <td><img src="/{{ page.tex_dir }}/{{ tex.path }}" alt="{{ tex.name }}" width="{{ page.tex_height | times: tex.ratio }}" height="{{ page.tex_height }}" /></td>
      <td>{{ tex.name }}</td>
      <td>{{ tex.description }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
