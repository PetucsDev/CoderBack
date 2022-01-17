class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    static saludoCorto = 'hola'
    saludoCompleto(){
        console.log(`buenas, soy ${this.nombre}`)
    }
    saludoEstatico(){
        console.log(Persona.saludoCorto)
    }
}

const nestor = new Persona('nestor',38)

nestor.saludoCompleto()
nestor.saludoEstatico()
console.log(Persona.saludoCorto)