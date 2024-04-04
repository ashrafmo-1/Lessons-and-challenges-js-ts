"use strict";
// لدينا لعبة تحتوي على 4 مستويات Easy, Medium, Hard, Insane
// نريد إنشاء Enums تحتوي على المستويات والقيمة الخاصة بها
// ال Easy عبارة عن رقم 100
// ال Medium تكون قيمتها عملية حسابية وهي قيمة ال Easy مطروح منها رقم 20
// ال Hard عملية حسابية وهي قيمة ال Medium مطروح منها (قيمة ال Easy مقسومة على 2)
// ال Insane عبارة عن Function تقبل منك Parameter واحد وهو رقم
// ال Function تقوم بطرح هذا الرقم من قيمة ال Hard
// شاهد القيم لتقوم بعمل المطلوب
// Create Enums + Function Here
let Instane = (nValue) => {
    return Game.Hard - nValue;
};
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = Instane(10)] = "Insane";
})(Game || (Game = {}));
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
