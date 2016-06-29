---
layout: page
title: portfolio
description: Writings from my previous courses at UIUC and UT Austin.
permalink: /portfolio/
---

<ul class="post-list">
    {% for project in paginator.portfolio %}
      <li>
        <h3><a class="project-title" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a></h3>
        <p class="post-meta">{{ project.date | date: '%B %-d, %Y' }} &middot; {{ project.description }}</p>
        <!-- {{ project.excerpt }} -->
      </li>
    {% endfor %}
</ul>
