var x;
var sum=0
for(x=1;x<=100;x++){
    if(x%3==0 && x%5==0){
    sum+=x;
    }
}
console.log(sum);