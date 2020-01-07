---
title: Switching Layouts in Nuxt
permalink: /switching-layouts-in-nuxt
date: 2020-01-07T22:30:00+08:00
is_published: true 
---

In Nuxt you can switch layouts in your pages by adding a `layout: 'layout-name'` property in your page attributes. With projects that have consistent design, only using layouts for well, layouts, this is fine but there can be caveats to this.

Let's say when you log in, the user is redirected to a dashboard with a completely different design, Nuxt keeps the CSS of the `default.vue` layout and the CSS of the components used in the layout.

Here are two things I've seen people use to work around the issue.

<!-- more -->

## Scoped styles

First up is using scoped styles. I haven't tried this one myself but in theory, if we add `<style scoped>`, the design should only be for that specific layout, and that specific components.

I'm personally not a fan of this just because I still like CSS files

## Refreshing the layout

After some googling around, it seems that we have to make sure at build, the styles for the layout is split. So in our `nuxt.config.js`

```js
{
  // ...
  build {
    // ...
    splitChunks: { 
      layouts: true, 
    },
	},
}
```

This should solve issues when directly going to a page with a different layout, but when switching layouts at runtime (ie logging in from the site, then redirecting to an admin dashboard), Nuxt won't remove the CSS of the previous layout.

This is a bit of a hack, but whenever we switch layouts that have massively different design components, we have to force a refresh to ensure that none of the previous styles bleed in.

Here's a mixing that I use for layouts that need it:

```js
export default {
  beforeCreate() {
    if (!process.server) {
      if (window.__NUXT_LAYOUT__ && window.__NUXT_LAYOUT__ !== this) {
        window.location.reload();
      }

      window.__NUXT_LAYOUT__ = this;
    }
  },
}
```

To use it, include the mixin to your layout.

```js
// default.vue
import RefreshStyles from '~/mixins/RefreshStyles'

export default {
  mixins: [RefreshStyles],
}
```

[Here's the Github comment that helped me out!](https://github.com/nuxt/nuxt.js/issues/3877#issuecomment-480202098) People didn't really like it but it's the only thing that really worked for me on purging the old layout styles.