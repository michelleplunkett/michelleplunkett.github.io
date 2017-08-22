---
layout: page
title: notebooks
description: This page contains various Jupyter Notebooks and R Markdown HTML files created for use in data science projects. 
permalink: /notebooks/
---

<ul class="post-list">
    {% for project in site.notebooks reversed %}
      <li>
        <h2><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
        <p>{{ post.description }}</p>
        <br/>
        <hr/>
      </li>
    {% endfor %}
</ul>
