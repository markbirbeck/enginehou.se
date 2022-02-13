import {stream} from 'unified-stream'
import {unified} from 'unified'
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
  .use(rehypeDocument, {title: 'Engine House Blog'})
  .use(rehypeFormat)
  .use(rehypeStringify)

process.stdin.pipe(stream(processor)).pipe(process.stdout)