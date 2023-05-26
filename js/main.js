$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $('.header').addClass('fixed');
        $('.catalog_menu').addClass('fixed');
        $('.header_mobile_menu').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
        $('.catalog_menu').removeClass('fixed');
        $('.header_mobile_menu').removeClass('fixed');
    }
    if(document.querySelector('.btn_cart')) {
        if ( $(this).scrollTop() > 400) {
            $('.btn_cart').addClass('fixed');
        } else {
            $('.btn_cart').removeClass('fixed');
        }
    }
});


if(document.querySelector(".product2_tab")) {
    function tabCheck(btn, content) {
        $("#tab-btn-"+btn).click(function() {
            $(".tab-btn").removeClass('active');
            $(".product2_tab .div").removeClass('active');
            $(this).addClass('active');
            $("#content-"+content).addClass('active');
        });
    };
    tabCheck("1", "1");
    tabCheck("2", "2");
    tabCheck("3", "3");
    tabCheck("4", "4");
    tabCheck("5", "5");
    tabCheck("6", "6");

    $("#text_wrap_open").click(function() {
        $(this).css("display", "none");
        $(".text_wrap").addClass('open');
    });
    $("#specifications_box_open").click(function() {
        $("#tab-btn-2").click()
    });
    $("#equipment_open").click(function() {
        $("#tab-btn-3").click()
    });
    $("#product2_reviews__box_open").click(function() {
        $("#tab-btn-5").click()
    });
};

document.querySelector('.header__catalog').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.catalog_menu').classList.toggle('active');
});

const catalogLink = document.querySelectorAll('.catalog_menu .items');
for(let i = 0; i < catalogLink.length; i++) {
    catalogLink[i].addEventListener('mouseover', function() {
        for(let k = 0; k < catalogLink.length; k++) {
            catalogLink[k].classList.add('opacity');
        };
        this.classList.remove('opacity');
    });
    catalogLink[i].addEventListener('mouseout', function() {
        for(let k = 0; k < catalogLink.length; k++) {
            catalogLink[k].classList.remove('opacity');
        };
    });
};
if(document.querySelector('.product__page .h2 .icon')) {
    document.querySelector('body').addEventListener('click', function() {
        document.querySelector('.product__page .h2 .icon').classList.remove('active');
    });
    document.querySelector('.product__page .h2 .icon').addEventListener('click', function() {
        setTimeout(function() {
            document.querySelector('.product__page .h2 .icon').classList.add('active');
        }, 01)
    });
};
document.querySelector('.header_burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_mobile_menu').classList.toggle('active');
});

if(document.querySelector('.question_btn')) {
    document.querySelector('.question_btn').addEventListener('click', function() {
        document.querySelector('.question_fixed').classList.toggle('active');
    });
};
if(document.querySelector('.filter_open')) {
    document.querySelector('.filter_open').addEventListener('click', function() {
        document.querySelector('.categories__page__filter').classList.add('active');
    });
    document.querySelector('.filter_close').addEventListener('click', function() {
        document.querySelector('.categories__page__filter').classList.remove('active');
    });
};

if(document.querySelector('.map__page_filter_btn')) {
    document.querySelector('.map__page_filter_btn').addEventListener('click', function() {
        document.querySelector('.map__page__filter').classList.add('active');
        document.querySelector('.map-filter').classList.add('minus');

    });
    document.querySelector('.filter_top .close').addEventListener('click', function() {
        document.querySelector('.map__page__filter').classList.remove('active');
        document.querySelector('.map-filter').classList.remove('minus');
    });
};

$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});