var pin = 5;

function run(n) {
    var start = Date.now();

    for (var i = 0; i < n; i++) {
        digitalWrite(pin, 1);
        digitalWrite(pin, 0);
    }

    var end = Date.now();

    console.log("Time: " + (end - start));
}


function main() {
    for (var i = 0; i < 10; i++) {
        run(5000);
    }
}

main();
