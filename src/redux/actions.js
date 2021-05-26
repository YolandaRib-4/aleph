export const increment = (idx) => {
    return {
        type: 'increment',
        payload: idx
    };
};

export const decrement = (idx) => {
    return {
        type: 'decrement',
        payload: idx
    };
}


