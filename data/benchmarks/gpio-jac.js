import * as gpio from 'gpio';

var pin = 5;
gpio.pinMode(pin, gpio.PinMode.OUTPUT);

var write = gpio.write;

function run(n) {
    var start = Date.now();

    for (var i = 0; i < n; i++) {
        write(pin, 1);
        write(pin, 0);
    }

    var end = Date.now();

    console.log("Time: " + (end - start));
}


async function main() {
    for (var i = 0; i < 10; i++) {
        run(5000);
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    exit(0);
}

main();
