let array = [1,2,3,2,1,4,5,4,1];
let set = new Set(array);
let arr = Array.from(set);
document.getElementById('uniquearray').innerHTML=arr;