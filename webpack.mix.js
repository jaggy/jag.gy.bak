let tailwind = require('tailwindcss')
let mix      = require('laravel-mix');
let build    = require('./tasks/build.js');

require('laravel-mix-purgecss')

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
    .sass('source/_assets/sass/main.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwind('./tailwind.js')
        ],
    })
    .js('source/_assets/js/main.js', 'js')
    .js('source/_assets/js/thoughts.js', 'js')
    .extract(['vue', 'prismjs'])
    .purgeCss({
        globs: [
            path.join(__dirname, 'source/**/*.php'),
            path.join(__dirname, 'source/**/*.js'),
            path.join(__dirname, 'source/**/*.md'),
        ],
        extensions: ['js', 'html', 'php', 'vue', 'md'],
    })

mix
    .sass('source/_assets/sass/prism.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwind('./tailwind.js')
        ],
    })
