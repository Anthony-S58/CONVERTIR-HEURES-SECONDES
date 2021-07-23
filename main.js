
let valider = document.getElementById('valider');

valider.addEventListener('click', function() {

let secondes = 60;
let minutes = 60;
let result = document.getElementById('result');
let heures = document.querySelector('input');

console.log(heures.value);

result.innerHTML= heures.value*minutes*secondes +' secondes';

});