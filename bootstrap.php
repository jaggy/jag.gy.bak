<?php

use Mni\FrontYAML\Markdown\MarkdownParser;
use TightenCo\Jigsaw\Jigsaw;

class CustomParsedownExtra extends ParsedownExtra
{
    protected function inlineLink($excerpt) {
        $link = parent::inlineLink($excerpt);

        if (! is_array($link)) {
            return $link;
        }

        $link['element']['attributes']['target'] = '_blank';
        $link['element']['attributes']['rel']    = 'noopener noreferrer';

        return $link;
    }
}

class ParsedownExtraParser implements MarkdownParser
{
    public function __construct(CustomParsedownExtra $parsedown = null)
    {
        $this->parser = $parsedown ?: new CustomParsedownExtra;
    }

    public function parse($markdown)
    {
        return $this->parser->parse($markdown);
    }
}

$container->bind(MarkdownParser::class, ParsedownExtraParser::class);

/** @var $container \Illuminate\Container\Container */
/** @var $events \TightenCo\Jigsaw\Events\EventBus */

/**
 * You can run custom code at different stages of the build process by
 * listening to the 'beforeBuild', 'afterCollections', and 'afterBuild' events.
 *
 * For example:
 *
 * $events->beforeBuild(function (Jigsaw $jigsaw) {
 *     // Your code here
 * });
 */
