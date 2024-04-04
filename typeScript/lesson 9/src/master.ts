function dataUser(name: string = 'Un' , age: number, berthday?: number, country?: string) {
    return `${name}, ${age}, ${berthday}, ${country}`
}

console.log(dataUser('ashraf', 20));