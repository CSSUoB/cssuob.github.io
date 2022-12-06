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
    description: >
      TeX wearing a Santa hat and wrapped with fairy lights. Stickers of Christmas TeX are handed out 
      at our Christmas meal.
    ratio: 1.087

  - name: Ball TeX
    path: tex_ball.png
    description: TeX with a tux! Stickers of Ball TeX are handed out at the CSS Ball.
    ratio: 1.087

  - name: Pride TeX
    path: tex_pride.png
    description: >
      TeX holding a pride flag. If you didn't know, TeX is non-binary and uses they/them pronouns. 
      Stickers are handed out at our pride events.
    ratio: 1.087

  - name: BBQ TeX
    path: tex_bbq.png
    description: >
      Chef TeX at the annual CSS BBQ. Stickers are handed out at our BBQ events.
    ratio: 1.127   
    
  - name: Graduation TeX
    path: tex_graduation.png
    description: > 
      TeX graduating from university. Stickers are given at graduation to those graduating each 
      year.
    ratio: 1.042

  - name: Old Joe TeX
    path: tex_old-joe.png
    description: > 
      TeX masquerading as Old Joe. Stickers are handed out as a prize for completing the scavenger 
      hunt.
    ratio: 0.704

  - name: Megaphone TeX
    path: tex_megaphone.png
    description: TeX holding a megaphone. We use this for our publicity.
    ratio: 1.326

  - name: Halloween TeX
    path: tex_halloween.png
    description: TeX under a white cloth pretending to be a ghost. Currently, this isn't used anywhere.
    ratio: 1.087

  - name: Speech TeX
    path: tex_speech.png
    description: TeX with a speech bubble. Currently, this isn't used anywhere.
    ratio: 1.130

  - name: Ballot TeX
    path: tex_ballot.png
    description: >
      TeX exercising their democratic rights as a CSS member. Stickers are handed out at our elections.
    ratio: 1.109

---

# TeX

TeX is the official mascot of the Computer Science Society, illustrated by one of our former members, 
Kate ([@kyrallei](https://www.instagram.com/kyrallei/)).

<figure>
  <img src="/assets/tex/raster/tex_original.png" alt="TeX">
  <figcaption>TeX, our mascot since 2019.</figcaption>
</figure>

They originated in 2019, when CSS members wore a purple dinosaur costume to the EPS Trophy sports day 
to motivate CS students. It was suggested in a committee meeting that the dino should become our mascot, 
and after workshopping some name suggestions, the name TeX was proposed. The name stems from the dinosaur 
't-rex', and is also a play on the typesetting system '[TeX](https://en.wikipedia.org/wiki/TeX)'.

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
