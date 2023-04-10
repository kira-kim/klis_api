$(function(){
    const $body = $('body');

    /* 팝업이 보여질동안에는 body scroll hidden */
    function bodyHidden(){
        let scrollTop = $('body').scrollTop();
        $body.addClass('hid').css('top', -scrollTop);
    }

    /* 버튼 클래스 이름이 btn으로 시작하고 Show로 끝나는 버튼 */
    $('button[class^="btn"][class$="Show"]').on({
        "click": function(){
            bodyHidden();
        }
    });

    /* 법정동검색 팝업 */
    $('.btnInquiryShow').on({
        "click": function () {
            $('.popup01').show();
            $('.popup01').next('.dimmed').show();
        }
    });

    /* 허가정보 상세조회 팝업 */
    $('.btnDetInqueryShow').on({
        "click": function () {
            $('.popup02').show();
            $('.popup02').next('.dimmed').show();
        }
    });

    /* 허가정보 조회 팝업 */
    $('.btnInquiry2Show').on({
        "click": function () {
            $('.popup03').show();
            $('.popup03').next('.dimmed').show();
        }
    });

    /* 주소전환검색 팝업 */
    $('.btnAddrShow').on({
        "click": function () {
            $('.popup04').show();
            $('.popup04').next('.dimmed').show();
        }
    });

    /* 주소전환검색 팝업 -> 법정동검색 클릭 시 나오는 팝업 */
    $('.btnBldgShow').on({
        "click": function () {
            $('.popup05').show();
            $('.popup05').next('.dimmed').show();
        }
    });

    /* 팝업 떠있는 상태에서 외부 영역 클릭시 닫힘 */
    // $(document).on({
    //     "mousedown": function (e) {
    //         if($('.popup').has(e.target).length == 0) {
    //             $('.popup,.dimmed').hide();
    //         } 
    //     }
    // });

    $(document).on('mousedown', '.dimmed', function () {
       $body.removeClass('hid');
    });

    /* 팝업 닫기 */
    $('.btnClose,.btnPopupClose,.btnCancel').on({
        "click": function () {
            $(this).closest('.popup').hide();
            $(this).closest('.popup').next('.dimmed').hide();
            $('.table.hover tbody tr').removeClass('active');

            //visible popup 중에서 마지막 팝업
            if($('.popup:visible').length == 0){
                $body.removeClass('hid');
            }
        }
    });

    /* 팝업 z-index */
    $('.popup').each(function(index){
        index = 1000 + index * 10;
        $(this).css('z-index', index);
        $(this).next('.dimmed').css('z-index', index - 10 + 9);
    });

    
});