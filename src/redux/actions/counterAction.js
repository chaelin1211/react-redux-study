export const INCREMENT = "INCREMENT";
export const SUBTRACT = "SUBTRACT";
export const RESET = "RESET";

export function increment() {
    return { type: INCREMENT };
}

export function subtract() {
    return { type: SUBTRACT };
}

export function reset() {
    return { type: RESET };
}
