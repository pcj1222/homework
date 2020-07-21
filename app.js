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
    setInterval(() => {
        func()
    }, time);
}

asyncLoop( function(i){
    console.log( fizzBuzz(i) )
}, 5, 2000)


// 다시 생각하고 한 버전
function asyncLoop( clientFunc, maxNumber, time ){
    for(let i=1; i<=maxNumber;i++){
        setTimeout(() => {
            clientFunc(i);
        }, time * i);
    }
}

asyncLoop( function(i){
    console.log( fizzBuzz(i) )
}, 5, 1000)