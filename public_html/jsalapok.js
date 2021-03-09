
  function sziaNeved(){
     var neved = document.getElementById("nev").value;
     console.log(neved);
     alert("Szia "+neved);
  }
  function jelSzamol(){
        var a =Number(document.getElementById("a").value);
        var b =Number(document.getElementById("b").value);
        var muveletiJel=document.getElementById("jel").value;
        
        if(muveletiJel==="+"){
            alert(a+b);
        }
        else if(muveletiJel==="-")
        {
            alert(a-b);
            
        }
        else if(muveletiJel==="*")
        {
            alert(a*b);
            
        }
        else if(muveletiJel==="/")
        {
            alert(a/b);
            
        }
        else{
            alert("Adj meg rendes műveleti jelet\n + - * /");
        }
        
  }

