// لدينا ال Function التالية تقبل منك إثنين Parameters وهم قيم منوعة
// نريد طباعة رسالة فيها القيمة الأولى والثانية
// السطر الأخير لا نريده أن يعمل لأننا نحتاج قيم ال Number + String فقط
// يجب عدم إستعمال Any Type


function printInfo(valueOne: number | string, valueTwo: number | string) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work