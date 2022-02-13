import {stream} from 'unified-stream'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSlug from 'remark-slug'
import rehypeStringify from 'rehype-stringify'

const processor = unified()
  .use(remarkParse)
  .use(remarkSlug)
  .use(remarkRehype)
  .use(rehypeStringify)

process.stdin.pipe(stream(processor)).pipe(process.stdout)