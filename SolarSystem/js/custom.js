$(document).ready(function(){

      $("#title").on('click',function() {
          $("#nav").fadeIn(1000);
        });
   
   //MERCURY//  
    $(document).on('mouseover', "#smallmercury", function(){
        console.log($("#factsofmercury"))
        ;

        $("#factsofmercury").show();
        })
    
        $(document).on('mouseleave', "#smallmercury", function(){
        console.log($("#factsofmercury"))
        ;
        $("#factsofmercury").hide();

        $(document).on('mouseover', "#smallmercury", function() {
          console.log($("#factsofmercury"))
          ;

          $("#mercury").css("border", "1px solid #3B3E40");
        })
      })

    //VENUS//
    $(document).on('mouseover', "#smallvenus", function(){
        console.log($("#factsofvenus"))
        ;
        $("#factsofvenus").show();
      })
      
        $(document).on('mouseleave', "#smallvenus", function(){
        console.log($("#factsofvenus"))
        ;
        $("#factsofvenus").hide();
      })

    //EARTH//
     $(document).on('mouseover', "#smallearth", function(){
        console.log($("#factsofearth"))
        ;
        $("#factsofearth").show();
      })
      
        $(document).on('mouseleave', "#smallearth", function(){
        console.log($("#factsofearth"))
        ;
        $("#factsofearth").hide();
      })

    //MARS//
     $(document).on('mouseover', "#smallmars", function(){
        console.log($("#factsofmars"))
        ;
        $("#factsofmars").show();
      })
      
        $(document).on('mouseleave', "#smallmars", function(){
        console.log($("#factsofmars"))
        ;
        $("#factsofmars").hide();
      })

   //JUPITER//
     $(document).on('mouseover', "#smalljupiter", function(){
        console.log($("#factsofjupiter"))
        ;
        $("#factsofjupiter").show();
      })
      
        $(document).on('mouseleave', "#smalljupiter", function(){
        console.log($("#factsofjupiter"))
        ;
        $("#factsofjupiter").hide();
      })

    //SATURN//
     $(document).on('mouseover', "#smallsaturn", function(){
        console.log($("#factsofsaturn"))
        ;
        $("#factsofsaturn").show();
      })
      
        $(document).on('mouseleave', "#smallsaturn", function(){
        console.log($("#factsofsaturn"))
        ;
        $("#factsofsaturn").hide();
      })


    //URANUS//
     $(document).on('mouseover', "#smalluranus", function(){
        console.log($("#factsofuranus"))
        ;
        $("#factsofuranus").show();
      })
      
        $(document).on('mouseleave', "#smalluranus", function(){
        console.log($("#factsofuranus"))
        ;
        $("#factsofuranus").hide();
      })


    //NEPTUNE//
     $(document).on('mouseover', "#smallneptune", function(){
        console.log($("#factsofneptune"))
        ;
        $("#factsofneptune").show();
      })
      
        $(document).on('mouseleave', "#smallneptune", function(){
        console.log($("#factsofneptune"))
        ;
        $("#factsofneptune").hide();
      })


    //PLUTO//    
      $(document).on('mouseover', "#smallpluto", function(){
        console.log($("#factsofpluto"))
        ;
        $("#factsofpluto").show();
      })

      $(document).on('mouseleave', "#smallpluto", function(){
        console.log($("#factsofpluto"))
        ;
        $("#factsofpluto").hide();
      })


      
     

  //$("#sunpicture").toggle(200).slideToggle(3000);//

   $("#button").on('click',function() {
          $("#sundiv").fadeIn(5000);
        })

  $(document).on('click','#sun', function(e) {
      e.preventDefault();
      $('#main').fadeIn(2000);

      $('#mercurydiv').show(function(){
        $('#venusdiv').show(function(){
          $('#earthdiv').show(function(){
            $('#marsdiv').show(function(){
               $('#jupiterdiv').show(function(){
                  $('#saturndiv').show(function(){
                    $('#uranusdiv').show(function(){
                      $('#neptunediv').show(function(){
                          $('#plutodiv').show(function(){

                      });
                    });
                  });
                });
              });
            });
          });
        });
      });


      /*$('#mercurydiv').show(function(){
      $(this).click(function(){

        $('#venusdiv').show(function(){
        $(this).click(function(){
            
          $('#earthdiv').show(function(){
          $(this).click(function(){

            $('#marsdiv').show(function(){
            $(this).click(function(){

              $('#jupiterdiv').show(function(){
              $(this).click(function(){
              
                $('#saturndiv').show(function(){
                $(this).click(function(){

                  $('#uranusdiv').show(function(){
                  $(this).click(function(){

                    $('#neptunediv').show(function(){
                    $(this).click(function(){

                      $('#plutodiv').show(function(){
                      $(this).click(function(){

      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      })
      });*/

    });
   





});




  