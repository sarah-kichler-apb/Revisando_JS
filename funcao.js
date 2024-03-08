// //Função não parametrizada
// const n1 = 10;
// const n2 = 5;

// function soma() {
//     return n1+n2;
// }
// console.log(soma());


// //Função parametrizada
// function somaDiNovo(n3=0,n4=0) {
//     return n3 + n4;
// }
// console.log(somaDiNovo(10,20));


// //Função anônima 
// const f = function(v1,v2){
//     return v1-v2;
// }
// console.log(f(10,15));

// //Vetores
// let molieres = ['Auzira', 'Bétih', 'Sesílía'];
// console.log(molieres);

// molieres.map((el)=>{
//     console.log(el);
// });


//Função construtor anônima
const f1 = new Function('v3', 'v4', 'v5', 'return v3*v4')
    console.log(f1(5,9))

//Sem arrow function
const soma1 = function(v5,v6){
    return v5/v6;
}

console.log(soma1(30,3));

//Função com arrow function
const soma2 = (v7,v8)=>{
    return v7*v8;
}
console.log(soma2(7,8));