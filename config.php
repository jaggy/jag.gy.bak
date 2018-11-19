<?php

return [
    'baseUrl'     => '',
    'production'  => false,
    'collections' => [
        'unlearns' => [
            'path' => function ($page) {
                return 'unlearns/' . preg_replace("/^([\d]+-)/", '', $page->getFilename());
            },
        ],
    ],
];
