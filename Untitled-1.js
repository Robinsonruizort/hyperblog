const counter = () => {
    let count = 0

    const contar = ()=> {
        return count +=1
    }
    return contar
}

const generados = counter();



console.log(generados());
console.log(generados());
console.log(generados());
