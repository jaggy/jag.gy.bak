<?php

return [
    'baseUrl'     => '',
    'production'  => false,
    'collections' => [
        'posts' => [
            'path' => function ($page) {
                return 'thoughts/' . preg_replace("/^([\d]+-)/", '', $page->getFilename());
            },
            'sort' => '-date',
        ],
    ],
];
