//promises

function task1(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task1 completed');
        }, 2500);
    });
}

function task2(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task2 completed');
        }, 1000);
    });
}

function task3(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('task3 completed');
        }, 3000);
    });
}

task1().then(value => {
    console.log(value);
    return task2();
}).then(value => {
    console.log(value);
    return task3();
}).then(value => {
    console.log(value);
    console.log('completed');
});
