// The Computer Language Benchmarks Game
// http://benchmarksgame.alioth.debian.org/
//
// contributed by Ian Osgood
// Optimized by Roy Williams

function A(i, j) {
    return 1 / (((i + j) * (i + j + 1) >>> 1) + i + 1);
}

function Au(u, v) {
    var n = u.length;
    for (var i = 0; i < n; ++i) {
        var t = 0;
        for (var j = 0; j < n; ++j)
            t += A(i, j) * u[j];
        v[i] = t;
    }
}

function Atu(u, v) {
    var n = u.length;
    for (var i = 0; i < n; ++i) {
        var t = 0;
        for (var j = 0; j < n; ++j)
            t += A(j, i) * u[j];
        v[i] = t;
    }
}

function AtAu(u, v, w) {
    Au(u, w);
    Atu(w, v);
}

function spectralnorm(n) {
    var storage_ = new ArrayBuffer(n * 24);
    var u = new Float64Array(storage_, 0, n),
        v = new Float64Array(storage_, 8 * n, n),
        w = new Float64Array(storage_, 16 * n, n);
    var i, vv = 0, vBv = 0;
    for (i = 0; i < n; ++i) {
        u[i] = 1; v[i] = w[i] = 0;
    }
    for (i = 0; i < 10; ++i) {
        AtAu(u, v, w);
        AtAu(v, u, w);
    }
    for (i = 0; i < n; ++i) {
        vBv += u[i] * v[i];
        vv += v[i] * v[i];
    }
    return Math.sqrt(vBv / vv);
}


function run(n) {
    var start = new Date().getTime();

    spectralnorm(n).toFixed(9);

    var end = new Date().getTime();
    console.log("time: " + (end - start) + "ms");
}


async function main() {
    for (var i = 0; i < 10; i++) {
        run(10);
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    exit(0);
}

main();
