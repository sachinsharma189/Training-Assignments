let list=document.querySelectorAll("li");
var arr1=[];
for(let i=0;i<list.length;i++)
{
    arr1.push(list[i].innerText);
}
console.log(arr1);



var arr2=[];
for(let i =0;i<arr1.length;i++)
{
    if(arr1[i].includes('Flexbox'))
    {
        arr2.push(arr1[i]);
    }
}

console.log(arr2);



var arr3=[];
// let list=container.querySelectorAll("li ");
for(let i=0;i<list.length;i++)
{
    arr3.push(list[i]);
}
for(let i=0;i<arr3.length;i++)
{
 console.log(arr3[i].getAttribute('data-time'));
}




for(let i=0;i<arr3.length;i++)
{
 console.log(arr3[i].getAttribute('data-time').split(':')[1]);
}
for(let i=0;i<arr3.length;i++)
{
 let min=(arr3[i].getAttribute('data-time').split(':')[0]*60);
 let sec=(arr3[i].getAttribute('data-time').split(':')[1]);
 let total=Number(min)+Number(sec);
 console.log(total);
}
