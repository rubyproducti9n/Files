//-----------------------------------------------------------------------------------------------------------------------------------------

//Movies

window.setInterval(function() {

  var current = new Date();
  var expiry = new Date("January 06, 2021 23:05:30")
  
  if (current.getTime() > expiry.getTime()) {
    $('.play-dis').hide();
  
  } else if (current.getTime() < expiry.getTime()) {
    $('.play-dis').show();
  }
  
  }, 0);
window.setInterval(function() {

  var current = new Date();
  var expiry = new Date("January 06, 2021 23:05:30")
  
  if (current.getTime() < expiry.getTime()) {
    $('.play').hide();
  
  } else if (current.getTime() > expiry.getTime()) {
    $('.play').show();
  }
  
  }, 0);

//Removes pro badge---------------------------------------------------------------------------------------------------------------------------
window.setInterval(function() {

  var current = new Date();
  var expiry = new Date("January 08, 2021 23:21:50")
  //To add pro change the > to < for both cconditions.
  if (current.getTime() > expiry.getTime()) {
    $('.remove-pro').hide();
    
  } else if (current.getTime() < expiry.getTime()) {
    $('.remove-pro').show();
  }
  
  }, 0);
  

  //Adds free badge
window.setInterval(function() {

  var current = new Date();
  var expiry = new Date("January 08, 2021 23:21:50")
  //To add pro change the > to < for both cconditions.
  if (current.getTime() < expiry.getTime()) {
    $('.add-free').hide();
  
  } else if (current.getTime() > expiry.getTime()) {
    $('.add-free').show();
  }
  
  }, 0);

//-----------------------------------------------------------------
//Removes the div itself
  window.setInterval(function() {

    var current = new Date();
    var expiry = new Date("January 08, 2021 23:22:00")
    
    if (current.getTime() > expiry.getTime()) {
      $('.remove').hide();
      
    } else if (current.getTime() < expiry.getTime()) {
      $('.remove').show();
    }
    
    }, 0);
    //--------------------------------------------------------------
    //Adds pro badge
  window.setInterval(function() {
  
    var current = new Date();
    var expiry = new Date("January 08, 2021 23:15:50")
    
    if (current.getTime() < expiry.getTime()) {
      $('.').hide();
    
    } else if (current.getTime() > expiry.getTime()) {
      $('.').show();
    }
    
    }, 0);

//---------------------------------------------------------------------------------------------------------------------------------------------
//AK vs AK
window.setInterval(function() {

    var current = new Date();
    var expiry = new Date("January 05, 2021 20:00:00")
    
    if (current.getTime() < expiry.getTime()) {
      $('.ak').hide();
    
    } else if (current.getTime() > expiry.getTime()) {
      $('.ak').show();
    }
    
    }, 0);
//--------------------------------------------------------------
    //Escape Room
  window.setInterval(function() {
  
    var current = new Date();
    var expiry = new Date("January 09, 2021 12:00:00")
    
    if (current.getTime() < expiry.getTime()) {
      $('.escape').hide();
    
    } else if (current.getTime() > expiry.getTime()) {
      $('.escape').show();
    }
    
    }, 0);
//--------------------------------------------------------------
    //Jumanji The Next Level
    window.setInterval(function() {
    
      var current = new Date();
      var expiry = new Date("January 16, 2021 12:00:00")
      
      if (current.getTime() < expiry.getTime()) {
        $('.jumanji').hide();
      
      } else if (current.getTime() > expiry.getTime()) {
        $('.jumanji').show();
      }
      
      }, 0);
//--------------------------------------------------------------
      //Rio
      window.setInterval(function() {
      
        var current = new Date();
        var expiry = new Date("January 23, 2021 12:00:00")
        
        if (current.getTime() < expiry.getTime()) {
          $('.rio').hide();
        
        } else if (current.getTime() > expiry.getTime()) {
          $('.rio').show();
        }
        
        }, 0);
//--------------------------------------------------------------
        //Rob-B-Hood
        window.setInterval(function() {
        
          var current = new Date();
          var expiry = new Date("January 30, 2021 12:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.rob').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.rob').show();
          }
          
          }, 0);
//--------------------------------------------------------------
          //Stuart Little
          window.setInterval(function() {
          
            var current = new Date();
            var expiry = new Date("February 06, 2021 12:00:00")
            
            if (current.getTime() < expiry.getTime()) {
              $('.stuart').hide();
            
            } else if (current.getTime() > expiry.getTime()) {
              $('.stuart').show();
            }
            
            }, 0);
//--------------------------------------------------------------
            //Terminaotr - Dark Fate
  window.setInterval(function() {
  
    var current = new Date();
    var expiry = new Date("February 13, 2021 12:00:00")
    
    if (current.getTime() < expiry.getTime()) {
      $('.terminator').hide();
    
    } else if (current.getTime() > expiry.getTime()) {
      $('.terminator').show();
    }
    
    }, 0);
//--------------------------------------------------------------
    //Lion King
    window.setInterval(function() {
    
      var current = new Date();
      var expiry = new Date("February 20, 2021 12:00:00")
      
      if (current.getTime() < expiry.getTime()) {
        $('.lion').hide();
      
      } else if (current.getTime() > expiry.getTime()) {
        $('.lion').show();
      }
      
      }, 0);
//--------------------------------------------------------------
      //ABCD 2
      window.setInterval(function() {
      
        var current = new Date();
        var expiry = new Date("February 27, 2021 12:00:00")
        
        if (current.getTime() < expiry.getTime()) {
          $('.abcd').hide();
        
        } else if (current.getTime() > expiry.getTime()) {
          $('.abcd').show();
        }
        
        }, 0);
