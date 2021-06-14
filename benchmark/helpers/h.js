/* eslint-disable import/no-extraneous-dependencies */
const { createHyperscript } = require('@whimsicalcode/slate-hyperscript')

/**
 * Define a hyperscript.
 *
 * @type {Function}
 */

const h = createHyperscript({
  blocks: {
    line: 'line',
    paragraph: 'paragraph',
    quote: 'quote',
    code: 'code',
    list: 'list',
    item: 'item',
    image: 'image',
    table: 'table',
    tbody: 'tbody',
    tr: 'tr',
    td: 'td',
    thead: 'thead',
    th: 'th',
  },
  inlines: {
    link: 'link',
    hashtag: 'hashtag',
    comment: 'comment',
    emoji: 'emoji',
  },
  marks: {
    b: 'bold',
    i: 'italic',
    u: 'underline',
  },
})

/**
 * Export.
 *
 * @type {Function}
 */

module.exports = h
