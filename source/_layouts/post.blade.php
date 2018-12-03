@extends('_layouts.master')

@section('title', $page->title)

@push('head')
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="{{ $page->title }} | Jaggy"/>
    <meta property="og:url" content="{{ $page->getUrl() }}"/>

    <!-- <meta property="og:description" content="{{ $page->excerpt }}"> -->
    <!-- <meta name="description" content="{{ $page->excerpt }}"> -->
@endpush

@section('body')
<article class="post py-8">
    <header class="post__header">
        <div class="wrapper leading-none">
            <h1 class="post__name ms-3xl leading-none text-center">
                <span class="post__preamble block font-display ms-lg">Unlearns</span>
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
