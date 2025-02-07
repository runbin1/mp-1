function addition() {
    let first = document.getElementById('first-input').value
    let second = document.getElementById('second-input').value
    first = Number(first)
    second = Number(second)

    let result = first + second;
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    document.getElementById('output').innerHTML = String(result);
}

function subtraction() {
    let first = document.getElementById('first-input').value
    let second = document.getElementById('second-input').value
    first = Number(first)
    second = Number(second)

    let result = first - second;
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    document.getElementById('output').innerHTML = String(result);
}

function mult() {
    let first = document.getElementById('first-input').value
    let second = document.getElementById('second-input').value
    first = Number(first)
    second = Number(second)

    let result = first * second;
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    document.getElementById('output').innerHTML = String(result);
}

function divide() {
    let first = document.getElementById('first-input').value
    let second = document.getElementById('second-input').value
    first = Number(first)
    second = Number(second)

    let result = first / second;
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    document.getElementById('output').innerHTML = String(result);
}

function expo() {
    let first = document.getElementById('first-input').value
    let second = document.getElementById('second-input').value
    first = Number(first)
    second = Number(second)

    let result = 1
    if (second === 0) {
        result = 1;
    }
    else if (second > 0) {
        for (let i = 0; i < second; i++) {
            result = result * first;
        }
    }
    else {
        let compare = second * -1;
        for (let i = 0; i < compare; i++) {
            result = result * first;
        }
    }
    if  (second < 0) {
        result =  1 / result;
    }
    if (result < 0) {
        document.getElementById('output').style.color = 'red';
    }
    document.getElementById('output').innerHTML = String(result);
}

function clearr() {
    document.getElementById('first-input').value = "";
    document.getElementById('second-input').value = "";
    document.getElementById('output').innerHTML = "";
}