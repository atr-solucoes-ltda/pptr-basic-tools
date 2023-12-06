async function mult_mouse_click(PAGE, selector, count_clicks) {
    const { x, y } = await PAGE.$eval(selector, $element => $element.getBoundingClientRect());
    if (x && y) {
        await PAGE.mouse.click(x, y, { clickCount: count_clicks });
    }
}
export { mult_mouse_click };
