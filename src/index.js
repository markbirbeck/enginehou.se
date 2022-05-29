import {args} from 'unified-args'
import {stream} from 'unified-stream'
import {unified} from 'unified'
import extensions from 'markdown-extensions'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeDocument, {
    script: 'document.write(\'<script src="http://\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')',
    title: 'Engine House Blog'
  })
  .use(rehypeFormat)
  .use(rehypeStringify)

args({
  description:
    'Markdown processor powered by plugins part of the unified collective',
  extensions,
  ignoreName: '.remarkignore',
  name: 'remark',
  packageField: 'remarkConfig',
  processor,
  rcName: '.remarkrc',
  version: '14.0.0'
})