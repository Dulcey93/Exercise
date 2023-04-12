let inputRange = document.getElementById("dimension");
let spanNumber = document.getElementById("number");
const form = document.getElementById("form");
inputRange.addEventListener("input", function () {
    let valor = inputRange.value;
    spanNumber.innerHTML = valor;
});
form.addEventListener("submit", (e) => {
    let data = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    e.preventDefault();
})
class lapiz {
    #marca
    constructor({ color = "#F0D000",
        dimension = "19",
        borrador = true,
        material = "madera",
        marca = "mongol" }) {
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
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`)
let dimension = document.querySelector(`[name="range"]`)
addEventListener("DOMContentLoaded", (e) => {
    obj = new lapiz({});
    color.value = obj.color;
    let plantilla = new DOMParser().parseFromString(data);
    document.querySelector("table").innerHTML = "";
    document.querySelector("table").appendChild(plantilla.querySelector("tbody"));
})