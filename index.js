alert("hello");
var array=["#ff9595","#80bdab","#0e9aa7","#f0a500","#f54291","#d92027","blue","yellow","purple"];

var i=0;

document.querySelector("button").addEventListener("click",function(){
// var num=Math.floor(Math.random()*array.length);
// console.log(array[num]);
// document.querySelector("body").style.backgroundColor=array[num];
// i<array.length? i++:0;
// (i<array.length){



  if(array[i]===array[array.length]){
    i=0;
}
else{
  document.querySelector("body").style.backgroundColor=array[i];
  i++;

}

});
