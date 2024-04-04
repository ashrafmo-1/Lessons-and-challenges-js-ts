// لدينا ال Function التالية تقبل منك إثنين Parameters وهم الأرقام
// ال Type الخاص بالبيانات تم إستنتاجه على أنه Any
// السطر الثاني الذي يحتوي على “10”, “20” سوف يعمل بدون اي مشكلة لكننا نريد ألا يعمل
// ال Function الخاصة بنا تتعامل فقط مع الأرقام

function calculate(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

  console.log(calculate(10, 20)); // 30
  console.log(calculate("10", "20")); // We Don't Need This To Work
  console.log(calculate(+true, +true)); // 2