import Digital from "pins/digital";
import Timer from "timer";

var pin = new Digital({pin: 5, mode: Digital.Output});

function run(n) {
    var start = Date.now();

    for (var i = 0; i < n; i++) {
        pin.write(1);
        pin.write(0);
    }

    var end = Date.now();

    trace("Time: " + (end - start) + "\n");
}

for (var i = 0; i < 10; i++) {
    run(5000);
}
