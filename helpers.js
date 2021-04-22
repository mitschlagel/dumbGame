/**
 * Generates random number between 1 and 28
 */
export const randomInt = (min = 1, max = 28) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomColor = () => {
    let result = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return result;

};


