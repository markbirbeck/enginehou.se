# Engine House Blog

The Engine House blog.

To generate output use stdin and stdout.

For example:

```shell
$ node src < docs/example.md
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Contents</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1 id="hello-world">Hello World</h1>
<h2 id="table-of-content">Table of Content</h2>
<ul>
<li><a href="#install">Install</a></li>
<li><a href="#use">Use</a></li>
<li><a href="#license">License</a></li>
</ul>
<h2 id="install">Install</h2>
<p>A <strong>example</strong>.</p>
<h2 id="use">Use</h2>
<p>More <code>text</code>.</p>
<h2 id="license">License</h2>
<p>MIT</p>
</body>
</html>

