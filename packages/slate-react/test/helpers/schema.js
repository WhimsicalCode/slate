import { Schema } from '@whimsicalcode/slate'

const schema = Schema.create({
  blocks: {
    image: {
      isVoid: true,
    },
  },
  inlines: {
    emoji: {
      isVoid: true,
    },
  },
})

export default schema
