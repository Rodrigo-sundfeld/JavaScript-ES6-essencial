function getName() {
    return 'Rodrigo Sundfeld';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);