// لديك النموذج التالي الخاص بتحويل العملات
// كل ما عليك هو كتابة العملة بالدولار داخل حقل الإدخال
// في مكان النتيجة اسفل حقل الإدخال يجب عليك إظهار العملة بالدولار والمقابل لها بالجنيه المصري
// الشخص يمكن أن يكتب الرقم أو يقوم بعمل Paste للرقم أيضا
// يمكنك تغيير ال div الخاص بالنتيجة وتقوم بالتعديل عليه كما تحب
// لا تقوم بتعديل حقل الإدخال ابدا
// تنسيقات ال CSS لتجميل الشكل فقط لو أردت عملها لا توجد مشكل
// الدولار = 15.6 جنيه مصري
// تأكد ان الكسور التي تظهر في النتيجة لا تتعدي رقمين فقط.مثلا 1500.32

/* step one */
const myInp = document.querySelector("input")
const result = document.querySelector("div")
const All = document.querySelector("form")


/* To confirm the results */
console.log(myInp)
console.log(result)

// fuction to Editor
myInp.oninput = function () {
    result.innerHTML = `${myInp.value} USD Dollar = ${(myInp.value * 38.5).toFixed(2)} Egyptian Pound`
}

// myinp style
myInp.style.width = "250px"
myInp.style.height = "40px"
myInp.style.color = "red"
myInp.style.paddingInline = "10px"
myInp.style.fontSize = "22px"
myInp.style.outline = "none"
myInp.style.borderRadius = "5px"
myInp.style.margin = "5px"
myInp.style.textAlign = "center"


// result style

result.style.paddingInline = "10px"
result.style.fontSize = "22px"
result.style.fontWeight = "bolder"
result.style.color = "red"
All.style.textAlign = "center"

// const allCenter = querySelector("body")

// allCenter.style.
