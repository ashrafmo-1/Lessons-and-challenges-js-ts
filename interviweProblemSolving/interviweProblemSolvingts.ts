type types = {
  str: string;
  num: Number;
}

let track: Number = 0;
let arr: number[] = []; // Assuming arr is an array of numbers, initialize it properly.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    [arr[Number(track)], arr[i]] = [arr[i], arr[Number(track)]];
    track = Number(track) + 1;
  }
}
let oddIndex = Number(track); // بداية الأرقام الفردية في المصفوفة
for (let i = oddIndex; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
console.log(arr);