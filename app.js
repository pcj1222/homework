//  loop 함수 구현
function loop( clientFunc, maxNumber ){
    let count = 1;
    while(count <= maxNumber){
        clientFunc(count)
        count++;
    }
}
loop(function(i){
    console.log( fizzBuzz(i) )
}, 10)


// 비동기 asyncLoop 함수 구현
function asyncLoop( clientFunc, maxNumber, time ){
    function func(){
        let count = 1;
        while( count <= maxNumber ){
            clientFunc(count)
            count++;
        }
    }
    
    setTimeout(() => {
        func()
    }, time);

    // setInterval(() => {
    //     func()
    // }, time);
}

asyncLoop( function(i){
    console.log( fizzBuzz(i) )
}, 5, 2000)