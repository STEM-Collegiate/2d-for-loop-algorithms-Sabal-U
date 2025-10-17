// 3x3 Arrays for testing
const testMatrices = [
    [   // ascending numbers
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ],
    [   // all even numbers
        [-2, 4, -6],
        [8, -10, 12],
        [14, -16, 18]
    ],
    [   // all odd numbers
        [1, 3, 5],
        [-7, -9, 11],
        [13, 15, -17]
    ],
    [   // digits of pi pattern
        [3, -1, 4],
        [1, 5, -9],
        [2, 6, -5]
    ],
    [   // includes undefined values
        [0, 1, undefined],
        [13, 17, 19],
        [5, undefined, 8]
    ],
    [   // includes null values
        [0, 1, null],
        [13, null, 7],
        [9, 2, null]
    ],
    [   // identity matrix
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ],
    [   // mixed large integers
        [500, 100, 200],
        [300, 1000, 400],
        [700, 200, 600]
    ],
    [   // negative to positive range
        [-3, -2, -1],
        [0, 1, 2],
        [3, 4, 5]
    ],
    [   // uniform values
        [10, 10, 10],
        [10, 10, 10],
        [10, 10, 10]
    ]
];




// Example completed function
function sumMatrix(matrix) {
    let total = 0;
    for (const row of matrix) {
        for (const val of row) {
            total += val;
        }
    }
    console.log("The sum total is:", total);
    return total;
}

function rowSum(matrix) {
    const sums = [];
    if (!Array.isArray(matrix)) return sums;
    for (const row of matrix) {
        if (!Array.isArray(row)) {
            sums.push(0);
            continue;
        }
        let total = 0;
        let invalid = false;
        for (const val of row) {
            if (val === null) {
                
                continue;
            }
            if (Number.isFinite(val)) {
                total += val;
            } else {
                
                invalid = true;
                break;
            }
        }
        sums.push(invalid ? NaN : total);
    }
    console.log("Row sums:", sums);
    return sums;
}


function colSum(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) return [];
    const cols = Math.max(...matrix.map(row => Array.isArray(row) ? row.length : 0));
    const sums = new Array(cols).fill(0);
    const invalid = new Array(cols).fill(false);
    for (const row of matrix) {
        for (let c = 0; c < cols; c++) {
            const val = Array.isArray(row) ? row[c] : undefined;
            if (val === null) {
               
                continue;
            } else if (Number.isFinite(val)) {
                sums[c] += val;
            } else {
            
                invalid[c] = true;
            }
        }
    }
    for (let c = 0; c < cols; c++) {
        if (invalid[c]) sums[c] = NaN;
    }
    console.log("Column sums:", sums);
    return sums;

}

function countZeros(matrix) {
    let count = 0;
    if (!Array.isArray(matrix)) return 0;
    for (const row of matrix) {
        if (!Array.isArray(row)) continue;
        for (const val of row) {
            if (val === 0) count++;
        }
    }
    console.log("Zero count:", count);
    return count;
}


function minValue2D(matrix) {
    if (!Array.isArray(matrix)) return undefined;
    let min = undefined;
    for (const row of matrix) {
        if (!Array.isArray(row)) continue;
        for (const val of row) {
            if (!Number.isFinite(val)) continue;
            if (min === undefined || val < min) min = val;
        }
    }
    console.log("Min value:", min);
    return min;
}

function maxValue2D(matrix) {
    if (!Array.isArray(matrix)) return undefined;
    let max = undefined;
    for (const row of matrix) {
        if (!Array.isArray(row)) continue;
        for (const val of row) {
            if (!Number.isFinite(val)) continue;
            if (max === undefined || val > max) max = val;
        }
    }
    console.log("Max value:", max);
    return max;
}

function doubleMatrix(matrix) {
    if (!Array.isArray(matrix)) return [];
    return matrix.map(row => {
        if (!Array.isArray(row)) return [];
        return row.map(val => {
            if (val === undefined) return null;
            if (val === null) return 0;               
            if (Number.isFinite(val)) return val * 2; 
            return val;                               
        });
    });
}


function positiveMap(matrix) {
    if (!Array.isArray(matrix)) return [];
    const result = [];
    for (let r = 0; r < matrix.length; r++) {
        const row = matrix[r];
        if (!Array.isArray(row)) {
            result.push([]);
            continue;
        }
        const newRow = new Array(row.length);
        for (let c = 0; c < row.length; c++) {
            const val = row[c];
            if (Number.isFinite(val)) {
                newRow[c] = val > 0 ? true : false;
            } else {
                newRow[c] = val;
            }

            if (val === null || val === undefined) {
                newRow[c] = false; 
            }
        }
        result.push(newRow);
    }
    console.log("Positive map matrix:", result);
    return result;
}

function diagonalSum(matrix) {
    let total = 0;
    if (!Array.isArray(matrix)) return 0;
    const size = Math.min(...matrix.map(row => Array.isArray(row) ? row.length : 0), matrix.length);
    for (let i = 0; i < size; i++) {
        const val = Array.isArray(matrix[i]) ? matrix[i][i] : undefined;
        if (Number.isFinite(val)) total += val;
    }
    console.log("Diagonal sum:", total);
    return total;
}

function transposeMatrix(matrix) {
    if (!Array.isArray(matrix)) return [];
    const rows = matrix.length;
    const cols = Math.max(...matrix.map(row => Array.isArray(row) ? row.length : 0));
    const result = [];
    for (let c = 0; c < cols; c++) {
        const newRow = new Array(rows);
        for (let r = 0; r < rows; r++) {
            const val = Array.isArray(matrix[r]) ? matrix[r][c] : undefined;
            newRow[r] = val;
        }
        result.push(newRow);
    }
    console.log("Transposed matrix:", result);
    return result;
}