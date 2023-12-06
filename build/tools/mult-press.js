async function mult_key_press(PAGE, key, count_press) {
    for (let count = 0; count < count_press; count++) {
        await PAGE.keyboard.press(key);
    }
}
export { mult_key_press };
