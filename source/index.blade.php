@extends('_layouts.master')

@section('title', 'Home')

@section('content')
    <section class="home [ py-16 ]">
        <h1 class="[ leading-none tracking-semitight ms-2xl ]">
            Kumusta? I'm Jaggy.
        </h1>

        <p class="[ mt-4 ]">
            I’m a product designer from Manila. I’m a developer for <a class="[ font-bold ]" href="https://artisan.studio/">Artisan Studio</a>. I
            host a “soft skills” Filipino podcast with a couple of my friends, and <em>I
            really love building things</em>.
        </p>

        <p class="[ mt-2 ]">
            Welcome to the place where I’m trying to improve my writing.
        </p>

        <nav class="[ mt-10 ]">
            <ul class="[ grid list-reset leading-none grid-gap-28 grid-row-gap-36 ]">
                <li class="[ col-12 sm:col-6 overflow-hidden ]">
                    <anchor class="[ text-black ]" to="#">
                        <template slot="title">
                            Journal
                        </template>

                        <template slot="caption">
                            Thoughts on anything I want to write on.
                        </template>
                    </anchor>
                </li>
                <li class="[ col-12 sm:col-6 overflow-hidden ]">
                    <anchor class="[ text-black ]" to="#">
                        <template slot="title">
                            About
                        </template>

                        <template slot="caption">
                            Know more about what I do and my experiences.
                        </template>
                    </anchor>
                </li>

                <li class="[ col-12 sm:col-6 overflow-hidden ]">
                    <anchor class="[ text-black ]" to="#">
                        <template slot="title">
                            Tools
                        </template>

                        <template slot="caption">
                            The tools I’m currently using to do what I do.
                        </template>
                    </anchor>
                </li>
                <li class="[ col-12 sm:col-6 overflow-hidden ]">
                    <anchor class="[ text-black ]" to="#">
                        <template slot="title">
                            Let's work together!
                        </template>

                        <template slot="caption">
                            If you like how I work, let’s work together!
                        </template>
                    </anchor>
                </li>
            </ul>
        </nav>
    </section>
@endsection
