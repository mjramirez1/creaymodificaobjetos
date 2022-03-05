// Función para crear consultorio, en donde se agregará un array de pacientes (this.pacientes)
function Consultorio(nombre) {
    this.nombre = nombre
    this.pacientes = []
}
// Función para agregar pacientes en la Función Constructora Consultorio
Consultorio.prototype.agregarPaciente = function (paciente) {
    this.pacientes.push(paciente)
}
//Muestra toda la información de los pacientes
Consultorio.prototype.mostrarDatos = function () {
    this.pacientes.forEach((paciente) => {
        const nombre = paciente._nombre
        const edad = paciente._edad
        const rut = paciente._rut
        const diagnostico = paciente._diagnostico
        console.log(`El paciente ${nombre} de edad ${edad} de rut ${rut} padece de ${diagnostico}`)
    })
}
Consultorio.prototype.pacientePorNombre = function (nombrePaciente) {
	const nombreDelPaciente = this.pacientes.find((paciente) => {
		if (nombrePaciente === paciente.getNombre()) {
			return true
		}
	})
	console.log(nombreDelPaciente)
}
// Función Constructora para crear los pacientes del consultorio
function Paciente() {
    this._nombre = ""
    this._edad = 0
    this._rut = 0
    this._diagnostico = ""
}
//Se crea la funcion para obtener el nombre
Paciente.prototype.setNombre = function (nombre) {
    this._nombre = nombre
}
//Se crea la funcion para devolver el nombre
Paciente.prototype.getNombre = function () {
    return this._nombre
}
//Se crea la funcion para obtener el edad
Paciente.prototype.setEdad = function (edad) {
    this._edad = edad
}
//Se crea la funcion para devolver el edad
Paciente.prototype.getEdad = function () {
    return this._edad
}
//Se crea la funcion para obtener el rut
Paciente.prototype.setRut = function (rut) {
    this._rut = rut
}
//Se crea la funcion para devolver el rut
Paciente.prototype.getRut = function () {
    return this._rut
}
//Se crea la funcion para obtener el diagnostico
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._diagnostico = diagnostico
}
//Se crea la funcion para devolver el diagnostico
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico
}
// Paciente 1
const paciente1 = new Paciente()
paciente1.setNombre("Juan")
paciente1.setEdad(20)
paciente1.setRut("18221564-6")
paciente1.setDiagnostico("Diabetes")

// Paciente 2
const paciente2 = new Paciente()
paciente2.setNombre("Ana")
paciente2.setEdad(50)
paciente2.setRut("9221564-6")
paciente2.setDiagnostico("Hipertensión")

// Paciente 3
const paciente3 = new Paciente()
paciente3.setNombre("Arsenio")
paciente3.setEdad(85)
paciente3.setRut("3225564-6")
paciente3.setDiagnostico("Parkinson")

// Paciente 4
const paciente4 = new Paciente()
paciente4.setNombre("Lisa")
paciente4.setEdad(34)
paciente4.setRut("12887770-7")
paciente4.setDiagnostico("ACV Isquémico")

// Paciente 5
const paciente5 = new Paciente()
paciente5.setNombre("Antonio")
paciente5.setEdad(21)
paciente5.setRut("20798756-7")
paciente5.setDiagnostico("Disfagia")

// Se crea la constante consultorio para volverla un objeto nuevo en donde agregaremos elementos
const consultorioMedico = new Consultorio("Consultorio Médico")

// Se agregan los pacientes en este caso el paciente1, y se guardará en la constante consultorio en el nuevo objeto
consultorioMedico.agregarPaciente(paciente1)
consultorioMedico.agregarPaciente(paciente2)
consultorioMedico.agregarPaciente(paciente3)
consultorioMedico.agregarPaciente(paciente4)
consultorioMedico.agregarPaciente(paciente5)

// Se muestra la información solicitada
console.log(consultorioMedico)
consultorioMedico.mostrarDatos()
consultorioMedico.pacientePorNombre("Lisa")
