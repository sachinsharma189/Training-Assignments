let circle = (r)=>{
    return 3.14*r*r;
}
let rectangle=(length,breadth)=>{
    return length*breadth;
}
let cylinder= (radius,height)=>{
    return (2*3.14*radius*height)+(2*3.14*radius*radius);
}   


document.getElementById('circle').innerHTML=circle(5);
document.getElementById('rectangle').innerHTML=rectangle(3,4);
document.getElementById('cylinder').innerHTML=cylinder(3,5);