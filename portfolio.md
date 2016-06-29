---
layout: page
title: portfolio
description: Writings from my previous courses at UIUC and UT Austin.
permalink: /portfolio/
---

<ul class="post-list">
    {% for project in site.portfolio reversed%}
      <li>
        <h3><a class="project-title" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
        <p class="post-meta">{{ project.date | date: '%B %-d, %Y' }} &middot; {{ project.description }}</p>
        <!-- {{ project.excerpt }} -->
      </li>
    {% endfor %}
</ul>

<!--
{% for project in site.portfolio %}

{% if project.redirect %}
<div class="project">
    <div class="thumbnail">
        <a href="{{ project.redirect }}" target="_blank">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>
{% else %}

<div class="project ">
    <div class="thumbnail">
        <a href="{{ site.baseurl }}{{ project.url }}">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
        </a>
    </div>
</div>

{% endif %}

{% endfor %}
-->
