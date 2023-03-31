$(document).ready(function(e){

    // Team Tab
    $('.team_tab .tab_navigation .nav_item').on('click',function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.team_tab .tab_navigation .nav_item').removeClass('active');
        $(this).addClass('active');

        $('.team_tab .tab_item').slideUp(300);
        $(target).slideDown(300);
    })

    // Advantages Tab
    $('.advantages .tab_navigation .nav_item').on('click',function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.advantages .tab_navigation .nav_item').removeClass('active');
        $(this).addClass('active');

        $('.advantages .tab_item').slideUp(300);
        $(target).slideDown(300);
    })

    // Slider Portfolio
    const porfolioSlider = new Swiper('.portfolio_slider .swiper', {
        // Optional parameters
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            0:{
                slidesPerView: 1.4,
            },
            768:{
                slidesPerView: 2.4,
            },
            1200:{
                slidesPerView: 4,
            },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper_next',
          prevEl: '.swiper_prev',
        },
    });

    // Last Seen Products
    const lastSeen = new Swiper('.last_seen_slider .swiper', {
        // Optional parameters
        slidesPerView: 5,
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
      
        // Navigation arrows
        navigation: {
          nextEl: '.last_seen_navigation .swiper_next',
          prevEl: '.last_seen_navigation .swiper_prev',
        },
    });


    // TeamGallery
    lightGallery(document.querySelector('.gallery_block'), {
        plugins: [lgZoom],
        speed: 500,
    });

    // TeamGallery
    lightGallery(document.querySelector('.portfolio_slider .swiper-wrapper'), {
        plugins: [lgZoom],
        speed: 500,
        selector: 'a'
    });

    // Certificates
    lightGallery(document.querySelector('#certificates .row'), {
        plugins: [lgZoom],
        speed: 500,
        selector: 'a'
    });

    $('.faq_item').on('click',function(e){
        e.preventDefault();
        $(this).find('.faq_body').slideToggle(300);
        $(this).toggleClass('active');
    })

    $('.product_categories .parent_category').on('click',function(e){
        e.preventDefault();
        var childCategories = $(this).parent().find('.child_categories');
        $(this).toggleClass('active');
        $('.product_categories .child_categories').not(childCategories).slideUp();
        childCategories.slideToggle();
    })

    // Price Range Slider
    let price_range = $(".price_range");

    if(price_range.length > 0){
        $(".price_range").ionRangeSlider({
            skin: "round",
            type: "double",
            min: 500,
            max: 5000,
            from: 1500,
            to: 2700,
            hide_min_max: true,
            hide_from_to: true,
            onChange: function(data) {
                $('.price_status .from .value').text(data.from);
                $('.price_status .to .value').text(data.to);
            }
        });
    }
    

    // Product Filter Widget Toggler
    $('.widget_item.boxed .widget_title').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active')
        $(this).parent().find('.widget_body').slideToggle({});
    })

    var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
    console.log(windowWidth)
    // Footer

    // WHEN MOBILE
    if(windowWidth <= 1200){
        $('.footer_item .footer_title').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('show')
            $(this).parent().find('ul').slideToggle();
        })
    }
    
})