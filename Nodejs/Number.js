function sum(...args) {
    let sum=0;

    console.log('No of Arguments Passed:', arguments.length);
        for (let i = 0; i < arguments.length; i++) {
            console.log('arguments[' + i+ '] is:' + arguments[i]);
            sum=sum+args[i]
        }
          console.log(`Sum is ${sum}`)
    
    }
    console.log("sum is" + sum(3, 4));
    console.log("sum is" + sum(3, 4, 5));
    console.log("sum is" + sum(3));