/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author - Stefan Friedl @DoubleU23
*/
var loaderUtils = require('loader-utils')
,   path        = require('path')
,   dive        = require('dive')

module.exports = function (content) {

  var PATH = this.resourcePath
  ,   DIR  = path.dirname(PATH)

// console.log('[dirfiles-loader] DIR', DIR)
// var dirList = []
// dive(DIR, function(err, file, stat) {
//   if (stat.isDirectory()) {
//     console.log('file found', file)
//     dirList.push(file)
//   }
// }, () => {
//     console.log('done', dirList)
// })

  if (process.env.NODE_ENV === 'production')
    this.cacheable && this.cacheable()

  if(!this.emitFile)
    throw new Error('emitFile is required from module system')

// content.toString(), query, this.options, this
console.log('\n[dirfiles-loader] content', this.resourcePath)
console.log('\n[dirfiles-loader]')

  var query     = loaderUtils.parseQuery(this.query)
  ,   url       = loaderUtils.interpolateName(this, query.name || '[hash].[ext]', {
      context:    query.context || this.options.context,
      content:    content,
      regExp:     query.regExp
    })

  var returnVal = {foo: 'bar'}
  return 'module.exports =  ' + JSON.stringify(returnVal)
}
module.exports.raw = true
