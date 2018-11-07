importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/layout.css',
       '/css/bootstrap.css',
       '/css/media.css',
       '/css/font.css',
       '/css/reuse.css',
       '/js/jquery.js',
       '/js/jquery.sticky.js',
       '/js/jquery.jcarousel.min.js',
       '/js/jcarousel.ajax.js',
       '/js/jcarousel.responsive.js',
       '/js/vendor/modernizr-2.6.2.min.js',
       '/js/bootstrap.js',
       '/img/slide1.png',
       '/img/slide3.png',
       '/img/arrow-left.png',
       '/img/arrow-right.png',
       '/img/ipad-icon.png',
       '/img/ipad-icon-hover.png',
       '/img/trophy-icon.png',
       '/img/trophy-icon-hover.png',
       '/img/seo-icon.png',
       '/img/seo-icon-hover.png',
       '/img/development-icon.png',
       '/img/development-icon-hover.png',
       '/img/portfolio1.png',
       '/img/portfolio2.png',
       '/img/portfolio3.png',
       '/img/portfolio4.png',
       '/img/user-img.png',
       '/img/facebook-icon.png',
       '/img/twitt-icon.png',
       '/img/back-to-top.png',
       '/img/adress-icon.png',
       '/img/phone-icon.png',
       '/img/mail-icon.png',
       '/img/twitter-icon.png',
       '/img/twitter-icon-hover.png',
       '/img/fb-icon.png',
       '/img/fb-icon-hover.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});