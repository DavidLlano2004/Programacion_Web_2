export const getHelloExpress = (req, res) => {
    res.send(`Bienvenidos a Express`)
}

export const getName = (req, res) => {
    const { name } = req.body
    res.send(`Hola, ${name}`)
}


export const getExampleByQueryParams = (req, res) => {
    let { number1 , number2 } = req.query
    res.send(`La suma de los números es ${parseInt(number1) + parseInt(number2)}`)
}