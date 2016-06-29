---
layout: page
title: portfolio
description: Writings from my previous courses at UIUC and UT Austin.
---

<ul class="post-list">
    {% for post in paginator.portfolio %}
      <li>
        <h3><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }} &middot; {{ post.description }}</p>
      </li>
    {% endfor %}
</ul>
