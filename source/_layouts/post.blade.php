@extends('_layouts.master')

@section('title', $page->title)

@section('body')
<article class="post py-8">
    <header class="post__header">
        <div class="wrapper leading-none">
            <h1 class="post__name ms-3xl leading-none">
                <span class="post__preamble block font-display ms-base">Unlearns</span>
                {{ $page->title }}
            </h1>
        </div>
    </header>

    <section class="post__body">
        <div class="wrapper py-4">
            @yield('content')
        </div>
    </section>
</article>
@endsection
