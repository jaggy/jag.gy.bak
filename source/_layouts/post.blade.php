@extends('_layouts.master')

@section('title', $page->title)

@section('body')
    <article class="post [ py-16 ]">
        <section class="post-content">
            @yield('content')
        </section>
    </article>
@endsection
