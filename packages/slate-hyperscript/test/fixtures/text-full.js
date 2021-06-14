/** @jsx h */

import h from '@whimsicalcode/slate-hyperscript'

export const input = <text>word</text>

export const output = {
  object: 'text',
  leaves: [
    {
      object: 'leaf',
      text: 'word',
      marks: [],
    },
  ],
}
