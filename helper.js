$(document).ready(function () {
    displayAll();
    loadTests();
});

// Batch loader — shows all student functions in HTML <code> blocks
function displayAll() {
    displayFunction("loops.js", "sumMatrix", "#matrixSum");
    displayFunction("loops.js", "rowSum", "#rowSum");
    displayFunction("loops.js", "colSum", "#colSum");
    displayFunction("loops.js", "countZeros", "#countZeros");
    displayFunction("loops.js", "minValue2D", "#min2D");
    displayFunction("loops.js", "maxValue2D", "#max2D");
    displayFunction("loops.js", "doubleMatrix", "#double2D");
    displayFunction("loops.js", "positiveMap", "#positiveMap");
    displayFunction("loops.js", "diagonalSum", "#diagSum");
    displayFunction("loops.js", "transposeMatrix", "#transpose");
}

// Attach click handlers to test buttons
function loadTests() {
    $("#test-matrixSum").click(runMatrixSum);
    $("#test-rowSum").click(runRowSum);
    $("#test-colSum").click(runColSum);
    $("#test-countZeros").click(runCountZeros);
    $("#test-min2D").click(runMin2D);
    $("#test-max2D").click(runMax2D);
    $("#test-double2D").click(runDouble2D);
    $("#test-positiveMap").click(runPositiveMap);
    $("#test-diagSum").click(runDiagSum);
    $("#test-transpose").click(runTranspose);
}

// Generic test runner for 2D arrays
function runTest(studentFn, testMethod, targetId) {
    const $result = $(targetId);
    $result.empty();

    for (let i = 0; i < testMatrices.length; i++) {
        const message = testMethod(studentFn, testMatrices[i]);
        const cssClass = message.startsWith("P") ? "pass" : "fail";
        $result.append(`<p class="${cssClass}">${message}</p>`);
    }
}

// Individual wrappers for each algorithm
function runMatrixSum() {
    runTest(sumMatrix, testMatrix.sum, "#matrixSum-results");
}

function runRowSum() {
    runTest(rowSum, testMatrix.rowSum, "#rowSum-results");
}

function runColSum() {
    runTest(colSum, testMatrix.colSum, "#colSum-results");
}

function runCountZeros() {
    runTest(countZeros, testMatrix.countZeros, "#countZeros-results");
}

function runMin2D() {
    runTest(minValue2D, testMatrix.minValue2D, "#min2D-results");
}

function runMax2D() {
    runTest(maxValue2D, testMatrix.maxValue2D, "#max2D-results");
}

function runDouble2D() {
    runTest(doubleMatrix, testMatrix.doubleMatrix, "#double2D-results");
}

function runPositiveMap() {
    runTest(positiveMap, testMatrix.positiveMap, "#positiveMap-results");
}

function runDiagSum() {
    runTest(diagonalSum, testMatrix.diagonalSum, "#diagSum-results");
}

function runTranspose() {
    runTest(transposeMatrix, testMatrix.transposeMatrix, "#transpose-results");
}
