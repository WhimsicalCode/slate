/** @jsx h */

import h from '../../../helpers/h'
import { Block } from '@whimsicalcode/slate'

export default function(editor) {
  editor.insertNodeByKey('a', 0, Block.create('paragraph'))
}

export const input = (
  <value>
    <document key="a">
      <paragraph>
        <cursor />one
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph />
      <paragraph>
        <cursor />one
      </paragraph>
    </document>
  </value>
)
