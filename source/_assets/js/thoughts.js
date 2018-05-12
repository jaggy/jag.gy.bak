require('prismjs/themes/prism.css')
require('./prism-ayu.css')

import Prism from 'prismjs'

const loadLanguages = require('prismjs/components/index.js');

loadLanguages(['javascript', 'css', 'php', 'markup', 'makefile']);
