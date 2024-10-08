// even&odd

let num=4;
if(num%2==0)
{
    console.log("it is even num");
}
else{
    console.log("it is odd num");
}



//  temperature
let celsius=50;
if(celsius<0)
{
    console.log("temperatre is below freezing");
}
else if(celsius>=0 && celsius<20)
{
    console.log("temperature is cool");
}
else 
{
    console.log("temperature is warm");
}

// score
let score=90;
if(score<0 || score>100)
{
    console.log("enter valide score");
}
else if(score>=90)
    {
        console.log("your grade is A");
    }
else if(score>=80)
    {
        console.log("your grade is B");
    }
else if(score>=70)
    {
        console.log("your grade is C");
    }
else if(score>=60)
    {
        console.log("your grade is D");
    }
else
{
    console.log("your grade is E");

}

let age=24;
if(age<0)
    {
        console.log("enter valide age");
    }
    else if(age<=12)
        {
            console.log("you are child");
        }
    else if(age>=13 && age<=19)
        {
            console.log("you are teenager");
        }
    else if(age>=20 && age<=64)
        {
            console.log("you are adult");
        }
    else
    {
        console.log("you are senior");
    
    }

    // discount
    let amount=500;
    if(amount>100)
    {
        console.log("discount applied");
    }
    else
    {
        console.log("no discount");
    }