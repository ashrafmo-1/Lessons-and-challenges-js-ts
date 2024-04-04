"use strict";
// الداله كلها اغلاط
// لازمم تتصلح علشان ال consoles تشتغل
// يمكن التعديل والالغاء في الداله كما تشاء
function yesOrNo(val) {
    if (typeof val === 'number') {
        return val > 10;
    }
    else {
        return 'Error';
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(9)); // True
console.log(yesOrNo(8)); // False
