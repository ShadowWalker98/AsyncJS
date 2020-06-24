function slowEcho(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, 2000);
    })
}