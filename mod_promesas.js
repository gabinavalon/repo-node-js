const dividir = (num1, num2) => {
    return new Promise((res, rej) => {
        if (num2 == 0) {
            rej("No se puede dividir por cero, cenutrio");
        } else {
            res(num1 / num2);
        }
    });
};

module.exports = dividir;
/*dividir(12,9)
.then( (resultado) => console.log(`Resultado ${resultado}`))
.catch ((error) => console.log(error));*/