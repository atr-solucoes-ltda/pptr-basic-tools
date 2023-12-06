import type {Page, KeyInput} from "puppeteer";

async function mult_key_press (PAGE:Page, key:KeyInput, count_press:number) {
    for(let count = 0; count < count_press; count++){
        await PAGE.keyboard.press(key);
    }
}

export { mult_key_press };
