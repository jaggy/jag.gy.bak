<transition name="wipe" @after-enter="wipeAfter">
    <section v-if="burger" ref="pushNavigation"
        class="push-navigation [
                flex items-center
                bg-pink h-screen w-screen pin-t pin-l fixed z-40 px-10
            ]">
        <ul class="[ list-reset leading-none -mt-24 ]">
            <li class="[ overflow-hidden ]">
                <anchor class="[ text-white ]" to="#" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Journal
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        Thoughts on anything I want to write on.
                    </span>
                </anchor>
            </li>

            <li class="[ overflow-hidden mt-8 ]">
                <anchor class="[ text-white ]" to="#" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        About
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        Know more about what I do and my experiences.
                    </span>
                </anchor>
            </li>

            <li class="[ overflow-hidden mt-8 ]">
                <anchor class="[ text-white ]" to="#" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Tools
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        The tools I’m currently using to do what I do.
                    </span>
                </anchor>
            </li>

            <li class="[ overflow-hidden mt-8 ]">
                <anchor class="[ text-white ]" to="#" :inverse="true">
                    <span class="[ ms-xl sm:ms-2xl ]" slot="title">
                        Let's work together!
                    </span>

                    <span class="[ ms-base sm:ms-lg ]" slot="caption">
                        If you like how I work, let’s work together!
                    </span>
                </anchor>
            </li>
        </ul>
    </section>
</transition>
