let name = "Ashraf"
let Array = [1, 2, 3, 4]
let num = 20

function say() {
    return `hi ${name}`
}
export { name as myName, Array, num, say }

export default function() {
    return `hello`
}