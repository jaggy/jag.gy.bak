@extends('_layouts.master')

@section('title', $page->title)

@section('body')
    <article class="post [ py-12 ]">
        <section class="post-content">
            @yield('content')
        </section>
    </article>
@endsection
