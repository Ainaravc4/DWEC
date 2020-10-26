/** Write a function that can take in any number of arguments,
 *  and returns the sum of all of the arguments.*/

/*function suma(...numerosArray){
    let totalFun=0;
        for(numero of numerosArray)
            totalFun += numero;
        return totalFun;
    }
    var total=suma(3,5,4,6);
    console.log(total);*/



/**Write a function called addOnlyNums that can take in any number
 *  of arguments (including numbers or strings), and returns the sum of only the numbers. */

 /*function addOnlyNums(...numerosArray){
    let totalFun=0;
        for(numero of numerosArray)
            if(typeof numero === "number") 
                totalFun += numero;
            return totalFun;    
    
    }
    var total=addOnlyNums(3,"HOLA",4,6);
    console.log(total);*/


/*Write a function called combineTwoArrays that takes in two arrays 
as arguments, and returns a single array that combines both 
(using the spread operator).*/

/*function combineTwoArrays (n1,n2){
    return [...n1,n2];
}
var arr1=[1,2,3];
var arr2=[4,5,6];
var todos=combineTwoArrays(...arr1,...arr2);
console.log(todos);*/


/*Write a function called sumEveryOther that takes in any amount 
of arguments, and returns the sum of every other argument.*/

    //1º FORMA DE HACERLO

    /*function sumEveryOther(...numerosArray){
        let totalFun=0;
            for(numero in numerosArray)
                if(numero%2==0)
                    totalFun += numerosArray[numero];
            return totalFun;
        }
        var total=sumEveryOther(10, 2, 11);
        console.log(total);*/

        // 2º FORMA DE HACERLO

       /* function sumEveryOther(...numerosArray){
            let totalFun=0;
                for(let numero=0;numero<numerosArray.length;numero+=2)
                    totalFun += numerosArray[numero];
                return totalFun;
            }
            var total=sumEveryOther(5, 6, 3, 4, 1);
            console.log(total);*/

/**Write a function called onlyUniques that can take in
 *  any number of arguments, and returns an array of only the unique arguments. */

    /*function onlyUniques(...valores){
    var arr=[];
        for (numero of valores) {
            if (!arr.includes(numero)) {
                arr.push(numero);
            }        
        }
    return arr;
    }
    var total=onlyUniques('cat', 'cat', 'dog', 'pig');
    console.log(total);*/

   

/**Write a function called combineAllArrays that takes in any number of arrays 
 * as arguments and combines all of them into one array. */

/*function combineAllArrays(...valores){
    var arr=[];
        for (numero of valores) {
            arr.push(numero);
        }        
    return arr;
    }

    var todos=combineAllArrays([5,6,9,7],[8,9,25],[90,56,35]);
    console.log(todos);*/



/**Write a function called squareAndSum that takes in any number of arguments,
 *  squares them, then sums all of the squares. */

/* function sumAndSquare(...valores){
    var n;
    var total=0;
        for (numero of valores){
            n=Math.pow(numero,2);
            total= total+n;
        }
    return total;
    }
console.log(sumAndSquare(1,2));*/