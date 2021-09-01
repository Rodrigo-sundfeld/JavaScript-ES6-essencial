function fn() {
    log('Hoisting de funcao');

    function log(value) {
        console.log(value);
    }
}

fn();

/*
function fn() {
    function log(value) {
        console.log(value);
    }
    log('Hoisting de funcao');
}
*/