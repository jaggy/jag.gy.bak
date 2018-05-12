let tailwind = require('tailwindcss')
let mix      = require('laravel-mix');
let build    = require('./tasks/build.js');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss']),
    ]
});

mix
    .sass('source/_assets/sass/main.scss', 'css/main.css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwind('./tailwind.js')
        ],
    })
    .js('source/_assets/js/main.js', 'js')
    .js('source/_assets/js/thoughts.js', 'js')
    .version();