//--------------------------------------------------------------        
        //Chhichhore
      window.setInterval(function() {
      
        var current = new Date();
        var expiry = new Date("March 06, 2021 12:00:00")
        
        if (current.getTime() < expiry.getTime()) {
          $('.chhichhore').hide();
        
        } else if (current.getTime() > expiry.getTime()) {
          $('.chhichhore').show();
        }
        
        }, 0);
//--------------------------------------------------------------  
        //Dil Bechara
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("March 13, 2021 12:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.dil').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.dil').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 7, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.kgf').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.kgf').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 8, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.bahubali').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.bahubali').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 10, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.majnu').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.majnu').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 11, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.vicky').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.vicky').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 12, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.yevadu').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.yevadu').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 13, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.comrade').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.comrade').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 14, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.dwarka').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.dwarka').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 15, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.diwali').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.diwali').show();
          }
          
          }, 0);
          //--------------------------------------------------------------  
        //KGF Chapter 2
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("January 16, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.vip').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.vip').show();
          }
          
          }, 0);
//--------------------------------------------------------------
          //New Badge Limit
          window.setInterval(function() {
        
            var current = new Date();
            var expiry = new Date("January 1, 2050 12:00:00")
            
            if (current.getTime() < expiry.getTime()) {
              $('.new').hide();
            
            } else if (current.getTime() > expiry.getTime()) {
              $('.new').show();
            }
            
            }, 60000*60);








//Status Videos Schedule:------------------------------------------------------------------------------------------------------------------

        //Chhor Denge Status Video
        window.setInterval(function() {
      
            var current = new Date();
            var expiry = new Date("May 1, 2021 11:00:00")
            
            if (current.getTime() < expiry.getTime()) {
              $('.chhor').hide();
            
            } else if (current.getTime() > expiry.getTime()) {
              $('.chhor').show();
            }
            
            }, 0);
              
            //Hides NEW badge after a time of interval when published
            window.setInterval(function() {
      
              var current = new Date();
              var expiry = new Date("May 2, 2021 11:00:00")
              
              if (current.getTime() > expiry.getTime()) {
                $('.chhor-new').hide();
              
              } else if (current.getTime() < expiry.getTime()) {
                $('.chhor-new').show();
              }
              
              }, 0);


            //--------------------------------------------------
            
              //Lut Gaye Kar Status Video
        window.setInterval(function() {
      
            var current = new Date();
            var expiry = new Date("May 2, 2021 11:00:00")
            
            if (current.getTime() < expiry.getTime()) {
              $('.lut').hide();
            
            } else if (current.getTime() > expiry.getTime()) {
              $('.lut').show();
            }
            
            }, 0);

            //Hides NEW badge after a time of interval when published
            window.setInterval(function() {
      
              var current = new Date();
              var expiry = new Date("May 3, 2021 11:00:00")
              
              if (current.getTime() > expiry.getTime()) {
                $('.lut-new').hide();
              
              } else if (current.getTime() < expiry.getTime()) {
                $('.lut-new').show();
              }
              
              }, 0);


            //--------------------------------------------------
            
            //Top Tucker Status Video
        window.setInterval(function() {
      
            var current = new Date();
            var expiry = new Date("May 3, 2021 11:00:00")
            
            if (current.getTime() < expiry.getTime()) {
              $('.top').hide();
            
            } else if (current.getTime() > expiry.getTime()) {
              $('.top').show();
            }
            
            }, 0);
              
            //Hides NEW badge after a time of interval when published
            window.setInterval(function() {
      
              var current = new Date();
              var expiry = new Date("May 4, 2021 11:00:00")
              
              if (current.getTime() > expiry.getTime()) {
                $('.top-new').hide();
              
              } else if (current.getTime() < expiry.getTime()) {
                $('.top-new').show();
              }
              
              }, 0);
              //--------------------------------------------------
            
            //Valkyrie Status Video
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("May 4, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.valkyrie').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.valkyrie').show();
          }
          
          }, 0);
            
          //Hides NEW badge after a time of interval when published
          window.setInterval(function() {
    
            var current = new Date();
            var expiry = new Date("May 5, 2021 11:00:00")
            
            if (current.getTime() > expiry.getTime()) {
              $('.valkyrie-new').hide();
            
            } else if (current.getTime() < expiry.getTime()) {
              $('.valkyrie-new').show();
            }
            
            }, 0);
//---------------------------------------------------------------

            //Radha Status Video
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("May 06, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.radha').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.radha').show();
          }
          
          }, 0);
            
          //Hides NEW badge after a time of interval when published
          window.setInterval(function() {
    
            var current = new Date();
            var expiry = new Date("May 7, 2021 11:00:00")
            
            if (current.getTime() > expiry.getTime()) {
              $('.radha-new').hide();
            
            } else if (current.getTime() < expiry.getTime()) {
              $('.radha-new').show();
            }
            
            }, 0);
            //--------------------------------------------------
            //---------------------------------------------------------------

            //ONEUS Twilight Status Video
        window.setInterval(function() {
      
          var current = new Date();
          var expiry = new Date("May 7, 2021 11:00:00")
          
          if (current.getTime() < expiry.getTime()) {
            $('.twilight').hide();
          
          } else if (current.getTime() > expiry.getTime()) {
            $('.twilight').show();
          }
          
          }, 0);
            
          //Hides NEW badge after a time of interval when published
          window.setInterval(function() {
    
            var current = new Date();
            var expiry = new Date("May 8, 2021 11:00:00")
            
            if (current.getTime() > expiry.getTime()) {
              $('.twilight-new').hide();
            
            } else if (current.getTime() < expiry.getTime()) {
              $('.twilight-new').show();
            }
            
            }, 0);
            //--------------------------------------------------
            

