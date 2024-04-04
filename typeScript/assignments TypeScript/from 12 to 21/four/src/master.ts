// الداله كلها اغلاط
// لازمم تتصلح علشان ال consoles تشتغل
// يمكن التعديل والالغاء في الداله كما تشاء


// handel data types
type done = boolean | number | string

function yesOrNo(val: number | boolean | string): done {
    if (typeof val === 'number') {
        return val > 10;
    } else {
        return 'Error';
    }
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False