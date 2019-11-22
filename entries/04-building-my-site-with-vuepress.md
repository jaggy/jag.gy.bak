---
title: Building my site with Vuepress
date: 2019-11-17 12:50:48
is_published: false
---

> Wow. I rework my site more than I write entries.

I usually go for a CMS but `markdown-it`, the markdown parser Vuepress uses, has an extensive plugin gallery that solves a lot of what I need.

Turns out, Vuepress is not just for building docs anymore!

Here’s how I wrote the theme, plugins I am using, and the two ways I deploy my site, and the gotchas along the way.

<!-- more -->

## Writing a theme

### Stack

- PostCSS
- TailwindCSS
- Vue
- PurgeCSS

### Directory Structure

```
.vuepress/
  config.js
  theme/
  	components/
  		TheHeader.vue
  		TheFooter.vue
  		EntryPage.vue
  		EntryPreview.vue
  		HomePage.vue
  	fonts/
  	layouts/
  		Layout.vue
  	styles/
  	templates/
  		dev.html
  		ssr.html

```

### Seting up PostCSS, TailwindCSS, and PurgeCSS

Setting up Tailwind and PurgeCSS is like setting it up other PostCSS configs. I also use `postcss-import`, `postcss-nested`, and `postcss-color-function`. I still use Tailwind to shorten my classes rather than using the base utilities. Sorry for that. :sweat_smile:

For using PurgeCSS with Tailwind, we need to write a custom extractor as well. We’ll end up with something like this.



``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{4}
// config.js
const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

{
  // other config

  postcss: {
    plugins: [
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-color-function'),
      require('tailwindcss')(
        path.join(__dirname, '..', 'theme', 'tailwind.config.js')
      ),
      require('@fullhuman/postcss-purgecss')({
        content: [
          path.join(__dirname, '..', 'theme', 'components', '*.vue'),
          path.join(__dirname, '..', 'theme', 'layouts', '*.vue'),
          path.join(__dirname, '..', 'theme', 'templates', '*.html'),
        ],
        whitelist: [
          'html', 'body', 'sw-update-popup',
        ],
        whitelistPatternsChildren: [
          /^o-rich-text$/, /^language-/, /^sw-update-popup/,
          /^token/, /^pre/, /^code/,
        ],
        whitelistPatterns: [
          /^o-/, /^c-/, /^js-/,
        ],
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ["html", "vue"]
          }
        ]
      })
    ]
  }
}
```



### Loading ~~Typekit~~ Adobe Fonts via Javascript

Honestly, this one isn’t *THAT* necessary but I don’t really like using the link tag or the css import that Adobe Fonts provides since the CSS its `font-display` is auto, and I prefer `swap` so the fallback is used while loading the current font.

That’s where overriding Vuepress’ template comes in. By overriding the Vuepress template, we can add some more scripts outside of Vue component.

```html
<!-- dev.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title></title>
  </head>
  <body>
    <div id="app"></div>

    <script src="https://use.typekit.net/xxxxxx.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
  </body>
</html>
```

```html
<!-- ssr.html -->
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ title }}</title>
    <meta name="description" content="{{ description }}">
    {{{ userHeadTags }}}
    {{{ pageMeta }}}
    {{{ renderResourceHints() }}}
    {{{ renderStyles() }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
    {{{ renderScripts() }}}

    <script src="https://use.typekit.net/xxxxxx.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
  </body>
</html>
```

## markdown-it extensions

### The defaults that I love

:tada: Vuepress includes  markdown-it extensions out of the box that covers a wide range of use cases. [You can see all the included extensions here!](https://v1.vuepress.vuejs.org/guide/markdown.html) The ones I want to tal about are the ones that sold me to using Vuepress.

#### Emojis

```
:tada: :sweat_smile:
```

One could argue that the emoji picker can just be used but not all the editors have good spacing for these characters for now. There’s even some editors that override, or don’t allow the emoji picker shortcut so, there’s also that.

#### Line highlighting in code blocks

### markdown-it-attrs

This breaks header links whenever I add attributes to headers, since I align the attributes to the right ‘cause I got used to emacs’ org mode. Here’s how it looks like!

>  Scoll the code block for mobile. :sweat_smile:

```markdown
## “What if we need to search by the last name?”    {.hanging-punctuation}
...
...

## “But won’t that slow down the search?”           {.hanging-punctuation}
...
...
```

The default `slugify` helper creates these header slugs:

- `“what-if-we-need-to-search-by-the-last-name”-`
- `“but-won’t-that-slow-down-the-search”-`

Huh, I didn’t know that links were pretty fine with using single smart quotes! Anyway, there are smart quotes ***and*** a trailing dash ‘cause there ***are*** trailing spaces after the title for those sweet custom attributes! To clean up these slugs, we’ll have to extend the `slugify` helper.

```js
// config.js
const slugify = require('@vuepress/shared-utils/lib/slugify')

{
  markdown: {
    slugify: (string) => slugify(string).trimRight().replace(`“`, '').replace(`”`, ''),

    // more stuff...
  }
}
```

### markdown-it-mark

This adds highlighting by wrapping a text with ==two equal signs==.

```
This adds highlighting by wrapping a text with ==two equal signs==.
```



## Vuepress plugins

### SEO

### Sitemap

### PWA

### RSS

## Deployment

### via Github Pages

### via self-hosting

## Organizing things.. maybe



## Things to improve or figure out

### Ignoring specific posts from the sitemap plugin without front matter

### Using frontmatter to for link previews

