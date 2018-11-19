<!DOCTYPE html>
<html class="[ ms-base ]" lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <title></title>

        <link rel="stylesheet" href="{{ mix('css/main.css') }}">

        @stack('head')

        <meta property="og:image" content="/assets/images/me.jpg">
        <link rel="stylesheet" href="https://use.typekit.net/aff2uwd.css">
    </head>

    <body>
        <main id="app">
            @yield('body')
        </main>
    </body>
</html>
