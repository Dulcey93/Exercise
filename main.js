let inputRange = document.getElementById("dimension");
let spanNumber = document.getElementById("number");
const form = document.querySelector("form");
class lapiz {
    #marca
    constructor({
        color = "#F0D000",
        dimension = "9",
        borrador = true,
        material = "Madera",
        marca = "Mongol" }) {
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getColor() {
        return this.color;
    }
    getDimension() {
        return this.dimension;
    }
    getBorrador() {
        return this.borrador;
    }
    getMaterial() {
        return this.material;
    }
    getMarca() {
        return this.#marca;
    }
    setMarca(marca) {
        this.#marca = marca;
    }
    setMaterial(material) {
        this.material = material;
    }
    setColor(color) {
        this.color = color;
    }
    setDimension(dimension) {
        this.dimension = dimension;
    }
    setBorrador(borrador) {
        this.borrador = borrador;
    }
}
// Crear instancia de la clase lapiz con valores por defecto
const defaultLapiz = new lapiz({});

// Asignar valores por defecto al formulario
form.color.value = defaultLapiz.getColor();
inputRange.value = defaultLapiz.getDimension();
spanNumber.innerHTML = defaultLapiz.getDimension();

// Asignar valores por defecto a los radio buttons
const marcaRadios = form.querySelectorAll('[name="marca"]');
marcaRadios.forEach(radio => {
    if (radio.value === defaultLapiz.getMarca()) {
        radio.checked = true;
    }
});

const borradorRadios = form.querySelectorAll('[name="borrador"]');
borradorRadios.forEach(radio => {
    if (radio.value === defaultLapiz.getBorrador().toString()) {
        radio.checked = true;
    }
});

const materialRadios = form.querySelectorAll('[name="material"]');
materialRadios.forEach(radio => {
    if (radio.value === defaultLapiz.getMaterial()) {
        radio.checked = true;
    }
});

// Agregar event listener al input range
inputRange.addEventListener("input", function () {
    let valor = inputRange.value;
    spanNumber.innerHTML = valor;
});

function show(data) {
    const tableBody = document.querySelector("tbody");

    // Limpiar tabla antes de insertar nuevos datos
    tableBody.insertAdjacentHTML("afterend",`
    <tr>
        <td>${data.color}</td>
        <td>${data.dimension}</td>
        <td>${data.marca}</td>
        <td>${data.borrador === "true" ? "Si" : "No"}</td>
        <td>${data.material}</td>
    </tr>`);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    data.dimension = Number(data.dimension);
    show(data);
})

/* document.addEventListener("DOMContentLoaded", function (event) {
    // el DOMContentLoaded sirve para garantizar que todo el contenido del HTML se haya cargado antes de intentar acceder a los elementos del DOM.
    // Aquí puedes acceder a los elementos del DOM de forma segura
    // Agregar event listener al formulario

    // Resto del código aquí
}); */