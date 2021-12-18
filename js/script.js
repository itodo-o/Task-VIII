// write a function that takes the input string and reverses it


 
// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase

let text='Hello World'; 
for(i=0; i<text.length;i++){
    text.charAt(i)
    // if(text.charAt())}
   


//convert array of numbers from farenheit to celcius
var arguments = [23, 32, 41,50,59]; 
//(x− 32) * 5/9
// function toCelcius(array){

// }

const celciusMap = arguments.map(argument => (argument-32) * (5/9)); 
console.log(celciusMap); 

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)

var argumentss = [20,30,50,80,90,100]

const passOrFail = argumentss.map(arguments => arguments>=75 ?true : false); 
console.log(passOrFail); 

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']

const cardinalNumber = [2,3,4,5,6]; 
const germanNumbers=['zwei', 'drei', 'vier', 'funf','sechs']; 


for(let i = 0; i<cardinalNumber.length; i++){
   console.log (`${cardinalNumber[i]} - ${germanNumbers[i]}`); 
}

// write code that returns an array of ONLY prime numbers that are in the array numbers
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

const numNumbers = numbers.filter(function(number){
    if(number = 1){
        console.log('')
    }

        let tmp; 
        let sol; 
        for(let i=0; i<numbers.length; i++){
            number[i]=tmp; 
            for(let j = 0; j<numbers.length;j++){
                sol= tmp % j; 
                if (!sol ==0 ){
                    console.log(number[j])
                }
                
        
            }
            


        }

    
})

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"
// const string1="CSC225 Rules";
// const string2="I LOVE JAVASCRIPT";
// const string3= string1+' '+string2; 

// for(let i=1; i<100; i++){
//     if(i %3 ==0 && i%5 ==0){
//         console.log(string3)
//     }
//    else if(i % 3==0){
//         console.log(string1)
//     }

//     else if(i % 5 ==0){
//         console.log(string2)
//     }

//     else{
//         console.log(i); 
//     }
// }; 
}
