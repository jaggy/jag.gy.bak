---
extends: _layouts.for
section: content
date:    2018-07-23
title:   For Doubledot Media
private: true
---

## Array Minimum

> Variable a is a list of integers. Write a solution to determine the smallest integer in the list without using a mathematical ‘min’ function (or similar).

Let's start with a flowchart.

<div class="[ py-8 text-center ]">
    <img src="/assets/images/dd-min-chart.png" class="w-full pl-16" style="max-width: 500px;">
</div>

Okay, let's try some code too. 😅

```php
<?php

$numbers = [1, 14, 13, 6, 92, 4, -5, 3];
$minimum = head($numbers);

foreach($numbers as $number) {
    if ($minimum > $number) {
        $minimum = $number;
    }
}

echo "The minimum number is {$minimum}.";
```

This is a pretty tricky question just because I wasn't sure if mathematical `min` means comparators, or just the programming language's mathematical `min`.

## Fizz, Buzz, FizzBuzz

> Write a solution that displays the numbers from 1 to 100, with each number displayed on a new line.
>
> However, for every multiple of 3, display "Fizz" instead of the number.
>
> For multiples of 5, display "Buzz" instead of the number.
>
> For numbers which are multiples of 3 *and* 5, display "FizzBuzz" instead of the number.

```php
<?php

/**
 * We can avoid using temporary variables and plain returns by prioritizing an
 * if ($number % 15 == 0) but we _have_ to explain why it's first though.
 *
 * Feels like appending the string is a lot better.
 *
 * @param  int  $number
 * @return string
 */
function fizz_buzz($number)
{
    $word = null;

    if ($number % 3 == 0) {
        $word = 'Fizz';
    }

    if ($number % 5 == 0) {
        $word .= 'Buzz';
    }

    return $word;
}

foreach(range(1, 100) as $number) {
    if (! $word = fizz_buzz($number)) {
        continue;
    }

    echo "{$number} is {$word}!\n";
}
```

## Palindromes ~~semordnilaP~~

> Each variable is a string. Write a solution to determine whether any given string is a palindrome (that is, the string looks the same, even if it is reversed).
>
> You must not use string reverse function;
>
> You should attempt the exercise under the assumption that string comparison is not available [but character comparison is].

I'm doing this with the assumption that array reverses are also not allowed. 😅

```php
<?php

function opposite_letter(array $letters, int $position) : string
{
    $pairing = abs((count($letters) - 1) - $position);

    return $letters[$pairing];
}

function is_palindrome(string $word) : bool
{
    $letters = str_split($word);
    $indexes = array_keys($letters);

    /**
     * This will give as an array of booleans to check if there are letters
     * that didn't match. Using that, we'll figure out which are palindromes
     * and which are not.
     */
    return ! array_sum(
        array_map(function ($letter, $position) use ($letters) {
            return $letter !== opposite_letter($letters, $position);
        }, $letters, $indexes)
    );
}

function present_palindromes(array $palindromes) : string
{
    if (count($palindromes) === 0) {
        return "There weren't any palindromes. ☹️";
    }

    if (count($palindromes) === 1) {
        return "The only palindrome was {$palindromes[0]}.";
    }

    $end = array_pop($palindromes);
    array_push($palindromes, "and {$end}");

    return "The palindromes were " . implode(', ', $palindromes) . "! 🎉";
}

$words = ['rotator', 'modem', 'civic', 'malloc', 'racecar'];

echo present_palindromes(
    array_filter($words, 'is_palindrome')
);
```

## Variable Swap

> Variables 'a' and 'b' are integers. Swap the contents of variables 'a' and 'b' without using additional variables.

Now this is a language thing! I can't flowchart or pseudocode this one!

```php
$a = 12;
$b = 15;

[$b, $a] = [$a, $b];

// or

list($b, $a) = [$a, $b];
```

<strong class="[ text-center block mt-14 font-normal ms-2xl ]">Thanks for the exam! 😊</strong>
