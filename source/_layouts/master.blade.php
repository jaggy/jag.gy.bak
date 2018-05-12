<!DOCTYPE html>
<html lang="en">
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
            <button type="button" class="hamburger hamburger--elastic [ absolute bg-pink outline-none z-50 ]"
                    style="right: 12px; top: 12px;"
                    @click.prevent="burger = ! burger" :class="{
                          '[ is-active ]': burger,
                    }">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>

            <transition name="wipe" @after-enter="wipeAfter">
                <section v-if="burger" ref="pushNavigation"
                    class="push-navigation [
                            flex items-center
                            bg-pink h-screen w-screen pin-t pin-l fixed z-40 px-10
                        ]">
                    <ul class="[ list-reset leading-none ]">
                        <li class="[ overflow-hidden ]">
                            <anchor class="[ text-white ]" to="#" :inverse="true">
                                <span class="[ ms-2xl ]" slot="title">
                                    Journal
                                </span>

                                <span class="[ ms-lg ]" slot="caption">
                                    Thoughts on anything I want to write on.
                                </span>
                            </anchor>
                        </li>

                        <li class="[ overflow-hidden mt-8 ]">
                            <anchor class="[ text-white ]" to="#" :inverse="true">
                                <span class="[ ms-2xl ]" slot="title">
                                    About
                                </span>

                                <span class="[ ms-lg ]" slot="caption">
                                    Know more about what I do and my experiences.
                                </span>
                            </anchor>
                        </li>

                        <li class="[ overflow-hidden mt-8 ]">
                            <anchor class="[ text-white ]" to="#" :inverse="true">
                                <span class="[ ms-2xl ]" slot="title">
                                    Tools
                                </span>

                                <span class="[ ms-lg ]" slot="caption">
                                    The tools I’m currently using to do what I do.
                                </span>
                            </anchor>
                        </li>

                        <li class="[ overflow-hidden mt-8 ]">
                            <anchor class="[ text-white ]" to="#" :inverse="true">
                                <span class="[ ms-2xl ]" slot="title">
                                    Let's work together!
                                </span>

                                <span class="[ ms-lg ]" slot="caption">
                                    If you like how I work, let’s work together!
                                </span>
                            </anchor>
                        </li>
                    </ul>
                </section>
            </transition>

            <div class="wrapper [ max-w-md px-8 mx-auto ]">
                @yield('content')
            </div>

            <div class="top    [ fixed bg-pink h-3 w-screen pin-t pin-l z-50 ]"></div>
            <div class="bottom [ fixed bg-pink h-3 w-screen pin-b pin-l z-50 ]"></div>
            <div class="left   [ fixed bg-pink w-3 h-screen pin-t pin-l z-50 ]"></div>
            <div class="right  [ fixed bg-pink w-3 h-screen pin-t pin-r z-50 ]"></div>
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
