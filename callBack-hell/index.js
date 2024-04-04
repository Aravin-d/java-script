function task1(callback){
    setTimeout(()=>{
        console.log('task 1');
        callback();
    }, 2000);
    
}

function task2(callback){
    setTimeout(() => {
        console.log('task 2');
        callback();
    }, 1500);
    
}

function task3(callback){
    setTimeout(() => {
        console.log('task 3');
        callback();
    }, 3000);
    
}

function task4(callback){
    setTimeout(() => {
        console.log('task 4');
        callback();
    }, 2500);
    
}


task1(() => {
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log('completed');
            });
        })
    })
});