---
title: TIL Javascript and Picture-in-Picture
permalink: /til-javascript-and-picture-in-picture
date: 2020-01-07T02:56:00+08:00
is_published: true
---

 

In a lot of sites, you can right click (sometimes twice) to see the "Enter in Picture in Picture" option. There are some sites like Netflix or Twtich does some DOM magic to prevent that.

Here's two javascript snippets I paste on the dev console so I can watch while working.

==The safari one's the thing I just learned today!==



<!-- MORE -->

### Safari

```js
document.querySelector('video').webkitSetPresentationMode('picture-in-picture')
```

### Chrome

```js
$('video').requestPictureInPicture()
```



