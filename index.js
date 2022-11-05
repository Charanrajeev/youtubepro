function inputHandler(){
    var x = document.getElementById('input').value;
    // https://youtu.be/Z-jAdo4q5L0
    for(let i = 0;i<x.length;i++)
    {
        if(x.charAt(i)=='.')
        {
        var results=x.slice(i+3,x.length)
        console.log(results)
        }
    }
    var ele = document.createElement('iframe');
    // ele.setAttribute('','560');
 
    ele.setAttribute('src',`https://www.youtube.com/embed/${results}`);
    console.log(ele)
    var parent = document.getElementById('videodisplay');
    parent.appendChild(ele)
    document.getElementById('input').value=''
    console.log(parent)
    }