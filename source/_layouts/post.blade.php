@extends('_layouts.master')

@section('title', $page->title)

@push('scripts')
    <script src="{{ mix('js/thoughts.js') }}"></script>
@endpush

@section('body')
    <article class="post [ py-12 ]">
        <section class="post-content">
            @yield('content')
        </section>
    </article>
@endsection
