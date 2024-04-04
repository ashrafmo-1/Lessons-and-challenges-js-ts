/*
    # Type Assertions
    --- Sometime Compiler Doesnt Know The Information We Do
    --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let imageELement =  document.querySelector('.img') as HTMLImageElement;

let imageELement =  <HTMLImageElement> document.querySelector('.img');
console.log(imageELement.src);

let inputELement =  <HTMLInputElement> document.querySelector('.imp');
console.log(inputELement.value);

let x: any = '21';
console.log((x as string).repeat(2));