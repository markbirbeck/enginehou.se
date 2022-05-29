import {args} from 'unified-args'
import extensions from 'markdown-extensions'

import { processor } from './processor.js'

args({
  description:
    'Markdown processor powered by plugins part of the unified collective',
  extensions,
  ignoreName: '.remarkignore',
  name: 'remark',
  packageField: 'remarkConfig',
  processor: processor('Engine House Blog'),
  rcName: '.remarkrc',
  version: '14.0.0'
})