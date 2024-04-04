//λ Literal Types
type Comparison = 'even' | 'odd'

function oodOrEvev(num: number): Comparison {
    if(num % 2 === 0) {
        return 'even';
    } else{
        return 'odd';
    }
}

console.log(oodOrEvev(2));