---
layout: internal
title: Sitemap
permalink: /sitemap/
---

<!--- This child document initializes the page in Jekyll. -->

<div class="row">
	<div class="columns">
		<br>
		<h1>All Available Pages for BigRedSky</h1>
		<br>

		<section class="section has-padding">
			<ul class="small-block-grid-2 medium-block-grid-1">
				{% for item in site.pages %}
					<li><a href="{{ item.url }}">{{ item.title }}</a></li>
				{% endfor %}
			</ul>
		</section>

	</div>
</div>