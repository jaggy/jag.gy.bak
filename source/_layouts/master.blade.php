<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    </head>

    <body class="[ ms-base font-serif font-light text-black leading-normal tracking-normal ]">
        <main class="content">
            <div class="wrapper [ max-w-lg px-8 mx-auto ]">
                @yield('content')
            </div>
        </main>

        <div class="[ fixed h-screen w-screen pin-t pin-l border-8 border-pink ]">
        </div>

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
