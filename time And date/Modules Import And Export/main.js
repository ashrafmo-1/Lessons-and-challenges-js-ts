// Modules Import And Export (استيرات وتصدير من ملف لاخر)
// default Export set alone
import taa, { myName, Array, say as ashraf, num } from "./react.js"
console.log(myName)
console.log(Array)
console.log(ashraf())
console.log(num)
console.log(taa())

// imbort all  functionalty
import * as all from "./react.js"
console.log(all)
console.log(all.default())