$(document).ready(function (){

//取后台弹幕
var message={"content":["123","456","789"]};
texts = message.content;
var j=0;
var id=setInterval(function(){
    if(j==texts.length)
        clearInterval(id);
        else{
            pushtext1(j,texts[j]);
            j++;
        }
},1000)
});

function messaction(ppp) {  
       ppp.addClass("changmessage");  
   }  
  
   function messstop(ppp) {  
       ppp.hide();  
   }  
   function pushtext1(id_,message){    
 if(message.length>0){  
     $("#fontdiv").append("<pre id='"+id_+"'" + "class='oldp' style='width: "+message.length+"em'>"+message+"</pre>");  
     var ppp= $("pre").last();  
     $('#'+id_).css('margin-top',parseInt(Math.random()*560,10)+1);
     setTimeout(function(){  
         messaction(ppp);  
     },100);  
     setTimeout(function(){  
         messstop(ppp);  
     },5500);  
 }  
};  
  
   function pushtext(){  
     var  message=$("#message").val();  
    if(message.length>0){  
        $("#fontdiv").append("<pre class='oldp' style='width: "+message.length+"em'>"+message+"</pre>");  
        $("#message").val("");  
        //存储至后台
        var ppp= $("pre").last();  
        setTimeout(function(){  
            messaction(ppp);  
        },100);   
        setTimeout(function(){  
            messstop(ppp);  
        },5500);  
    }  
   };  
  
   document.onkeydown=function(event){  
       var e = event || window.event || arguments.callee.caller.arguments[0];  
       if(e&&e.keyCode==13){  
           //Ҫ��������  
        e.preventDefault();  
        var messvalue=$("#message").val();  
        if(messvalue.length>0){  
            pushtext();  
        }  
       }  
   }; 