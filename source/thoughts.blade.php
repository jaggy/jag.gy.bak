@extends('_layouts.master')

@section('title', 'Journal')

@section('body')
    <section class="posts [ py-12 ]">
        <h1 class="[ ms-2xl ]">Journal</h1>

        <p>Take a look at some of my opinions on things!</p>

        <div class="post-list [ mt-8 ]">
            @foreach($posts as $post)
                <article class="post-preview max-w-sm ]">
                    <h2 class="[ ms-xl ]">
                        <a class="[ no-underline text-black ]" href="{{ $post->getUrl() }}">
                            {{ $post->title }}
                        </a>
                    </h2>

                    <p class="post-excerpt">
                        {{ $post->excerpt }}
                    </p>

                    <anchor to="{{ $post->getUrl() }}">
                        <template slot="title">
                            <span class="[ text-16 font-serif font-bold ]">
                                Read More
                            </span>
                        </template>
                    </anchor>
                </article>
            @endforeach
        </div>
    </section>
@endsection
