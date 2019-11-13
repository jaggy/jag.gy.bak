---
title: Laravel Echo, Nuxt, and Websockets
date: 2019-11-02 16:58:01
permalink: /laravel-echo-nuxt-and-websockets
is_published: false
feed:
  enable: false
---

I've recently come across the [Laravel Websockets](https://docs.beyondco.de/laravel-websockets/) package. It's a Pusher replacement when it comes to web sockets.

For a bit, I've hit a few snags integrating it into some of projects I've been working so I wanted to document the process of setting things up, and making it work with Laravel and Nuxt from development to deployment.

Here are the things I want to hit off when working with the web sockets:
- I want to work with HTTP locally, but HTTPS in production.
- I don't want to continually change anything in my config, or .env files.

<!-- more -->

## Here's my setup

```php
[
    'driver'  => 'pusher',
    'key'     => env('PUSHER_APP_KEY'),
    'secret'  => env('PUSHER_APP_SECRET'),
    'app_id'  => env('PUSHER_APP_ID'),
    'options' => [
        'cluster'      => env('PUSHER_APP_CLUSTER'),
        'useTLS'       => true,
        'host'         => env('PUSHER_APP_HOST', 'localhost'),
        'port'         => env('PUSHER_APP_PORT', 6001),
        'encrypted'    => env('PUSHER_APP_SCHEME') === 'http',
        'scheme'       => env('PUSHER_APP_SCHEME'),
        'curl_options' => [
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
        ],
    ],
]
```


## Things I want to work on

- I don't like the fact that we use the actual `PUSHER_` environment variable. It feels like we should be using a `WEBSOCKETS_` prefix instead.
- I want to try and help out with the docs 'cause there are parts of it that feels like we're using it alongside Pusher, rather than replacing it.