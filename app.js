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

// normal way of creating a promise
// let p = new Promise((resolve, reject) => {
//     resolve('Hello');
// });

// p.then((value) => {
//     console.log(value);
// });
//  // does the same thing as above but in one line
// let pp = Promise.resolve('Hello');

// pp.then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// });

document.getElementById("btn2")
.addEventListener('click', () => {
    Promise.all([
        slowEcho('I waited 1 second', 1000),
        slowEcho('I waited 2 seconds', 2000),
        slowEcho('I waited 3 seconds', 3000)
    ]).then((value) => {
        console.log(value)
    }).catch((err) => {
        console.log(err)
    });
});

function logMessage(message) {
    console.log(message);
}

//logMessage('Hello');
// setTimeout(() => {
//     logMessage('Hello 2!')
// }, 2000);

function getWords() {
    logMessage('First');
    setTimeout(() => {
        logMessage('Second')
    }, 1000);
    setTimeout(() => {
        logMessage('Third')
    }, 2000);
    setTimeout(() => {
        logMessage('Fourth')
    }, 3000);
}

//getWords()

function done() {
    console.log('done');
}

function countDown (num, callback)  {
    console.log(num);
    setTimeout(() => {
        //console.log('waiting for a second');
        if(num == 1) {
            callback();
        } else {
            countDown(num - 1, callback)
        }
    }, 1000)
    
}
countDown(3, done);