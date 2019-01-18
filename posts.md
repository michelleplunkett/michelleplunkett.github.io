---
layout: page
title: posts
description: Michelle's blog posts and life updates. 
permalink: /posts/
---

<ul class="post-list">
    {% for post in site.posts reversed %}
      <li>
        <h5><a class="post-title" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
        <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
        <p>{{ post.description }}</p>
        <hr/>
      </li>
    {% endfor %}
</ul>
