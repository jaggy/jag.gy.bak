---
extends: _layouts.post
section: content
date:    2018-05-13
title:   Static Sites and Makefiles
excerpt: Let me show you how I use Makefiles to deploy my Jigsaw and VuePress sites.
holler:  Let's take a look!
---
Recently I've started using [Jigsaw ](http://jigsaw.tighten.co/) and [VuePress](http://vuepress.vuejs.org/) on some personal projects.

I just wanted to share how I end up deploying these static sites to Github pages.

I prefer Makefiles over plain shell scripts because it's personally much easier to parse at a single glance.

For those unfamiliar with Makefiles, I am too, they're [like] task runners built in UNIX systems. It's like shell scripts but certain commands are grouped with each other.

```makefile
backup:
    cp -R dist/ ~/Dropbox/projects/backups
```

Here's an example how I deploy _this_ website to Github pages.

```makefile
.ONESHELL:
DIST_DIRECTORY=build_production

build:
    yarn run production

add_domain:
    cd $(DIST_DIRECTORY)
    echo "jag.gy" > CNAME

commit:
    cd $(DIST_DIRECTORY)
    git init
    git add -A
    git commit -m 'deploy'

deploy: build add_domain commit
    cd $(DIST_DIRECTORY)
    git push -f git@github.com:jaggy/jag.gy.git master:gh-pages
```

Whenever I run `make deploy`, it executes the tasks `build`, `add-domain`, `commit` before running the commands under `deploy`.

## Something to Note

There's a `.ONESHELL` flag at the top of my Makefiles. This is a flag only available to `make >= 4` which isn't in macOS by default.

The `.ONESHELL` flag ensures that the task is ran in a single shell, or at least that's how I understand it.

Without it, any `cd` commands won't persist to the next command.

```makefile
# ~/code/jag.gy
add_domain:
    cd build_production
    echo "jag.gy" > CNAME
```

If we ran `make add_domain` without the flag, the `CNAME` file would be written in `~/code/jag.gy` instead of `~/code/jag.gy/build_prouduction`.

I hope this was somewhat coherent. Maybe if you have a smaller project, you can give Makefiles a shot!
