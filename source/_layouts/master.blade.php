<!DOCTYPE html>
<html class="[ ms-base ]" lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <title>
            @yield('title') ‧ Jaggy
        </title>

        <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    </head>

    <body class="[ ms-base font-serif font-light text-black leading-normal tracking-normal ]">
        <main id="app" class="content">
            <button type="button" class="hamburger hamburger--elastic [ fixed bg-pink outline-none z-50 ]"
                    style="right: 9px; top: 9px;"
                    @click.prevent="burger = ! burger" :class="{
                          '[ is-active ]': burger,
                    }">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            @include('_layouts.push-navigation')

            <div class="wrapper [ max-w-md px-8 mx-auto ]">
                @yield('body')
            </div>

            <div class="top    [ fixed bg-pink h-2 w-screen pin-t pin-l z-50 ]"></div>
            <div class="bottom [ fixed bg-pink h-2 w-screen pin-b pin-l z-50 ]"></div>
            <div class="left   [ fixed bg-pink w-2 h-screen pin-t pin-l z-50 ]"></div>
            <div class="right  [ fixed bg-pink w-2 h-screen pin-t pin-r z-50 ]"></div>
        </main>

        <script src="{{ mix('js/main.js') }}"></script>
        <script>
         (function(d) {
             var config = {
                 kitId: 'zsj3lvt',
                 scriptTimeout: 3000,
                 async: true
             },
                 h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
         })(document);
        </script>
    </body>
</html>
