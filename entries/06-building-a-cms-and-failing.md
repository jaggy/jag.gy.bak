---
title: Building a CMS... and failing
permalink: /building-a-cms-and-failing
date: 2019-11-23 01:01:00
description: Here’s a stupid story of me trying to build yet another CMS, why I’m building it, and what I have so far.
is_published: true
---

My first job in web development was building sites with Wordpress for a small studio here in the Philippines. Now, prior to this job, I already got *way* into open source, tooling, and bikeshedding. So for some reason, I got obsessed with building tools.

After using Wordpress, I was pretty unhappy with it. The purist little developer me hated everything about it. Using source control with it, syncing data from local to production, its plugin system, and a lot more. Now, one could argue that I just didn’t know how to build Wordpress themes properly, and ***they’d be right***! But that’s not what I want to talk about. What I want to tell you is the story of building a CMS, and failing.

<!-- more -->

These days, I maintain a couple of sites for long term clients and every now and then, I get this itch to just ditch the current CMS I’m using and build my own, fail, and keep using whatever I’m currently using for that project.

The funny thing is, for those who don’t know, I worked on Statamic, a flat-file CMS, and I know it’s impossibly difficult to build a CMS but yeah, I’m having that need to build again so yeah, I’ll write about it!

## Building Type

I’m most likely gonna fail in building this CMS. Without a doubt, but to be honest, writing a CMS from scratch every now and then really does give me some perspective in tool building. So, let’s build **Type**.

### We already have a spec

Whenever I want to learn or get better, it’s better to build something that already exists since I don’t really need to ALSO think about a feature set that can make it “disruptive”. It’s more picking and choosing from the features of all the existing CMSes, and figuring out what I want, and how to implement it, which gives me a wider range on what part of development I can get better at.

### I already have sites to try it on

Since I’m already maintaining a couple of sites, I have access to their front-end assets, which means recreating a site with what I’m building at least gives me a way to compare and contrast the tool and the experience from the original CMS.

### I really want to write about something

Since I’m already writing on my site, what better way to practice my writing than to just write about the experience in building Type! I’m already writing a lot on Basecamp to show my peers what direction I’m onto, might as well just dump all of it publicly. :woman_shrugging:

## How does Type work?

The initial feature set in my mind are:

- Headless/API based.
- I want it to be a Laravel package. Pull it from composer and you can have a CMS without any conflict with your existing project.
- It’s database driven.
- Localization.
- Maybe “multi-tenant”? This one I’m a lot unsure of but handling multiple sites from a single dashboard could be nice.
- There’s a separate package for the front-end. People can make their own dashboard, but there’s a Nuxt project provided.
- I want to have extensions through composer. Pulling in a package just works.
- Schemas are defined by PHP objects, rather than JSON, YAML, or arrays.

I’m not sure how to implement some of these so let’s figure it out! Up next would be what we have so far, and open sourcing everything I have on Type right now. :tada:













