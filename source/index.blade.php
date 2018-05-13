@extends('_layouts.master')

@section('title', 'Home')

@section('body')
    <section class="home [ py-12 ]">
        <h1 class="[ leading-none tracking-semitight ms-2xl ]">
            Kumusta? I'm Jaggy.
        </h1>

        <p class="[ mt-4 ]">
            I’m a product designer from Manila. I’m a developer for <a class="[ font-bold ]" target="_blank" href="https://artisan.studio/">Artisan Studio</a>. I
            host a “soft skills” Filipino podcast with a couple of my friends, and <em>I
            really love building things</em>.
        </p>

        <p class="[ mt-2 ]">
            Welcome to the place where I’m trying to improve my writing.
        </p>

        <p class="mt-2">
            Feel free to reach out at
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jaggygauran">Twitter</a> /
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/jaggy">Github</a> /
            <a rel="noopener noreferrer" href="mailto:i.am@jag.gy">i.am@jag.gy</a> <span class="[ ml-1 ]">🎉</span>
        </p>

        <nav class="[ mt-8 ]">
            <ul class="[ list-reset leading-none ]">
                <li class="[ overflow-hidden ]">
                    <anchor class="[ text-black ]" to="/thoughts/">
                        <template slot="title">
                            Journal
                        </template>

                        <template slot="caption">
                            <span class="block max-w-xs">
                                Thoughts on code, technology, work, and any other thing I can think of.
                            </span>
                        </template>
                    </anchor>
                </li>
                <li class="[ overflow-hidden mt-6 ]">
                    <anchor class="[ text-black ]" to="/about/">
                        <template slot="title">
                            About
                        </template>

                        <template slot="caption">
                            <span class="block max-w-xs">
                                Know more about me and the things I've done.
                            </span>
                        </template>
                    </anchor>
                </li>

                <li class="[ overflow-hidden mt-6 ]">
                    <anchor class="[ text-black ]" to="/uses/">
                        <template slot="title">
                            Tools
                        </template>

                        <template slot="caption">
                            <span class="block max-w-xs">
                                Editors, terminals, gear, it's here!
                            </span>
                        </template>
                    </anchor>
                </li>
                <li class="[ overflow-hidden mt-6 ]">
                    <anchor class="[ text-black ]" to="mailto:i.am@jag.gy">
                        <template slot="title">
                            Let's work together!
                        </template>

                        <template slot="caption">
                            <span class="block max-w-xs">
                                Let me know if you want to work with me on a design or a project.
                            </span>
                        </template>
                    </anchor>
                </li>
            </ul>
        </nav>

        <footer class="[ mt-8 text-16 ]">
            My references in building this site:

            <ul>
                <li><a rel="noopener noreferrer" target="_blank" href="http://ueno.co/">ueno.</a> for the link hovers.</li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.pablostanley.com/">Pablo Stanley</a> for the introduction copy.</li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.thelonelypixel.co.uk/">The Lonely Pixel</a> inspired the navigation.</li>
                <li><a rel="noopener noreferrer" target="_blank" href="http://wesbos.com/uses/">Wesbos</a> the tools page.</li>
            </ul>
        </footer>
    </section>
@endsection
