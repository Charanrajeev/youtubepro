function inputHandler(){
    var x = document.getElementById('input').value;
    // https://youtu.be/Z-jAdo4q5L0
    if(x){
    for(let i = 0;i<x.length;i++)
    {
        if(x.charAt(i)=='.')
        {
        var results=x.slice(i+3,x.length)
        // console.log(results)
        }
    }
    var ele = document.createElement('iframe');
    // ele.setAttribute('','560');
 
    ele.setAttribute('src',`https://www.youtube.com/embed/${results}`);
    
   
    var h =document.getElementById('height').value
    var w = document.getElementById('width').value
    ele.setAttribute('width',w)
    ele.setAttribute('height',h)
    var check = document.getElementById('check').checked
    if(check==true)
    {
        ele.setAttribute('allowfullscreen','true')
        
    }
    
    
    var parent = document.getElementById('videodisplay');
    // parent.appendChild(ele)
    parent.insertBefore(ele,parent.children[0])
    document.getElementById('input').value=''
}
    }
