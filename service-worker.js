/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d7fcc672687e0b3bb45cd5916885c14"
  },
  {
    "url": "android-icon-144x144.png",
    "revision": "d4200f3c97334051448f67442da558eb"
  },
  {
    "url": "android-icon-192x192.png",
    "revision": "13328e09cd821cc3eac94813f667e9fd"
  },
  {
    "url": "android-icon-36x36.png",
    "revision": "e31dfb1f770d678ab9bf3ba3cf22627c"
  },
  {
    "url": "android-icon-48x48.png",
    "revision": "eb1593b69799a299192b239a0b1630a8"
  },
  {
    "url": "android-icon-72x72.png",
    "revision": "252684f26c5612e9fed7737369da29d2"
  },
  {
    "url": "android-icon-96x96.png",
    "revision": "76a5661f31ae0b41afc5ea5cd88d52c7"
  },
  {
    "url": "apple-icon-114x114.png",
    "revision": "1c50c62d3aba90479ec3f5d37f06ab48"
  },
  {
    "url": "apple-icon-120x120.png",
    "revision": "d272fb4deed8649811aa87029c50507c"
  },
  {
    "url": "apple-icon-144x144.png",
    "revision": "d4200f3c97334051448f67442da558eb"
  },
  {
    "url": "apple-icon-152x152.png",
    "revision": "2590241d6a42e74bc9791f6d137d12f1"
  },
  {
    "url": "apple-icon-180x180.png",
    "revision": "2a8882db2f5d002683df98f3bf23f075"
  },
  {
    "url": "apple-icon-57x57.png",
    "revision": "fdf629a3d86fea297498f0f31f5157e0"
  },
  {
    "url": "apple-icon-60x60.png",
    "revision": "838958ac34e3e28e569bdcaba1f8ee2b"
  },
  {
    "url": "apple-icon-72x72.png",
    "revision": "252684f26c5612e9fed7737369da29d2"
  },
  {
    "url": "apple-icon-76x76.png",
    "revision": "0138cd19ec1f6bd2a6b7d377722f8ffa"
  },
  {
    "url": "apple-icon-precomposed.png",
    "revision": "325459b5fb3ccb08a65b36bb8538cb22"
  },
  {
    "url": "apple-icon.png",
    "revision": "325459b5fb3ccb08a65b36bb8538cb22"
  },
  {
    "url": "artboards-artboards-arboards/index.html",
    "revision": "08ade3cc7a9a47bde04e38e7fb5dea3c"
  },
  {
    "url": "assets/css/0.styles.150f2fc1.css",
    "revision": "557217ac9ee60362f8556f5f2e02ad61"
  },
  {
    "url": "assets/fonts/Ligconsolata-Bold.89fca33f.woff2",
    "revision": "89fca33fe377ad0b3920e9f616739081"
  },
  {
    "url": "assets/fonts/Ligconsolata-Bold.b397b906.woff",
    "revision": "b397b9063e731b2c1d05f6eb85699077"
  },
  {
    "url": "assets/fonts/Ligconsolata-Regular.21e92eaa.woff2",
    "revision": "21e92eaa58bbd3b92229bf4a41136f79"
  },
  {
    "url": "assets/fonts/Ligconsolata-Regular.8f255a0d.woff",
    "revision": "8f255a0d34ce41411bbb9bb78e01010c"
  },
  {
    "url": "assets/img/full-name.7ae809ab.jpg",
    "revision": "7ae809ab9c1e60b19ed0732d869a72d0"
  },
  {
    "url": "assets/js/10.0b90a967.js",
    "revision": "9e1b301bda2787e5975ff6dfb303ef00"
  },
  {
    "url": "assets/js/11.505c94c3.js",
    "revision": "9745033a343912cae1a391f0e9fd2ce7"
  },
  {
    "url": "assets/js/12.260c812e.js",
    "revision": "d9147d796db29ef45f2f8c94b0d16ac5"
  },
  {
    "url": "assets/js/13.4889acc8.js",
    "revision": "66ee50600214df517c14f52d067eb22f"
  },
  {
    "url": "assets/js/14.e34e01dc.js",
    "revision": "84a4c0d934fd951560bbb5ef83596734"
  },
  {
    "url": "assets/js/15.003ab9ff.js",
    "revision": "09cb1fdc87a72f1d59a0b8b04a494ab7"
  },
  {
    "url": "assets/js/16.1b8989d8.js",
    "revision": "655267250962f744bc82bb1a5c9a867a"
  },
  {
    "url": "assets/js/17.8e23c5a2.js",
    "revision": "b1f9de11bb124874ca31c3e90e447882"
  },
  {
    "url": "assets/js/18.e6e585ae.js",
    "revision": "8655e966d379de7254c121059867be5c"
  },
  {
    "url": "assets/js/2.a5741bda.js",
    "revision": "c325d1ab94953d76d2f8167d2d7f9aac"
  },
  {
    "url": "assets/js/3.4ae6469f.js",
    "revision": "9e3d81862695150f64b9aa8046ea4832"
  },
  {
    "url": "assets/js/4.d30e0a56.js",
    "revision": "82c12eb2dfccb986b52649362b84e473"
  },
  {
    "url": "assets/js/5.0b7e2f8f.js",
    "revision": "c776f958ba2de176c6122a76deb88b59"
  },
  {
    "url": "assets/js/6.105804c6.js",
    "revision": "9792355ae0097417bcd1e4aec09aff9c"
  },
  {
    "url": "assets/js/7.c1d624f1.js",
    "revision": "ccbe0b68de310f3b2f75383285f5faa1"
  },
  {
    "url": "assets/js/8.4e5671ca.js",
    "revision": "48f70444db8aaef676e4ff05888a3862"
  },
  {
    "url": "assets/js/9.b5b3c43d.js",
    "revision": "715a9011b53697ba98eb1b43943c71ad"
  },
  {
    "url": "assets/js/app.6ce14dd3.js",
    "revision": "11b37ff9a25df9329e307e78dcdb270f"
  },
  {
    "url": "building-a-cms-and-failing/index.html",
    "revision": "192880642ae36801ef90ff1f58a1d1c7"
  },
  {
    "url": "building-my-site-with-vuepress/index.html",
    "revision": "c13a36252d1862201e31ba9e1dd162d3"
  },
  {
    "url": "designing-type-cms/index.html",
    "revision": "c092fe6ab25f1a9aed51b15ac73242ce"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "91dab586eb64b9b655057f5a6cd68b7f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "33ec4f249b56f24c895fbb23b7f63504"
  },
  {
    "url": "favicon-96x96.png",
    "revision": "76a5661f31ae0b41afc5ea5cd88d52c7"
  },
  {
    "url": "icon.png",
    "revision": "976905a3b421de040d5d41ea5cf9158f"
  },
  {
    "url": "index.html",
    "revision": "6be5cb9db05fd3726e980512415ad8b9"
  },
  {
    "url": "laravel-echo-nuxt-and-websockets/index.html",
    "revision": "3aef61cc4fd15fcfc5c444395e00365f"
  },
  {
    "url": "ms-icon-144x144.png",
    "revision": "d4200f3c97334051448f67442da558eb"
  },
  {
    "url": "ms-icon-150x150.png",
    "revision": "2f7801250e413184a2f62a33aacbc7c9"
  },
  {
    "url": "ms-icon-310x310.png",
    "revision": "fcf3524a88710968e54f9e217f9c13c0"
  },
  {
    "url": "ms-icon-70x70.png",
    "revision": "72faf3c61492a2a9f354f95db04eef02"
  },
  {
    "url": "some-unique-slug/index.html",
    "revision": "e2f3ac8a12432396fb9f458c0b1cc2e8"
  },
  {
    "url": "switching-layouts-in-nuxt/index.html",
    "revision": "53df92ddbd4b26cd23e82a67f009348e"
  },
  {
    "url": "til-javascript-and-picture-in-picture/index.html",
    "revision": "2c8b9827b9015401936fdfbdf79c276c"
  },
  {
    "url": "why-i-use-full-names-when-desiging-forms/index.html",
    "revision": "e24491415bbc6e3a24c183b9b6885795"
  },
  {
    "url": "working-as-adults/index.html",
    "revision": "6a43d6319c48c8b68b123bca14fb31c3"
  },
  {
    "url": "writing-more/index.html",
    "revision": "d212bc222bdf54ec8dbb22c5ded67ab0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
