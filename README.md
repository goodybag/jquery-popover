# jquery-popover

> jquery popover plugin

## Install

```shell
bower install gb-jquery-popover
```

In your html, reference the latest versioned files from `/dist`.

```html
<head>
  <link rel="stylesheet" href="dist/jquery-popover-x.y.z.css">
</head>
<body>
  <script src="dist/jquery-popover-x.y.z.js"></script>
</body>
```

## Usage

Add popover markup

```html
<span class="popover-wrapper">
  <a href="#" data-role="popover" data-target="example-popover">Open</a>
  <div class="popover-modal example-popover">
    <div class="popover-body">
      <!-- contents here -->
    </div>
  </div>
</span>
```

and enable them with jQuery

```js
$('[data-role="popover"]').popover();
```

[Demo](http://goodybag.github.io/jquery-popover/)

## Build

The default task simply minifies the source files

```shell
gulp
```

While developing, we highly recommend live reloading via browsersync. As you
change files in `/src`, browsersync will automatically inject and reload
the page for you.

Also, make sure you are on the `gh-pages` branch because
`master` does not contain the index.html which serves as a dev playground.

```shell
git checkout gh-pages
gulp serve
```

## Test

```
npm test
```

## License

MIT

---

Made with :heart: by [Goodybag](http://goodybag.com)
