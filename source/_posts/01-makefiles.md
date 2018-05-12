---
extends: _layouts.post
section: content
title:   Makefiles
excerpt: I still love using Makefiles for small projects. It feels more intuitive than shell scripts.
---

# Makefiles

Recently I've started using [Jigsaw ](http://jigsaw.tighten.co/) and [VuePress](http://vuepress.vuejs.org/) on some personal projects.

```makefile
.ONESHELL:
DIST_DIRECTORY=build_production

build:
    yarn run production

add_domain:
    cd $(DIST_DIRECTORY)
    echo "jag.gy" > CNAME

persist:
    cd $(DIST_DIRECTORY)
    git init
    git add -A
    git commit -m 'deploy'

deploy: build add_domain persist
    cd $(DIST_DIRECTORY)
    git push -f git@github.com:jaggy/jag.gy.git master:gh-pages
```
