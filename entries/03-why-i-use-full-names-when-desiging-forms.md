---
title: Why I use full names when designing forms
date: 2019-11-11
permalink: /why-i-use-full-names-when-desiging-forms
is_published: true
description: Whenever I sign up on services online, it always stands out whenever there are separate fields for the first and last name. With the projects I work on, I always use a single field for the name. When clients ask to split the name into multiple fields, it ends up in a pretty long discussion why I think it's unnecessary.
---

Whenever I sign up on services online, it always stands out whenever there are separate fields for the first and last name. With the projects I work on, I always use a single field for the name. When clients ask to split the name into multiple fields, it ends up in a pretty long discussion why I think it's unnecessary.

<!-- more -->

==This isn't a best practice, silver bullet, or anything like that. I know that there are different use cases for different requirements. This is mostly based on the scope of the projects I've worked on.==

## Okay, let's set the scene

Here in the Philippines, almost every form you'll run into will have a **first**, **middle**, and **last name**. Here's a visual breakdown of my own legal name since the terms for the names will differ from place to place.

![Jose Andres Cruz Gauran](../assets/dist/03/full-name.png)

The **middle name** here is my mom's maiden last name. Some friends living in the US told me that there, without this distinction, my middle name would be **Andres** instead of **Cruz**.

Here's a fun fact: ==plenty of organizations here use the mom's maiden name as a security question for customer verification and some even just ask for the middle name!==

For more additional context, here are some stuff about the projects I've worked on just so you can compare and contrast with what you're working on.

1. We don't use the middle name or the mom's maiden name as a verification question.

2. The most data customer I've worked in is around 5 million rows, so I can't really answer for use cases beyond that.

With that out of the way, let's get started.

## The rationale for multiple name fields
These are the most common things I hear from clients whenever this comes up:

1. What if we need analytics based on the first, middle, or last name?
2. What if we need a specific search for the first, middle, or last name?
3. What if we wanted to be more personal by using their first name?

Because of these "what-ifs" a lot of systems here are designed where the first, middle, or last names are required. Funnily enough, a lot of developers design it as such even though there's a chunk of users that don't even have middle names here.

Let's hit off these points and see what the common responses I usually get.

### “What if we need to **search** by the last name?” {.hanging-punctuation}

Jose, a part of my first name, is a also a family name here. It's often argued that it saves a lot of time by splitting the names into fields so results won't be as much, or even have results from the first name.

While I do understand the sentiment, I think this should be more on improving the search implementation instead of immediately relying on splitting the name into different segments. For these cases, we can do sorting with relevancy. Maybe a left-to-right or right-to-left toggle?

There _may_ be some cases that they want to know if there are family members with an account but that might be more of a security issue which is a whole other conversation.

"This should be smart quotes."



#### “But won’t that slow down the search?” {.hanging-punctuation}

I think we're at a point in tech where pretty small servers can do pretty optimized calculations because of the efficiency of the tools we have. We can still do performant searches in a table with a couple of million of rows.

I'll be honest, I've never worked on a project where searching specifically for first and last names has been critical feature. In customer support, the customer provides their full name for verification. Asking for a wildcard search is more of an edge case rather than a common happy path.

If it's about budget of implementing a better search, then there are services like Algolia that provide really really amazing search results with large chunks of data.

### “What if we need **analytics** based on the name?” {.hanging-punctuation}

This gets said more often than it should. Even when the client pulled rank and the name was segmented, we never really did any analytics with the name.

### “What if we wanted to be more personal by using their first name?” {.hanging-punctuation}

I either just get the actual first part of the name, or add a nickname field in the user's profile. I personally don't really use my legal name. I use **Jaggy** publicly so reading emails that say my legal first name is pretty weird.

Although, maybe it's just me but a lot of people here have nicknames since culturally people here had really formal legal names... for some reason.. then use a shorter version of that name, some amalgamation, or something else. Whatever the case may be, just using the legal first name might not be as personable as people think it is.

## Let's talk about accessibility

Even though a lot of the apps will spend its whole life here in the Philippines, it's still likely to have customers that have migrated to this country. Yes, most of the customers will most likely be Filipinos, ==but it's not a good enough excuse to design the system in a _very_ specific way.==

> Not every culture in the world uses a family name.

I have a friend from Indonesia who has a lot of problems with local forms here since he didn't really have a first or last name. It's... a name.

## Budget, Development, and Maintenance

I've had conversations with people that point out that since the customer-base for foreigners are pretty small, there's no need to consider this 'cause, time, budget, for building and mainting is pretty costly than just splitting the field into two.

While I do understand where that comes from, I really don't think that implementing either is time consuming or complex. In reality, if we're using raw SQL statments, we'll end up with something like this.

```sql
# Start
SELECT * FROM customers WHERE name LIKE "Jose%";

# End
SELECT * FROM customers WHERE name LIKE "%Jose";

# Anywhere
SELECT * FROM customers WHERE name LIKE "%Jose%";
```

Cache the results, and it won't be as expensive as people make it out to be. If we want to do some sort of sorting on the code-side we can do something like this.

```php
Customer::query()
  ->search($request->input('name'))
  ->get()
  ->sort(function ($customer) use ($request) {
    return strpos($customer->name, $request->name);
  });
```

> This is just me eyeballing the code so this might not really work. :sweat_smile:

Which should sort the name based on the position of the keyword. In descending order? I'm not quite sure.

## Let me know what you think

I really hope that this somewhat made you reconsider having to split the name. If you know any specific cases where it needs to be separate, do let me know in Twitter. I'd love to know more so I can know when to do the same thing.

Thanks for taking the time to read!

