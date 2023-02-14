


$(function() {
    //FadeIn related info of beach in accordance to beach in picture

        $(".divs div:not('#motion1')").hide();
         let $span = $(".info");
        $span.hide();
        $(".motion").on("mouseover", function() 
            {
               
               //console.log($(this).parent())
               $(".info").hide();



               $(this).parent().children("span").fadeIn()

          })
      

  
 


       
    

   
        //add zoom in effect by changing css class on element that's is already defined in css file
    $("img").on("mouseover", function() {
        $(this).addClass("animation");

    })
        //add zoom in effect changing css class on element that's is already defined in css file

    $("img").on("mouseout", function() {
        $(this).removeClass();

    })

   
    //next buttom to allow user to click forward
    $("#button2").on("click", function(){
        if ($(".divs div:visible").next().length != 0)
            $(".divs div:visible").next().show().prev().hide();
        
        else {
            $(".divs div:visible").hide();
            $(".divs div:first").show();
            
        }

       
        

        


    });
    //Previous button to allow user to click backwards 
    $("#previous").on("click", function(){
        if ($(".divs div:visible").prev().length != 0)
            $(".divs div:visible").prev().show().next().hide();
        else {
            $(".divs div:visible").hide();
            $(".divs div:last").show();
        }

       
          
          

       
        
    });

});


