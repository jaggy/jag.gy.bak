@extends('_layouts.master')

@section('title', $page->title)

@push('head')
    <link href="{{ mix('css/prism.css') }}" rel="stylesheet">

    <meta property="og:type" content="website"/>
    <meta property="og:title" content="{{ $page->title }} | Jaggy"/>
    <meta property="og:url" content="{{ $page->getUrl() }}"/>

    <meta property="og:description" content="{{ $page->excerpt }}">
    <meta name="description" content="{{ $page->excerpt }}">
@endpush

@push('foot')
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono" rel="stylesheet">
    <script src="{{ mix('js/thoughts.js') }}"></script>
@endpush

@section('body')
    <article class="post [ py-12 ]">
        <header class="post-header [ mb-4 ]">
            <h1 class="[ ms-2xl ]">{{ $page->title }}</h1>
            @if($page->date)
                <span class="post-date [ text-16 ]">
                    {{ date('F d, Y', $page->date) }}
                </span>
            @endif
        </header>

        <section class="post-content">
            @yield('content')
        </section>
    </article>
@endsection
