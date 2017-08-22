---
layout: page
title: notebooks
description: This page contains various Jupyter Notebooks and R Markdown HTML files created for use in data science projects. 
permalink: /notebooks/
---

<ul class="post-list">
    {% for post in site.notebooks %}
      <li>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
        <p>{{ post.description }}</p>
        <hr/>
      </li>
    {% endfor %}
</ul>
