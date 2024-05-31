function ageindays() {
    var birthyear = prompt("What year were you born in ?");
    var age = (2021 - birthyear)*365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + age + ' days old.');
    h1.setAttribute('id', 'age');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);
}

function reseta() {
    document.getElementById('age').remove();
}

function reset() {
    document.getElementById('age').remove();
}

function sana() {
    
}