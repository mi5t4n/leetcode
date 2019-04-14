/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {

    var peakFound = false;
    var length = A.length;

    if (length < 3) return false;

    for (var i = 0; i < length - 1; i++) {

        if (A[i] == A[i + 1]) {
            return false;
        }

        // Check for uphill;
        if (!peakFound && A[i + 1] < A[i]) {
            peakFound = true;
        }

        if (peakFound && A[i + 1] > A[i]) {
            return false;
        }
    }

    if (peakFound) {
        return true;
    } else {
        return false;
    }
};

var inputs = [
    [2, 1],
    [3, 5, 5],
    [0, 3, 2, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

var length = inputs.length;

for (var i = 0; i < length; i++) {
    var output = validMountainArray(inputs[i])
    console.log(`${inputs[i]} = ${output}`);
}