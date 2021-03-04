function compute()
{
    principal = document.getElementById("principal").value;
    //Validation
    if(principal<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus(); 
        return;
    }
    rate=document.getElementById("rate").value;
    years=document.getElementById("years").value;

    //Interest calculation
    let interest=(principal*years*rate)/100;

    result=document.getElementById('result'); //Result span
    let curryear=2021+Number(years);

    //Append result
    result.innerHTML=`If you deposit <mark>${principal}</mark>, <br>
    at an interest rate of <mark>${rate}%.</mark> <br>
    You will receive an amount of <mark> ${interest}, </mark> <br>
    in the year <mark>${curryear}</mark>`;
}

    //Dynamic Range slider
    const rangespan=document.getElementById('slider');
    const slider=document.getElementById("rate");
    slider.addEventListener('input',()=>{
        rangespan.innerHTML=slider.value;
    });
