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
class lapiz{
    #marca
    constructor({color="fff700",}){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
}
let obj = undefined;
let color = document.querySelector(`[name="color"]`);
addEventListener("DOMContentLoaded", (e) => {
    obj = new lapiz({color: color.value});
    console.log(obj.getColor());
});