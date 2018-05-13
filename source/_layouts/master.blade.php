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
        @stack('head')
    </head>

    <body class="[ ms-base font-serif font-light text-black leading-normal tracking-normal ]">
        <main id="app" class="content">
            <button type="button"
                    class="hamburger hamburger--elastic [ fixed bg-pink outline-none z-50 ]"
                    style="right: 9px; top: 9px;"
                    @click.prevent="burger.active = ! burger.active; burger.hovering = false;"
                    @mouseenter="burger.hovering = true"
                    @mouseleave="burger.hovering = false"
                    :class="{
                          '[ is-active ]':   burger.active,
                          '[ is-hovering ]': burger.hovering,
                    }">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            @include('_layouts.push-navigation')

            <div class="body wrapper [ max-w-md px-8 mx-auto ]" :class="{ 'scale-down': burger.hovering }">
                @yield('body')
            </div>

            <div class="edge        [ border-9 border-pink fixed h-screen w-screen pin-l pin-t ]" :class="{ 'border-16': burger.hovering }"></div>
            <div class="edge-top    [ bg-pink h-9px fixed w-screen pin-l pin-t z-50 ]" :class="{ 'h-16px': burger.hovering }"></div>
            <div class="edge-bottom [ bg-pink h-9px fixed w-screen pin-l pin-b z-50 ]" :class="{ 'h-16px': burger.hovering }"></div>

            <div class="overlay [ fixed pin-t pin-l h-screen w-screen opacity-0 ]" :class="{ '[ opacity-100 ]': burger.hovering }">
            </div>
        </main>

        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>

        @stack('foot')

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
