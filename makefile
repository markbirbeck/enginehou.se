clean:
	rm -rf publish

publish:
	mkdir publish

build: publish
	node src/ docs/index.md --output publish/index.html

livereload: build
	npx livereload publish
