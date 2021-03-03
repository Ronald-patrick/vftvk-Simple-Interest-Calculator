function compute()
{
    p = document.getElementById("principal").value;
    r=document.getElementById("rate").value;
    y=document.getElementById("years").value;
    res=document.getElementById('result');
    let interest=(p*r*y)/100;
    console.log(res);
    res.innerHTML=interest;
}
        