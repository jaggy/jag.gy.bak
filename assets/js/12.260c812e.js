(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{465:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Now that we've started to yet again write another CMS, how do we go about it? In my case, whenever I write any product or package, I tend to start designing the ideal design and start adding in compromises depending on external factors (mostly my own technical knowhow).")]),t._v(" "),s("p",[t._v("So, let's just jump into it and let's build this!")]),t._v(" "),s("h2",{attrs:{id:"the-design"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#the-design"}},[t._v("#")]),t._v(" The design")]),t._v(" "),s("p",[t._v("For Type, our main goal is the ability to work on the front-end without having to wait for any back-end work to have even started development.")]),t._v(" "),s("p",[t._v("To make this work, we want to mainly work with JSON objects on the front-end, but we also want to make sure that Type works with a monolithic app since there are times that I really don't want two different packages for a single website.")]),t._v(" "),s("p",[t._v("Okay, so since Type is a tool to build websites, let's start on the output we want first and work backwards from there.")]),t._v(" "),s("p",[t._v("Let's remake the "),s("a",{attrs:{href:"https://postmarkapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postmark landing page"),s("OutboundLink")],1),t._v(" since I really like it.")]),t._v(" "),s("h3",{attrs:{id:"statamic-and-prismic-contentful"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#statamic-and-prismic-contentful"}},[t._v("#")]),t._v(" Statamic and Prismic/Contentful")]),t._v(" "),s("p",[t._v("Whenever I start working on some Statamic sites, I do the same thing, you can immediately start working with hard-coded data with variables extracted to frontmatter, then later move it out to the CMS. We'll take that, but use JSON.")]),t._v(" "),s("blockquote",[s("p",[t._v("I haven't looked into Statamic v3 yet, so if it's "),s("em",[t._v("extremely similiar")]),t._v(", sorry Jack, Jason, and Jesse. 😅")])]),t._v(" "),s("p",[t._v("Moving on, for the headless side, I always like using dedicated components/partials for the blocks, and having to jigsaw something without the need for the backend sounds great.")]),t._v(" "),s("p",[t._v("Imagine if we have some built wireframe components that we can just automagically switch with production data!")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Hero")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Customers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Features")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Partners")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Testimonials")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Metrics")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Support")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CallToAction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("or, if we want to loop through the blocks:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Component \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("is"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"block.type"')]),t._v(" \n  v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"block.data"')]),t._v(" \n  v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"block in page.blocks"')]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or with blade")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"blocks.'),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$blocks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'block'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/typecms/demo/tree/json-based-front-end",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here's a link to a partial build of the landing page."),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("div",{staticStyle:{position:"relative","padding-bottom":"calc(56.25% + 44px)"}},[s("iframe",{staticStyle:{position:"absolute",top:"0",left:"0"},attrs:{src:"https://gfycat.com/ifr/ShabbyNippyInvisiblerail",frameborder:"0",scrolling:"no",width:"100%",height:"100%",allowfullscreen:""}})]),s("p",[s("a",{attrs:{href:"https://gfycat.com/shabbynippyinvisiblerail"}},[t._v("via Gfycat")])]),t._v(" "),s("h2",{attrs:{id:"updates"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),s("p",[t._v("It's the next day and I have some thoughts after building out the front-end.")]),t._v(" "),s("h3",{attrs:{id:"using-the-block-type-isn-t-as-good-as-i-thought"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#using-the-block-type-isn-t-as-good-as-i-thought"}},[t._v("#")]),t._v(" Using the block type isn't as good as I thought")]),t._v(" "),s("p",[t._v("Using the block type.. not a good idea. Like the customer list, there might be specific designs for specific pages so it's better to base it off of the id instead.")]),t._v(" "),s("p",[t._v("To be fair, we can use practically any data the api passes on.")]),t._v(" "),s("h3",{attrs:{id:"how-about-block-variants"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#how-about-block-variants"}},[t._v("#")]),t._v(" How about block variants?")]),t._v(" "),s("p",[t._v("For things like reversing bi-folds, and all that, I still think passing them off as data can still make it work.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bifold"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '...'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      heading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '...'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      isReversed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"using-camel-case-over-snake-case"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#using-camel-case-over-snake-case"}},[t._v("#")]),t._v(" Using camel case over snake case")]),t._v(" "),s("p",[t._v("I started off using snake case for the API attributes since I'm pretty used to that but after building out the landing page, it got pretty annoying transforming the data just so the code style is consistent on the front-end.")]),t._v(" "),s("p",[t._v("For now, I think I'll default to camel case, although, I think this can be manually set in userland, so it should not be a big problem later on. 🤔")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contactNumber "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contactNumber "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// over")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncData")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contact_number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" contactNumber "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" contactNumber "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("I guess there really are some ways to skirt around it but less code, less problems.")]),t._v(" "),s("p",[t._v("On the PHP side I still prefer snake case for database-driven attributes.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$globals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("contact_number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("pretty")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"let-s-do-a-hard-stop-here"}},[s("a",{staticClass:"c-anchor",attrs:{href:"#let-s-do-a-hard-stop-here"}},[t._v("#")]),t._v(" Let's do a hard stop here")]),t._v(" "),s("p",[t._v("I'm babbling, the post has lost its direction since I've been just dumping thoughts for the past three days. On the next one, we'll start working on the backend to figure out how to build out this package. 😬")])])}),[],!1,null,null,null);a.default=n.exports}}]);