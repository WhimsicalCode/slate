const { resolve } = require('path')
const { existsSync } = require('fs')
const program = require('commander')

program
  .option('-g, --grep []', 'Add grep pattern to filter running benchmarks')
  .option('-c, --config [file]', 'Add config to filter running benchmarks')
  .parse(process.argv)

const { grep } = program

if (grep) {
  const pattern = new RegExp(grep)

  module.exports.include = {
    slate: pattern,
    '@whimsicalcode/slate-html-serializer': pattern,
    '@whimsicalcode/slate-plain-serializer': pattern,
    '@whimsicalcode/slate-react': pattern,
  }
} else {
  let { config = 'tmp/benchmark-config.js' } = program
  config = resolve(config)

  const userConfig = existsSync(config) ? require(config) : {}

  if (userConfig.include) {
    module.exports.include = userConfig.include
  } else if (userConfig.default) {
    module.exports.inlcude = userConfig.default
  } else {
    module.exports.include = {
      slate: /^/,
      '@whimsicalcode/slate-html-serializer': /^/,
      '@whimsicalcode/slate-plain-serializer': /^/,
      '@whimsicalcode/slate-react': /^/,
    }
  }
}
