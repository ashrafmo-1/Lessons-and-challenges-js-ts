// لدينا ال String التالي يحتوي على علامة @ أكثر من مرة
// المطلوب إزالة كل شيء بعد علامة @ الثانية بسطر واحد فقط
// شاهد النتيجة المطلوبة

let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// const result = myString.split("@").slice(0, 2).join("@");
// console.log(result);

let result = "";
let atCount = 0;
for (i = 0; i < myString.length; i++) {
  if (myString[i] == "@") {
    atCount++;
    if (atCount == 2) {
      break;
    }
  }
  result += myString[i];
}
console.log("str, =>", result);

let reg = myString.replace(/(@[^@]*@).*/, "$1").slice(0, -1);
console.log("reg, =>", reg);