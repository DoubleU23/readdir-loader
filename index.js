/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author - Stefan Friedl @DoubleU23
*/
var loaderUtils = require('loader-utils')
,   path        = require('path')
,   dive        = require('dive')

module.exports = function (content) {
    // cache in production
    if (process.env.NODE_ENV === 'production') this.cacheable && this.cacheable()
    // ensure emitFile
    if (!this.emitFile) throw new Error('emitFile is required from module system')
    // loader preset
    var callback  = this.async()
    ,   query     = loaderUtils.parseQuery(this.query)
    // loader code
    var PATH        = this.resourcePath
    ,   DIR         = path.dirname(PATH)
    ,   matches     = []
    ,   diveOptions = {
            directories:  query.directories != null ? query.directories : true
        ,   basename:     query.basename    != null ? query.basename    : true
        ,   files:        query.files       != null ? query.files       : false
        ,   recursive:    query.recursive   != null ? query.recursive   : false
      }
    ,   basename    = query.directories != null ? query.directories : true

    dive(DIR, diveOptions, function (err, file, stat) {
        if (err) throw err
        var match = basename ? path.basename(file) : file
        matches.push(match)
    }, function () {
        var result = 'module.exports =  ' + JSON.stringify(matches)
        callback(null, result)
    })
}
module.exports.raw = true
