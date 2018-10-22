# readdir-loader
> load all files in given dir

[![dependencies Status](https://david-dm.org/doubleu23/readdir-loader/status.svg)](https://david-dm.org/doubleu23/readdir-loader)
[![devDependencies Status](https://david-dm.org/doubleu23/readdir-loader/dev-status.svg)](https://david-dm.org/doubleu23/readdir-loader?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/doubleu23/readdir-loader/badge.svg)](https://snyk.io/test/github/doubleu23/readdir-loader) [![Greenkeeper badge](https://badges.greenkeeper.io/DoubleU23/readdir-loader.svg)](https://greenkeeper.io/)

### basic information
* webpack loader
* read dir's content via 'dive' pckg  
    * files and/or directories
    * recursive (if you want)

### usage
**targetDir tree**  
├── index.js  
├── LICENSE  
├── node_modules  
├── package.json  
├── README.md  
└── test
```JavaScript
const subdirs = require('readdir-loader!./targetDir')
console.log(subdirs) // ['node_modules', 'test']

const subdirs = require('readdir-loader?dirs=false&files=true!./targetDir')
console.log(subdirs) // ['index.js', 'LICENSE', 'package.json', 'README.md']
```
**CAUTION**  
webpack-loaders are limited to targeting files  
**to enable the loader** fetching the dir just add an file in the dir named "index(.js)"

### options
| name | type | description | default |
|------|------|-------------|-------------|
| basename | bool | return basename? | true |
| dirs | bool | include dirs? | true |
| files | bool | include files? | false |
| recursive | bool | search recursive? | false |

### issues


### to be done  
* `npm publish`
* optimize options
* tests
