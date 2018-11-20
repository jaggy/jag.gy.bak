@extends('_layouts.master')

@section('title', $page->title)

@section('body')
<article class="post py-8">
    <header class="post__header">
        <div class="wrapper leading-none">
            <span class="post__preamble tracking-wide uppercase font-display font-bold ms-sm">Unlearns</span>
            <h1 class="post__name ms-2xl leading-none">{{ $page->title }}</h1>
        </div>
    </header>

    <section class="post__body">
        <div class="wrapper py-4">
            @yield('content')
        </div>
    </section>
</article>
@endsection
