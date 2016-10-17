/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author - Stefan Friedl @DoubleU23
*/
var loaderUtils               = require('loader-utils')
,   path                      = require('path')
,   fs                        = require('fs')
,   glob                      = require('glob')

module.exports = function(content) {

  if (process.env.NODE_ENV === 'production')
    this.cacheable && this.cacheable()

  if(!this.emitFile)
    throw new Error('emitFile is required from module system')

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

module.exports()