# readdir-loader
> load all files in given dir

### basic information
* webpack loader
* read dir's content via 'dive' pckg  
    * files and/or directories
    * recursive (if you want)

### usage
```JavaScript
const subdirs = require('readdir-loader!.') // '.' is the dir
console.log(subdirs)
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