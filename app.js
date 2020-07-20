function fizzBuzz(number){
    if( number % 3 === 0 && number % 5 === 0 ){
        return "FizzBuzz"
    }else if ( number % 3 === 0 ){
        return "Fizz"
    }else if( number % 5 === 0 ){
        return "Buzz"
    }else{
        return number;
    }
}


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
    
    // setTimeout(() => {
    //     func()
    // }, time);

    setInterval(() => {
        func()
    }, time);
}

asyncLoop( function(i){
    console.log( fizzBuzz(i) )
}, 5, 2000)