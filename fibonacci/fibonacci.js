const fibonacci = function (index) {

    if (index < 0) {
        return "OOPS";
    }

    let fi = 1;
    let f0 = 0
    let f1 = 1;

    for (let i = 2; i <= index; i++) {
        fi = f0 + f1;
        f0 = f1;
        f1 = fi;
    }
    return fi;
}

module.exports = fibonacci
