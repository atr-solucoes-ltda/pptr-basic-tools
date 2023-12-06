async function delay(milliseconds:number):Promise<unknown> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

export { delay };
