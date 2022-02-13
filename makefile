publish:
	mkdir publish

build: publish
	node src/ < docs/example.md > publish/example.html
