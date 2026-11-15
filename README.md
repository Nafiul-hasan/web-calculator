# Overview

This project is a basic web calculator built with HTML, CSS, and
JavaScript. The HTML provides the calculator buttons and display
elements, CSS controls the appearance, and JavaScript manages input,
stores the values, performs calculations, and updates the display.

# How the logic works

## 1. State variables

The script uses a small set of variables to keep track of the
calculator's current state:

-   `v1`: the first operand.
-   `v2`: the second operand.
-   `R`: the result of the calculation.
-   `opr`: the selected operator (`+`, `-`, `x`, `/`, or `%`).
-   `numbr`: a string used to build the number as digit buttons are
    pressed.

Initially, the operands and result are set to `0`, while `opr` is `null`
to indicate that no operator has been selected.

## 2. Entering numbers --- `num_get(btn)`

When a number button is clicked, `num_get()` reads its text using
`btn.textContent` and appends it to `numbr`.

-   If `opr` is `null`, the entered digits are stored in `v1`.
-   If an operator has been selected, the digits are stored in `v2`.

The function then updates the calculator's main display (`#num`) with
the value being entered.

## 3. Selecting an operator --- `operator(btn)`

When an operator button is clicked, `operator()`:

1.  Stores the button's text in `opr`.
2.  Clears `numbr` so the next digits start a new number.
3.  Displays the selected operator in `#op`.

This separates the first operand from the second operand during input.

## 4. Performing a calculation --- `calc()`

When the calculation function runs, it converts `v1` and `v2` to
JavaScript numbers with `Number()`. A `switch` statement checks the
selected operator and performs the corresponding operation:

   Operator  Operation
  ---------- ----------------------------
     `+`     Adds `v1` and `v2`
     `-`     Subtracts `v2` from `v1`
     `x`     Multiplies `v1` by `v2`
     `/`     Divides `v1` by `v2`
     `%`     Calculates `100 * v1 / v2`

The result is shown in `#num`. The result is then copied into `v1`,
while `v2`, `opr`, and `numbr` are reset. This allows the result to be
used as the first operand in a subsequent calculation.

## 5. Clearing the calculator --- `clr()`

The clear function resets the operands, result, operator, and input
string to their initial values. It also resets the main display and
clears the operator display.

## 6. Deleting the last digit --- `backspace()`

The backspace function removes the final character from the value
currently being entered.

-   If no operator is selected and `v2` is `0`, it edits `v1`.
-   Otherwise, it edits `v2`.

It uses `length` to identify the final character and `slice()` to create
the shortened value, then updates `numbr` and the display.

## 7. Debugging --- `debug()`

The `debug()` function creates a text summary of the current operator,
both operands, result, and input string. It writes this information to
the element with the ID `debug`, making it easier to inspect the
calculator's internal state while testing.

# Example input flow

For the calculation `12 + 8 =`:

1.  Pressing `1` and `2` builds `numbr` as `"12"` and stores it in `v1`.
2.  Pressing `+` stores `"+"` in `opr` and clears `numbr`.
3.  Pressing `8` stores `"8"` in `v2`.
4.  Calling `calc()` converts the operands to numbers and calculates
    `12 + 8`.
5.  The display shows `20`, and `v1` is updated to `20` for a possible
    next calculation.

# Current implementation notes

This is a practice implementation of the calculator's core input and
arithmetic flow. A few edge cases are not handled in the current code:

-   Division by zero is not checked.
-   The `%` button currently calculates `100 * v1 / v2` (a percentage
    ratio), rather than JavaScript's remainder operation.
-   `backspace()` uses string methods on the operands. Since the
    operands can become numbers, deleting digits may not work reliably
    in every state.
-   The code does not currently validate incomplete input or prevent an
    operator from being selected before a second operand is entered.

These are useful areas to improve as the project develops.
