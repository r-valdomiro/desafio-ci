function concatenate(s1, s2) {
    return s1.concat(' ').concat(s2)
}

function sum(v1, v2) {
    return v1 + v2
}

function subtract(v1, v2) {
    return v1 - v2
}

exports.concatenate = concatenate;
exports.sum = sum;
exports.subtract = subtract;