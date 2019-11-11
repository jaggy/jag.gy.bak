---
title: Using a full name in the database
date: 2019-11-11
permalink: /using-a-full-name-in-the-database
is_published: true
---

Whenever I work with local products here, I always end up with the same discussion midwawy through
the project.

> Why are we using "full names"? Can you separate it into first, middle, and last names?

So, here's my peace about it since I just really want to point here when I eventually run into the
same conversation again.

<!-- more -->

## Setting up the scene
I live in the Philippines. Most of the forms here have **first**, **middle**, and **last** names.
Here's a breakdown of my legal name as an example.

![Breakdown of my legal name](../assets/dist/03/full-name.png)

I'm not sure with how other countries define it but here, **middle name** is the mother's maiden
last name. A lot of organizations still use this insecure piece of information to verify the
customer identity through calls, or even online forms. Even though there are some people that
legally have a middle name.

Another thing to note is most of the projects I've worked on:
- We've agreed not to use the middle name as verification metric.
- The amount of data is at most around **5 million rows**, so if it's anything beyond that, I've
  never had the discussion for those use cases.

With that out of the way, let's get started.

## The rationale for splitting names into multiple fields
The two most common things I hear whenever this comes up are:

> _What if_ we need **analytics** based on the name?
>
> _What if_ we need to **search** by the XXX name?

Spoiler: I have yet to implement name-based analytics.

## Why I want a single name field in the database

> Not every culture in the world has a family name.

Even though the app will most likely be only spend it's lifetime here in the Philippines, there's
still potential users that have migrated here, from elsewhere. It keeps coming up that most of the
customers will be Filipino, but I don't think that's a good enough reason to exclude everyone else
for the off chance we need name-based analytics.

Okay, let's see how this goes.

## "_What if_ we need to **search** by the last name?"
Let's take a part of my first name, Jose. Some people have this as their family name! Well, they say
that splitting names into appropriate fields can help with the search of specific families and avoid
results that contain the first name.

Now, I think this is more on a search related improvement than a "splitting the name" solution. We
got so accustomed with these types of forms being given to us that we never stopped to think if
something else needed improvment.

What if once I search "Jose", we can order the relevancy from the right-most, or the left-most?

Even after handling medium-sized databases, my projects never had a problem with a full name search.
Since most of these projects it's people finding their own names, or asking customer support to pull
up their account, not someone else's via wildcard.

There are some cases where maybe they want to look up family members, but the security of is a whole
other different conversation.

### But what about the speed of the search?
We're at a point in technology where even with pretty small servers we can do pretty optimized
searches without too much code complexity. Disabling fuzzy searching in name fields, we can still
get a decent search in a pretty large database without the user having to notice any lag.

Also, if there's no budget or time to optimize a comprehensive search, there are services like
Algolia that help save a ton of time!


## "_What if_ we need **analytics** based on the name?"
I get this a lot too but I never really got to do anything with this.

Even after someone pulled rank, forced multiple name fields, there wasn't really anything specific
done with the separate fields.

Maybe a more personalized email by using their first name? But I'd rather add a nickname field since
I don't really like being addressed with my legal first name. 🤷‍♀️