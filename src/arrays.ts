/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const n = numbers.length;
    if (!n) return [];
    if (n == 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[n - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((x: number): number => x * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((buf: string): number => {
        const n = parseInt(buf, 10);
        return isNaN(n) ? 0 : n;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((buf: string): number => {
        if (buf.charAt(0) == "$") buf = buf.substring(1);
        const n = parseInt(buf, 10);
        return isNaN(n) ? 0 : n;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((buf: string): boolean => !buf.endsWith("?"))
        .map((buf: string): string =>
            buf.endsWith("!") ? buf.toUpperCase() : buf,
        );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((buf: string): boolean => buf.length < 4.0).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const n = colors.length;
    if (!n) return true;
    return (
        colors.filter(
            (buf: string): boolean =>
                buf == "red" || buf == "blue" || buf == "green",
        ).length == n
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    const res: [number, string] = addends.reduce(
        (prev: [number, string], x: number): [number, string] => [
            prev[0] + x,
            prev[1] + x + "+",
        ],
        [0, "="],
    );
    const n = res[1].length;
    return res[0] + res[1].substring(0, n - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const result = values.reduce(
        (prev: [number, number[]], k: number): [number, number[]] => {
            let sum = prev[0];
            let arr = prev[1];
            if (k < 0) {
                if (sum == -1) {
                    arr = [...arr, k];
                } else {
                    arr = [...arr, k, sum];
                }
                return [-1, arr];
            } else {
                if (sum == -1) return [-1, [...arr, k]];
                return [sum + k, [...arr, k]];
            }
        },
        [0, []],
    );
    const sum = result[0];
    const arr = result[1];
    if (sum == -1) return arr;
    return [...arr, sum];
}
