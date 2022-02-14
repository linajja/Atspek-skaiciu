function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let result = document.createElement("p");
let randNumber = rand(0, 100);
let count = 0;
console.log(randNumber);

let forma = document.forms['pirma'];

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    let skaicius = +forma["number"].value;
    console.log(skaicius);
    count++;
    if (randNumber > skaicius) {
        result.textContent = `Reikia didesnio skaiciaus nei ${skaicius}`;
    } else if (randNumber < skaicius) {
        result.textContent = `Reikai mazesnio skaiciaus nei ${skaicius}`;
    }
    else {
        result.textContent = `Pataikei iš ${count} karto`;
    }
    body.appendChild(result);
});
