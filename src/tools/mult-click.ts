import type { Page } from "puppeteer";

async function mult_mouse_click (PAGE:Page, selector:string, count_clicks:number) {
    const { x, y } = await PAGE.$eval(selector, $element => $element.getBoundingClientRect());
    if (x && y) {await PAGE.mouse.click(x, y, { clickCount: count_clicks });}
}

export { mult_mouse_click };
