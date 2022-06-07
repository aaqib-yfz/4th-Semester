let a =window.prompt('Enter First Number');
let b =window.prompt('Enter Second Number');
let c =window.prompt('Enter Third Number');
if(a > b && a> c){
    console.log(`${a} is greater than ${b} and ${c}`)
}
else if( b > a && b >c){
    console.log(`${b} is greater than ${a} and ${c}`)
}
else if( c > a && c >b){
    console.log(`${c} is greater than ${a} and ${b}`)
}