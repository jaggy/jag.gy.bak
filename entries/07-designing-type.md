---
title: Designing Type CMS
permalink: /designing-type-cms 
date: 2019-12-02T14:18:00+08:00
is_published: true
---



Now that we've started to yet again write another CMS, how do we go about it? In my case, whenever I write any product or package, I tend to start designing the ideal design and start adding in compromises depending on external factors (mostly my own technical knowhow).



So, let's just jump into it and let's build this!



<!-- more -->



## The design

For Type, our main goal is the ability to work on the front-end without having to wait for any back-end work to have even started development. 

To make this work, we want to mainly work with JSON objects on the front-end, but we also want to make sure that Type works with a monolithic app since there are times that I really don't want two different packages for a single website.

Okay, so since Type is a tool to build websites, let's start on the output we want first and work backwards from there. [Here's a link to the demo project.](https://github.com/typecms/demo)

Let's remake the [Postmark landing page](https://postmarkapp.com/) since I really like it.



### Statamic and Prismic/Contentful

Whenever I start working on some Statamic sites, I do the same thing, you can immediately start working with hard-coded data with variables extracted to frontmatter, then later move it out to the CMS. We'll take that, but use JSON.

> I haven't looked into Statamic v3 yet, so if it's *extremely similiar*, sorry Jack, Jason, and Jesse. :sweat_smile:

Moving on, for the headless side, I always like using dedicated components/partials for the blocks, and having to jigsaw something without the need for the backend sounds great.

Imagine if we have some built wireframe components that we can just automagically switch with production data!



```html
<Hero />
<Customers />
<Features />
<Partners />
<Testimonials />
<Metrics />
<Support />
<Demo />
<CallToAction />
```



or, if we want to loop through the blocks:



```php
<Component 
  :is="block.type" 
  v-bind="block.data" 
  v-for="block in page.blocks" 
  />

// or with blade

@each("blocks.{$block->type}", $blocks, 'block')
```