/*
const show = (message) => (message)?console.log(message):console.log('Mensaje por defecto')
show('Hola')
show()
*/

/*const promediar = (a,b)=>(a+b)/2
const p = promediar(4,8)
console.log(p)
*/
//const getPersona=()=>({nombre:'Nestor', edad:38})
//console.log(getPersona())

/*
const mayor_menor_10 = (a, b) => (a + b > 10)?console.log("Mayor"):console.log("Menor")
mayor_menor_10(6, 4)
mayor_menor_10(6, 10)
*/

/*(function (a,b) {
    (a + b > 10)?console.log("Mayor"):console.log("Menor")},(4,6)
)*/

//const ejecutar = cualQuierFuncion => cualQuierFuncion()

const operacion = (valor1,valor2,strategy) => strategy(valor1,valor2)

const suma = (valor1, valor2) => valor1 + valor2 
const resta = (valor1, valor2) => valor1 - valor2 
const multiplicacion = (valor1, valor2) => valor1 * valor2 
const division = (valor1, valor2) => valor1 / valor2 
const palabra = (valor1, valor2) => 'Mi palabra'

/*console.log(operacion(4,5,suma))
console.log(operacion(4,5,resta))
console.log(operacion(4,5,multiplicacion))
console.log(operacion(4,5,division))
*/

const hacerOperacion = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const result = suma(4,10, palabra)
        if(result>0){
            resolve(result)
        }
        else{
            reject('Error al ejecutar la operacion')
        }
    }, 1000);
})

hacerOperacion.then(number => console.log(number)).catch(error => console.log(error))