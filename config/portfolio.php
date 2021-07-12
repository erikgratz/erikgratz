<?php
return [
    [
        'imgUrl' => '/storage/images/toast.png',
        'text' => 'Hopefully you\'ve noticed the toasts that appear in the corner of your screen. The system driving these is a websocket server running through a proxy address, backed by the excellent laravel-websockets package, and picked up by the equally great Laravel Echo on the front side. There should be a toast on each full page load when the websocket connection is established, as well as a toast each time anyone uses my /contact page to send me a note.',
        'title' => 'Websocket driven toasts!',
    ],
    [
        'imgUrl' => '/storage/images/blogEditScreenshot.png',
        'text' => 'Not much to this one, just a tiptap editor instance customized to work with tailwind.css styling. Not pictured is the blog post listing page in the admin area which allows editing of old posts, and saving drafts.',
        'title' => 'Integrated editing and storage for blog posts!',
    ],
    [
        'imgUrl' => '/storage/images/siteFiletree.png',
        'text' => 'My website (welcome, by the way) is made with MySql, Laravel, Inertia.js, Vue 3 and TailwindCSS. Its hosted on DigitalOcean servers with Laravel Forge for management and deployment. I originally started messing around with this site to get myself some reps doing frontend work, It\'s certainly not perfect, but I am proud of it nonetheless. I\'d love to do more frontend work, so any constructive criticism would be appreciated.',
        'title' => 'This website and its backend!',
    ],
    [
        'imgUrl' => null,
        'text' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        'title' => 'Lorem Ipsum Title yo',
    ],
];
