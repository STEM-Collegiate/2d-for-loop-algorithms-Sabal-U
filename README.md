# Common 2D Array Algorithms

# Common 2D Array For Loop Algorithms
These are 10 of the most common for loop algorithms used when working with two-dimensional arrays, also known as matrices.  
Each algorithm uses **nested for loops** to visit every value in a grid of data.

---

## Matrix Summation
A matrix summation algorithm adds together all the numbers in a 2D array to find their total. It uses a running total that starts at zero and increases each time a new element is added. This is often the first step before finding averages or overall totals.

---

## Row Sum
A row sum algorithm calculates the total of each row in a 2D array separately. It loops through each row and adds the values together, storing each result in a new 1D array. This is useful for comparing totals across categories or rows of data.

---

## Column Sum
A column sum algorithm totals all values in each column of a 2D array. It visits each row, adds the value in the same column position, and stores the result in a new array. This helps summarize data vertically, such as totals by category or time period.

---

## Count Zeros
A counting algorithm scans through the entire 2D array and keeps track of how many values are exactly zero. It uses a counter that starts at zero and increases each time a zero is found. This is often used for detecting empty or uninitialized cells.

---

## Minimum Value
A minimum value algorithm searches through every cell in a matrix to find the smallest number. It begins by assuming that the first element is the smallest, then compares every other value to see if any are lower. This approach is often used in pathfinding, grading, or data analysis.

---

## Maximum Value
A maximum value algorithm looks through every element to find the largest number in a matrix. Like the minimum algorithm, it keeps track of the current highest value and replaces it whenever a larger one is found.

---

## Transformation (Double Values)
A transformation algorithm applies a rule to every element in the 2D array and produces a new array of the same shape. For example, doubling each value or converting measurements from one unit to another. The pattern of using one array as input and returning another as output is common in data processing.

---

## Boolean Filter (Positive Map)
A boolean filter algorithm converts the values in a matrix into `true` or `false` depending on a condition. For example, a positive map replaces each number with `true` if it is greater than zero or `false` if it is not. This helps create masks or logical filters for later operations.

---

## Diagonal Sum
A diagonal sum algorithm adds together all the values that fall along the main diagonal of a square matrix. The diagonal elements are those where the row index and column index are the same. This type of operation is common in matrix mathematics and geometry.

---

## Transpose Matrix
A transpose algorithm flips a 2D array so that its rows become columns and its columns become rows. The value that was at position `[r][c]` moves to position `[c][r]`. Transposing is a key step in linear algebra, data alignment, and grid-based simulations.

---

### Summary
These algorithms demonstrate the most common ways programmers use nested for loops to analyze, transform, and summarize tabular data.  
By completing them, you practice the core logic patterns used in nearly all matrix-based programming: **accumulation**, **comparison**, **filtering**, and **transformation**.
