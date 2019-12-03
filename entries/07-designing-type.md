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

Okay, so since Type is a tool to build websites, let's start on the output we want first and work backwards from there.

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

[Here's a link to a partial build of the landing page.](https://github.com/typecms/demo/tree/json-based-front-end)



---



<div style='position:relative; padding-bottom:calc(56.25% + 44px)'><iframe src='https://gfycat.com/ifr/ShabbyNippyInvisiblerail' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div><p> <a href="https://gfycat.com/shabbynippyinvisiblerail">via Gfycat</a></p>



## Updates

It's the next day and I have some thoughts after building out the front-end.



### Using the block type isn't as good as I thought

Using the block type.. not a good idea. Like the customer list, there might be specific designs for specific pages so it's better to base it off of the id instead.

To be fair, we can use practically any data the api passes on.



### How about block variants?

For things like reversing bi-folds, and all that, I still think passing them off as data can still make it work.



```json
[
  {
    type: "Bifold",
    data: {
      image: '...',
      heading: '...',
      isReversed: false,
    }
  }
]
```



### Using camel case over snake case

I started off using snake case for the API attributes since I'm pretty used to that but after building out the landing page, it got pretty annoying transforming the data just so the code style is consistent on the front-end.

For now, I think I'll default to camel case, although, I think this can be manually set in userland, so it should not be a big problem later on. :thinking:

```js
asyncData () {
  const { contactNumber } = this.$api.globals.all()
  
  return { contactNumber }
}

// over

asyncData () {
  const { contact_number: contactNumber } = this.$api.globals.all()
  
  return { contactNumber }
}
```

I guess there really are some ways to skirt around it but less code, less problems. 



On the PHP side I still prefer snake case for database-driven attributes.

```php
{{ $globals->contact_number->pretty }}
```



---

## Let's do a hard stop here

I'm babbling, the post has lost its direction since I've been just dumping thoughts for the past three days. On the next one, we'll start working on the backend to figure out how to build out this package. :grimacing: