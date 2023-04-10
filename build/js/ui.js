$(function(){
    // a, button태그 title 속성 비어있을때 작성된text로 title 생성
    $('a, .btn, .eps').each(function(){
        let Tag = $(this);
        let attr = Tag.text().trim();
        if ($(this).is('[title]')) {
        } else {
            Tag.attr("title",attr);
        }
    });

    /* lnb dep1*/
    $(document).on(
        'click','.dep1>li', function () {
            // $(this).find('.dep2').stop().slideToggle();
            // $(this).toggleClass('active').siblings().removeClass('active').find('.dep2').slideUp();
            if (!$(this).hasClass('active')) { //221114 수정
                $(this).find('.dep2').stop().slideToggle();
                $(this).toggleClass('active').siblings().removeClass('active').find('.dep2').slideUp();
            }
        }
    );

    /* lnb dep1 접근성 */
    $('.lnb .dep1 li a').on({
        "keypress": function (e) {
            if (e.keyCode == 9) {
                $(this).parents('li').addClass('active').siblings('.hasDep').removeClass('active');
            }
        }
    });

    /* lnb dep2 */
    $(document).on(
        'click','.dep2>li', function () {
            //e.stopPropagation();
            //$(this).toggleClass('active').siblings().removeClass('active');
            if (!$(this).hasClass('active')) { //221114 수정
                $(this).toggleClass('active').siblings().removeClass('active');
            }
        }
    );

    /* tab */
    const $tabList = $('.tabList li');
    
    $tabList.on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.tabNav').siblings('.tabCont').eq($(this).index()).addClass('active').siblings('.tabCont').removeClass('active');
            $(this).find('a').attr('aria-selected', 'true').closest('li').siblings('li').find('a').attr('aria-selected', 'false');
        }
    });

    $('.headWrap .tabList li').on({
        "click": function () {
            $(this).addClass('active').siblings('li').removeClass('active');
            $(this).closest('.headWrap').siblings('#content').children('.tabCont').eq($(this).index())
            .addClass('active').siblings('.tabCont').removeClass('active');
        }
    });

    $tabList.each(function(){
        if ($(this).hasClass('active')) {
            $(this).find('a').attr('aria-selected', 'true');
        } else {
            $(this).find('a').attr('aria-selected', 'false');
        }
    });

    const $chk = $('.checkbox input[type="checkbox"]');

    /* checkbox (접근성) */
    $chk.each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });

    $chk.on({
        "keyup": function(e){
            let keyCode = e.keyCode;
            
            if(keyCode == 13){
                $(this).prop('checked', !$(this).prop('checked'));
                if($(this).prop('checked')){
                    $(this).attr('aria-checked', 'true');
                } else {
                    $(this).attr('aria-checked', 'false');
                }
            }
        },
        "click": function(){
            if($(this).prop('checked')){
                $(this).attr('aria-checked', 'true');
            } else {
                $(this).attr('aria-checked', 'false');
            }
        } 
    });

    /* radio (접근성) */
    const $radio = $('.radio input[type="radio"]');

    $radio.each(function() {
        if($(this).prop('checked')){
            $(this).attr('aria-checked', 'true');
        } else {
            $(this).attr('aria-checked', 'false');
        }
    });

    $radio.on({
        "keyup": function(e){
            let keyCode = e.keyCode;
            
            if(keyCode == 13){
                $(this).prop('checked',true);
                if($(this).prop('checked')){
                    $(this).attr('aria-checked', 'true');
                } else {
                    $(this).attr('aria-checked', 'false');
                }
            }
        },
        "click": function(){
            if($(this).prop('checked')){
                $(this).attr('aria-checked', 'true');
            } else {
                $(this).attr('aria-checked', 'false');
            }
        } 
    });

    /* radio Group */
    $('.radioGroup ul li .radio input[type="radio"]').on({
        "click": function(){
            $(this).attr('aria-checked', 'true').closest('li').siblings('li').find('.radio').find('input[type="radio"]').attr('aria-checked', 'false');
        }
    });

    /* table tr active */
    $('.table.hover tbody tr').on({
        "click": function () {
            $(this).toggleClass('active');
        }
    });

    /* 확대,축소 */
    let nowZoom = 100;

    $('.btnScaleUp').on({
        "click": function () {
            nowZoom += 5;
            $('body').css({transform: 'scale(' + nowZoom + '%)', 'transform-origin': '50% 0'});
        }
    });

    $('.btnScaleDown').on({
        "click": function () {
            nowZoom -= 5;
            $('body').css({transform: 'scale(' + nowZoom + '%)', 'transform-origin': '50% 0'});
            if(nowZoom < 55){
                nowZoom = 55;
                alert('더 이상 축소할 수 없습니다.');
            } 
        }
    });

    /* datepicker */
    $('.cal').datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        yearRange: 'c-20:c+20',
        changeMonth: true,
        changeYear: true
    });

    /* popup draggable */
    $('.uiDrag').draggable({
        containment: 'window',
        cancel: '.dragCancel',
        start: function(){
            $(this).css('transform', 'none');
        },
    });

    /* file path */
    $('.fileArea input[type="file"]').change(function () {
        let path = $(this).val();
        $(this).siblings('.fileUpload').val(path)
    });

});
