// var i;
// for(i=1;i<=15;i++){
//     if(i%2==0)
//     document.write(i + 'is an even number ')
//     else
//     document.write(i + "is an odd number")
// }

// // var j=1;
// // for(j=1)



// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + "FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ "Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ "Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }

// var x;
// var sum=0
// for(x=1;x<=100;x++){
//     if(x%3==0 && x%5==0){
//     sum+=x;
//     }
// }
// console.log(sum);

// let a=3;
// let b=5;
// let c =-1;

// if(a>b && a>c){
//   if(b>c){
//       console.log(a +',' + b +','+c);
//   }
//       else {
//           console.log(a+','+c+','+b)
//       }
//   }
//   else if (b>a && b >c)
// {
//         if (a>c)
//         {
//              console.log(b + ", " + a + ", " +c);
//         }
//         else
//         {
//              console.log(b + ", " + c + ", " +a);
//         }
// }
// else if (c>a && c>b)
// {
//         if (a>b)
//         {
//             console.log(c + ", " + a + ", " +b);
//         }
//         else
//         {
//             console.log(c + ", " + b + ", " +a);
//         }
// }        


// var x ="#"
// var y='';
// var z=10;
// for(var i=0;i<z;i++) {
//     for(var j=0;j<z;j++){
//      y+= ""+ x;
//     }
//     y+="\n"
// }
// console.log(y);

// arr =[1,2,3,4,5];
// for(var i=arr.length;i>=0;i--){
//     console.log(arr[i]);
// }

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
let arr_5=[];
 for(i=0;i<arr_3.length ;i++){
   arr_5[i] = arr_3[i]+arr_4[i];
}
 console.log(arr_5);

// let arr_3   = [4, 6, 7];

// let arr_4    = [8, 1, 9];

// var len= arr_3.length;

// var arr=[];

// for(i=0;i<len;i++){

//     arr[i]=arr_3[i]+arr_4[i];

// }

// console.log(arr);
 

numbers = [2,3,4,5];

sqares=numbers.map(num => num*num);
console.log(sqares);
 console.log(num);