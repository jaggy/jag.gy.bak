---
title: Laravel Echo, Nuxt, and Websockets
date: 2019-11-02
---
A couple of days ago, around 3 in the afternoon, an email was sent to all of the regular employees. Within the email was their new salary _adjusted to inflation_. _Everyone_ was either frustrated, or "I knew it would be this low".

``` php
<?php

return [
    'pusher' => [
        'driver' => 'pusher',
        'key' => env('PUSHER_APP_KEY'),
        'secret' => env('PUSHER_APP_SECRET'),
        'app_id' => env('PUSHER_APP_ID'),
        'options' => [
            'cluster' => env('PUSHER_APP_CLUSTER'),
            'useTLS' => true,
            'host' => env('PUSHER_APP_HOST', 'localhost'),
            'port' => env('PUSHER_APP_PORT', 6001),
            'encrypted' => env('PUSHER_APP_SCHEME') === 'http',
            'scheme' => env('PUSHER_APP_SCHEME'),
            'curl_options' => [
                CURLOPT_SSL_VERIFYHOST => 0,
                CURLOPT_SSL_VERIFYPEER => 0,
            ],
        ],
    ],
];
```

A couple of days ago, around 3 in the afternoon, an email was sent to all of the regular employees. Within the email was their new salary _adjusted to inflation_. _Everyone_ was either frustrated, or "I knew it would be this low".
