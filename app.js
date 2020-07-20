function loop( clientFunc, maxNumber ){
    let count = 1;
    while( count < maxNumber ){
        clientFunc(count)
        count++;
    }
}

loop( function(i){
    console.log( fizzBuzz(i) )
}, 10 )