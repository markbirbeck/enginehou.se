clean:
	rm -rf publish

publish:
	mkdir publish

build: publish
	node src/ < docs/index.md > publish/index.html
