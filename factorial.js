function calcFact( num )
{
var i;
var fact = 1;
for( i = num; i >= 1; i-- )
{
fact = fact * i;
}
return fact;
}
console.log(calcFact(5))