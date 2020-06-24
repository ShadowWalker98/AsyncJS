function slowEcho(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if( random % 2 == 0){
                resolve(message);
            } else {
                let err = new Error('Something odd happened');
                reject(err);
            }
        }, delay);

    });
}

document.getElementById('btn')
.addEventListener('click', () => {
    slowEcho("Hello World!", 1000)
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log("An error occurred");
        console.log(e)
    });
});