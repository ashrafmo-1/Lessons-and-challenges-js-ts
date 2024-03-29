function balanced(centrifuge) {
  for (let i = 0; i < centrifuge.length; i++) {
    if (centrifuge[i] !== 1) {
      return false;
    }
  }
  return true;
}
console.log(balanced([1,0]));