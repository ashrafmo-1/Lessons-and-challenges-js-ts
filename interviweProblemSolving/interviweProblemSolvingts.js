var _a, _b;
var track = 0;
var arr = []; // Assuming arr is an array of numbers, initialize it properly.
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        _a = [arr[i], arr[Number(track)]], arr[Number(track)] = _a[0], arr[i] = _a[1];
        track = Number(track) + 1;
    }
}
var oddIndex = Number(track); // بداية الأرقام الفردية في المصفوفة
for (var i = oddIndex; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            _b = [arr[j], arr[i]], arr[i] = _b[0], arr[j] = _b[1];
        }
    }
}
console.log(arr);