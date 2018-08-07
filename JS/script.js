var nb1 = document.getElementById('nb1');
var nb2 = document.getElementById('nb2');


function additionner() {
    document.getElementById('result').innerHTML = parseInt(nb1.value) + parseInt(nb2.value);
}

function soustraire() {
    document.getElementById('result').innerHTML = nb1.value - nb2.value;
}

function multiplier() {
    document.getElementById('result').innerHTML = nb1.value * nb2.value;
}

function diviser() {
    document.getElementById('result').innerHTML = nb1.value / nb2.value;
}