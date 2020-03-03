var num1=+prompt("Enter your Math marks");
var num2=+prompt("Enter your Physics marks");
var num3=+prompt("Enter your English marks");
var num4=+prompt("Enter your Urdu marks");
var num5=+prompt("Enter your Islamiat marks");
var Obtainmarks=num1+num2+num3+num4+num5;
var per=Obtainmarks/425*100;

console.log("Math marks:" + num1);
console.log("Physics marks:" + num2);
console.log("English marks:" + num3);
console.log("Urdu marks:" + num4);
console.log("Islamiat marks:" + num5);
console.log("Obtain Marks:"+ Obtainmarks);
console.log("percentage:" + per + "%");

if(per>=80)
{
   console.log("Grade:" + "A+");
}
else if(per>=70 && per<80)
{
    console.log("Grade:" + "A");
}
else if(per>=60 && per<70)
{
    console.log("Grade:" + "B");
}
else if(per>=50 && per<60)
{
    console.log("Grade:" + "C");
}
else if(per<50)
{
    console.log("Grade:" + "Fail");
}
else
{
    console.log("Invalid Grade");
}