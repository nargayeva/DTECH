
$(function(){
    AOS.init();


    $('.nav-bar-item').hover(function(){
        $(this).animate({ fontSize: '2rem', color: '#197278' });
    }, function() {
        $(this).animate({ fontSize: '1.5rem', color: 'black' });
    });
    
});


$(function(){
        $('.personal-subscriptions').hover(function(){
            $('.personal-price').hide('slow');
            $('.personal-span').animate({height: '100%', borderRadius: '2rem'});
            $('.personal-parag').css('display', 'block');

        }, function(){
            $('.personal-span').animate({height: '13%',borderRadius: '0'});
            $('.personal-parag').css('display', 'none');
            $('.personal-price').show('slow');
        });

        $('.business-subscriptions').hover(function(){
            $('.business-price').hide('slow');
            $('.business-span').animate({height: '100%',borderRadius: '2rem'});
            $('.business-parag').css('display', 'block');

        }, function(){
            $('.business-span').animate({height: '13%',borderRadius: '0'});
            $('.business-parag').css('display', 'none');
            $('.business-price').show('slow');
        });

        $('.premium-subscriptions').hover(function(){
            $('.premium-price').hide('slow');
            $('.premium-span').animate({height: '100%',borderRadius: '2rem'});
            $('.premium-parag').css('display', 'block');
        }, function(){
            $('.premium-span').animate({height: '13%',borderRadius: '0'});
            $('.premium-parag').css('display', 'none');
            $('.premium-price').show('slow');
        });

        $('.ecommerce-subscriptions').hover(function(){
            $('.ecommerce-price').hide('slow');
            $('.ecommerce-span').animate({height: '100%',borderRadius: '2rem'});
            $('.ecommerce-parag').css('display', 'block');
        }, function(){
            $('.ecommerce-span').animate({height: '13%',borderRadius: '0'});
            $('.ecommerce-parag').css('display', 'none');
            $('.ecommerce-price').show('slow');
        });
    });
  

    $(function(){
        
        $('.product-1').hover(function(){
            $('.product-1').addClass('change-1');
            $('.web').animate({opacity: '1'},'slow');
        },function(){
            $('.product-1').removeClass('change-1');
            $('.web').animate({opacity: '0'},'slow');
        });

        $('.product-2').hover(function(){
            $('.product-2').addClass('change-2');
            $('.game').animate({opacity: '1'},'slow');
        },function(){
            $('.product-2').removeClass('change-2');
            $('.game').animate({opacity: '0'},'slow');
        });

        $('.product-3').hover(function(){
            $('.product-3').addClass('change-3');
            $('.mobile').animate({opacity: '1'},'slow');
            
        },function(){
            $('.product-3').removeClass('change-3');
            $('.mobile').animate({opacity: '0'},'slow');
        });

        $('.product-4').hover(function(){
            $('.product-4').addClass('change-4');
            $('.other').animate({opacity: '1'},'slow');
            
        },function(){
            $('.product-4').removeClass('change-4');
            $('.other').animate({opacity: '0'},'slow');
        });

    });

    $(function(){
        $('.hidden-menu').click(function(){
            $('.hamburger-menu').toggle('slow',function(){
            });
        });
    });

    
