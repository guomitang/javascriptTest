var ele = document.createElement('script'),
    _head = document.getElementsByTagName('head')[0];
     
ele.type='text/javascript';
ele.src = "forGaofei这个文件的路径地址";
_head.appendChild(ele);  
 
 
if (ele.readyState){ //IE 
    ele.onreadystatechange = function(){
        if (ele.readyState == "loaded" || ele.readyState == "complete"){ 
            ele.onreadystatechange = null; 
            doSomething();
        } 
    }; 
} else { //Firefox, Safari, Chrome, Opera 
    ele.onload = function(){
        doSomething();
    }; 
}
 
function doSomething(){
 
   console.log("name");
}
