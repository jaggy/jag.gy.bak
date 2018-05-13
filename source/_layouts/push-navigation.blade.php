<transition name="wipe"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
    >
    <section v-if="burger.active" ref="pushNavigation"
        class="push-navigation [
                flex items-center justify-center
                bg-pink h-screen w-screen pin-t pin-l fixed z-40 px-10
            ]">
        <ul class="[ list-reset leading-none -mt-24 ]">
            <li class="[ overflow-hidden ]">
                <anchor class="[ text-white ]" to="/" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Home
                    </span>

                    <span class="[ ms-base sm:ms-lg italic ]" slot="caption">
                        Allons-y!
                    </span>
                </anchor>
            </li>

            <li class="[ mt-8 ]">
                <anchor class="[ text-white ]" to="/thoughts/" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Journal
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        Thoughts on code, technology, work, and any other thing I can think of.
                    </span>
                </anchor>
            </li>

            <li class="[ mt-8 ]">
                <anchor class="[ text-white ]" to="/about/" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        About
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        Know more about me and the things I've done.
                    </span>
                </anchor>
            </li>

            <li class="[ mt-8 ]">
                <anchor class="[ text-white ]" to="/uses/" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Tools
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        Editors, terminals, gear, it's here!
                    </span>
                </anchor>
            </li>
        </ul>
    </section>
</transition>
