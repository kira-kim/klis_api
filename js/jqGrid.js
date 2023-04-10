$(function(){
    /* 신규등록관리 */
    $('#gridTable01').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['상태','영업소재지','구분','전화번호','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'dataCell01_gt01',index:'dataCell01_gt01', width: 226, align: 'center',}, 
            {name:'dataCell02_gt01',index:'dataCell02_gt01' ,width: 400, align: 'center'},
            {name:'dataCell03_gt01',index:'dataCell03_gt01' ,width: 150, align: 'center'},
            {name:'dataCell04_gt01',index:'dataCell04_gt01' ,width: 154, align: 'center'},
            {name:'dataCell05_gt01',index:'dataCell05_gt01' ,width: 160, align: 'center'},
            {name:'dataCell06_gt01',index:'dataCell06_gt01' ,width: 300, align: 'center'},
            {name:'dataCell07_gt01',index:'dataCell07_gt01' ,width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselect: true,
        // multiselectWidth: 52,
        cmTemplate: {
            resizable: false
        }
    });

    var gridTableData01 = [ 
        {
            dataCell01_gt01:'data',
            dataCell02_gt01:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01:'대한민국',
            dataCell04_gt01:'010-1234-5678',
            dataCell05_gt01:'개인',
            dataCell06_gt01:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01:'data',
        },
    ];

    for (var i = 0; i < 2; i++) {
        gridTableData01.push({
            dataCell01_gt01:'data',
            dataCell02_gt01:'경상북도 경산시 하양읍 한사리 1-1',
            dataCell03_gt01:'대한민국',
            dataCell04_gt01:'010-1234-5678',
            dataCell05_gt01:'개인',
            dataCell06_gt01:'2022 - 02 - 02 ~ 2022 - 03 - 02',
            dataCell07_gt01:'data',
        });
    }

    for(var i= 0; i <= gridTableData01.length; i++)
    $('#gridTable01').jqGrid('addRowData',i + 1, gridTableData01[i]);

    /* 신규등록관리 팝업 */
    $('#gridTable02').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','파일명','파일사이즈'],
        colModel:[
            {name:'num02',index:'num02', width: 80, align: 'center'},
            {name:'dataCell01_gt02',index:'dataCell01_gt02', width: 150, align: 'center'},
            {name:'dataCell02_gt02',index:'dataCell02_gt02', width: 120, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 48,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData02 = [ 
        {
            num02:'1', 
            dataCell01_gt02:'Image01',
            dataCell02_gt02:'371.43kb',
        },
    ];

    for (var i = 0; i < 4; i++) {
        gridTableData02.push({
            num02:i+2, 
            dataCell01_gt02:'Image01',
            dataCell02_gt02:'371.43kb',
        });
    }

    for(var i= 0; i <= gridTableData02.length; i++)
    $('#gridTable02').jqGrid('addRowData',i + 1, gridTableData02[i]);

    /* 신청신고통합조회 */
    $('#gridTable03').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['순번','민원관리번호','신청구분','부동산개발업<br />등록번호','법인등록번호','상호','최초등록구분','신청일','진행상태','처리구분','접수일','검토일','수리(이송)일','보완일','반려일'],
        colModel:[
            {name:'num03',index:'num03', width: 50, align: 'center'},
            {name:'dataCell01_gt03',index:'dataCell01_gt03', width: 150, align: 'center'},
            {name:'dataCell02_gt03',index:'dataCell02_gt03', width: 114, align: 'center'},
            {name:'dataCell03_gt03',index:'dataCell03_gt03', width: 114, align: 'center'},
            {name:'dataCell04_gt03',index:'dataCell04_gt03', width: 138, align: 'center'},
            {name:'dataCell05_gt03',index:'dataCell05_gt03', width: 144, align: 'center'},
            {name:'dataCell06_gt03',index:'dataCell06_gt03', width: 113, align: 'center'},
            {name:'dataCell07_gt03',index:'dataCell07_gt03', width: 109, align: 'center'},
            {name:'dataCell08_gt03',index:'dataCell08_gt03', width: 89, align: 'center'},
            {name:'dataCell09_gt03',index:'dataCell09_gt03', width: 89, align: 'center'},
            {name:'dataCell10_gt03',index:'dataCell10_gt03', width: 96, align: 'center'},
            {name:'dataCell11_gt03',index:'dataCell11_gt03', width: 96, align: 'center'},
            {name:'dataCell12_gt03',index:'dataCell12_gt03', width: 96, align: 'center'},
            {name:'dataCell13_gt03',index:'dataCell13_gt03', width: 96, align: 'center'},
            {name:'dataCell14_gt03',index:'dataCell14_gt03', width: 96, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData03 = [ 
        {
            num03:'1', 
            dataCell01_gt03:'20220628000001',
            dataCell02_gt03:'등록신청',
            dataCell03_gt03:'경북220002',
            dataCell04_gt03:'',
            dataCell05_gt03:'테스트',
            dataCell06_gt03:'협회',
            dataCell07_gt03:'2022-06-28',
            dataCell08_gt03:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt03:'<span class="cRed">처리중</span> <br /> <span class="cGray">해결</span>',
            dataCell10_gt03:'2022 - 07 - 04',
            dataCell11_gt03:'2022 - 07 - 04',
            dataCell12_gt03:'2022 - 07 - 04',
            dataCell13_gt03:'-',
            dataCell14_gt03:'-',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData03.push({
            num03:i+2, 
            dataCell01_gt03:'20220628000001',
            dataCell02_gt03:'등록신청',
            dataCell03_gt03:'경북220002',
            dataCell04_gt03:'',
            dataCell05_gt03:'테스트',
            dataCell06_gt03:'협회',
            dataCell07_gt03:'2022-06-28',
            dataCell08_gt03:'<span class="cGray">작성</span> <br /> <span>완료</span>',
            dataCell09_gt03:'<span class="cRed">처리중</span> <br /> <span class="cGray">해결</span>',
            dataCell10_gt03:'2022 - 07 - 04',
            dataCell11_gt03:'2022 - 07 - 04',
            dataCell12_gt03:'2022 - 07 - 04',
            dataCell13_gt03:'-',
            dataCell14_gt03:'-',
        });
    }

    for(var i= 0; i <= gridTableData03.length; i++)
    $('#gridTable03').jqGrid('addRowData',i + 1, gridTableData03[i]);

    /* 이관정보관리 */
    $('#gridTable04').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','민원관리번호','신청구분','부동산개발업등록번호','주민(법인)등록번호','상호','신청일','진행상태','처리구분','등록지역','이관지역'],
        colModel:[
            {name:'num04',index:'num04', width: 50, align: 'center'},
            {name:'dataCell01_gt04',index:'dataCell01_gt04', width: 175, align: 'center'},
            {name:'dataCell02_gt04',index:'dataCell02_gt04', width: 140, align: 'center'},
            {name:'dataCell03_gt04',index:'dataCell03_gt04', width: 190, align: 'center'},
            {name:'dataCell04_gt04',index:'dataCell04_gt04', width: 175, align: 'center'},
            {name:'dataCell05_gt04',index:'dataCell05_gt04', width: 180, align: 'center'},
            {name:'dataCell06_gt04',index:'dataCell06_gt04', width: 146, align: 'center'},
            {name:'dataCell07_gt04',index:'dataCell07_gt04', width: 119, align: 'center'},
            {name:'dataCell08_gt04',index:'dataCell08_gt04', width: 119, align: 'center'},
            {name:'dataCell09_gt04',index:'dataCell09_gt04', width: 148, align: 'center'},
            {name:'dataCell10_gt04',index:'dataCell10_gt04', width: 148, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData04 = [ 
        {
            num04:'1', 
            dataCell01_gt04:'20200710000001',
            dataCell02_gt04:'양도신고',
            dataCell03_gt04:'경북220002',
            dataCell04_gt04:'',
            dataCell05_gt04:'㈜예안이엔지',
            dataCell06_gt04:'2022-01-01',
            dataCell07_gt04:'<span class="cRed">처리중</span> <br /> <span>완료</span>',
            dataCell08_gt04:'<span class="cRed">처리중</span> <br /> <span class="cBlue">이송</span>',
            dataCell09_gt04:'경상북도(47)',
            dataCell10_gt04:'경상북도',
        },
    ];

    for (var i = 0; i < 7; i++) {
        gridTableData04.push({
            num04:i+2, 
            dataCell01_gt04:'20200710000001',
            dataCell02_gt04:'양도신고',
            dataCell03_gt04:'경북220002',
            dataCell04_gt04:'',
            dataCell05_gt04:'㈜예안이엔지',
            dataCell06_gt04:'2022-01-01',
            dataCell07_gt04:'<span class="cRed">처리중</span> <br /> <span>완료</span>',
            dataCell08_gt04:'<span class="cRed">처리중</span> <br /> <span class="cBlue">이송</span>',
            dataCell09_gt04:'경상북도(47)',
            dataCell10_gt04:'경상북도',
        });
    }

    for(var i= 0; i <= gridTableData04.length; i++)
    $('#gridTable04').jqGrid('addRowData',i + 1, gridTableData04[i]);

    /* 전입전출신고-변경사무실 */
    $('#gridTable05').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','영업소구분','상태','영업소소재지','전화번호','면적(㎡)','소유형태','임대기간','건물용도'],
        colModel:[
            {name:'num05',index:'num05', width: 50, align: 'center'},
            {name:'dataCell01_gt05',index:'dataCell01_gt05', width: 150, align: 'center'},
            {name:'dataCell02_gt05',index:'dataCell02_gt05', width: 150, align: 'center'},
            {name:'dataCell03_gt05',index:'dataCell03_gt05', width: 336, align: 'center'},
            {name:'dataCell04_gt05',index:'dataCell04_gt05', width: 166, align: 'center'},
            {name:'dataCell05_gt05',index:'dataCell05_gt05', width: 166, align: 'center'},
            {name:'dataCell06_gt05',index:'dataCell06_gt05', width: 150, align: 'center'},
            {name:'dataCell07_gt05',index:'dataCell07_gt05', width: 256, align: 'center'},
            {name:'dataCell08_gt05',index:'dataCell08_gt05', width: 166, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData05 = [ 
        {
            num05:'1', 
            dataCell01_gt05:'주사무소',
            dataCell02_gt05:'정상',
            dataCell03_gt05:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt05:'032-285-1433',
            dataCell05_gt05:'0',
            dataCell06_gt05:'자가소유',
            dataCell07_gt05:'-',
            dataCell08_gt05:'',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData05.push({
            num05:i+2, 
            dataCell01_gt05:'주사무소',
            dataCell02_gt05:'정상',
            dataCell03_gt05:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt05:'032-285-1433',
            dataCell05_gt05:'0',
            dataCell06_gt05:'자가소유',
            dataCell07_gt05:'-',
            dataCell08_gt05:'',
        });
    }

    for(var i= 0; i <= gridTableData05.length; i++)
    $('#gridTable05').jqGrid('addRowData',i + 1, gridTableData05[i]);

    
    /* 전입전출신고-변경내용 */
    $('#gridTable06').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','변경일','변경구분','변경전내용','변경후내용','변경사유','최초등록일시','최초등록자'],
        colModel:[
            {name:'num06',index:'num06', width: 50, align: 'center'},
            {name:'dataCell01_gt06',index:'dataCell01_gt06', width: 170, align: 'center'},
            {name:'dataCell02_gt06',index:'dataCell02_gt06', width: 150, align: 'center'},
            {name:'dataCell03_gt06',index:'dataCell03_gt06', width: 335, align: 'center'},
            {name:'dataCell04_gt06',index:'dataCell04_gt06', width: 335, align: 'center'},
            {name:'dataCell05_gt06',index:'dataCell05_gt06', width: 150, align: 'center'},
            {name:'dataCell06_gt06',index:'dataCell06_gt06', width: 250, align: 'center'},
            {name:'dataCell07_gt06',index:'dataCell07_gt06', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData06 = [ 
        {
            num06:'1', 
            dataCell01_gt06:'2019-09-03',
            dataCell02_gt06:'전출',
            dataCell03_gt06:'경상북도 포항시 남구 상도동 546-1230',
            dataCell04_gt06:'전라남도 목포시 남교동 0523-5234',
            dataCell05_gt06:'전출',
            dataCell06_gt06:'2019-09-03 02:09:16',
            dataCell07_gt06:'이경수',
        },
    ];

    // for (var i = 0; i < 1; i++) {
    //     gridTableData06.push({
    //         num06:i+2, 
    //         dataCell01_gt06:'2019-09-03',
    //         dataCell02_gt06:'전출',
    //         dataCell03_gt06:'경상북도 포항시 남구 상도동 546-1230',
    //         dataCell04_gt06:'전라남도 목포시 남교동 0523-5234',
    //         dataCell05_gt06:'전출',
    //         dataCell06_gt06:'2019-09-03 02:09:16',
    //         dataCell07_gt06:'이경수',
    //     });
    // }

    for(var i= 0; i <= gridTableData06.length; i++)
    $('#gridTable06').jqGrid('addRowData',i + 1, gridTableData06[i]);

    /* 전입전출신고-팝업 */
    $('#gridTable07').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','상태','변경내용구분','영업소 소재지','구분','면적(㎡)'],
        colModel:[
            {name:'num07',index:'num07', width: 50, align: 'center'},
            {name:'dataCell01_gt07',index:'dataCell01_gt07', width: 90, align: 'center'},
            {name:'dataCell02_gt07',index:'dataCell02_gt07', width: 150, align: 'center'},
            {name:'dataCell03_gt07',index:'dataCell03_gt07', width: 388, align: 'center'},
            {name:'dataCell04_gt07',index:'dataCell04_gt07', width: 110, align: 'center'},
            {name:'dataCell05_gt07',index:'dataCell05_gt07', width: 100, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData07 = [ 
        {
            num07:'1', 
            dataCell01_gt07:'정상',
            dataCell02_gt07:'번호1:변경전내용<br />번호2:변경후내용',
            dataCell03_gt07:'번호1:변경전주소 or<br />번호2:변경후 주소',
            dataCell04_gt07:'주사무소',
            dataCell05_gt07:'110',
        },
    ];

    for (var i = 0; i < 1; i++) {
        gridTableData07.push({
            num07:i+2, 
            dataCell01_gt07:'정상',
            dataCell02_gt07:'번호1:변경전내용<br />번호2:변경후내용',
            dataCell03_gt07:'번호1:변경전주소 or<br />번호2:변경후 주소',
            dataCell04_gt07:'주사무소',
            dataCell05_gt07:'110',
        });
    }

    for(var i= 0; i <= gridTableData07.length; i++)
    $('#gridTable07').jqGrid('addRowData',i + 1, gridTableData07[i]);

    /* 중개업소 및 중개업자 현황 */
    $('#gridTable08').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시군구','법정동','행정동','시스템등록번호','등록번호','중개업소구분','대표자','중개업소명','사무소전화번호','이동전화'],
        colModel:[
            {name:'dataCell01_gt08',index:'dataCell01_gt08', width: 120, align: 'center'},
            {name:'dataCell02_gt08',index:'dataCell02_gt08', width: 120 , align: 'center'},
            {name:'dataCell03_gt08',index:'dataCell03_gt08', width: 120, align: 'center'},
            {name:'dataCell04_gt08',index:'dataCell04_gt08', width: 180, align: 'center'},
            {name:'dataCell05_gt08',index:'dataCell05_gt08', width: 180 , align: 'center'},
            {name:'dataCell06_gt08',index:'dataCell06_gt08', width: 160, align: 'center'},
            {name:'dataCell07_gt08',index:'dataCell07_gt08', width: 120, align: 'center'},
            {name:'dataCell08_gt08',index:'dataCell08_gt08', width: 270, align: 'center'},
            {name:'dataCell09_gt08',index:'dataCell08_gt08', width: 160, align: 'center'},
            {name:'dataCell10_gt08',index:'dataCell08_gt08', width: 160, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData08 = [ 
        {
            dataCell01_gt08:'종로구 ',
            dataCell02_gt08:'명륜2가',
            dataCell03_gt08:'명륜2가',
            dataCell04_gt08:'111102022000001',
            dataCell05_gt08:'11110-2021-00001',
            dataCell06_gt08:'공인중개사',
            dataCell07_gt08:'data',
            dataCell08_gt08:'명륜 공인중개사사무소',
            dataCell09_gt08:'02-1234-1234',
            dataCell10_gt08:'010-1234-5678',
        },
    ];

    for (var i = 0; i < 7; i++) {
        gridTableData08.push({ 
            dataCell01_gt08:'종로구 ',
            dataCell02_gt08:'명륜2가',
            dataCell03_gt08:'명륜2가',
            dataCell04_gt08:'111102022000001',
            dataCell05_gt08:'11110-2021-00001',
            dataCell06_gt08:'공인중개사',
            dataCell07_gt08:'data',
            dataCell08_gt08:'명륜 공인중개사사무소',
            dataCell09_gt08:'02-1234-1234',
            dataCell10_gt08:'010-1234-5678',
        });
    }

    for(var i= 0; i <= gridTableData08.length; i++)
    $('#gridTable08').jqGrid('addRowData',i + 1, gridTableData08[i]);


    /* 연계관리 > 연계시스템목록 */
    $('#gridTable09').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시스템코드','시스템명','기관정보','성명','직위','부서','상태'],
        colModel:[
            {name:'dataCell01_gt09',index:'dataCell01_gt09', width: 245, align: 'center'},
            {name:'dataCell02_gt09',index:'dataCell02_gt09', width: 460 , align: 'center'},
            {name:'dataCell03_gt09',index:'dataCell03_gt09', width: 180, align: 'center'},
            {name:'dataCell04_gt09',index:'dataCell04_gt09', width: 130, align: 'center'},
            {name:'dataCell05_gt09',index:'dataCell05_gt09', width: 160, align: 'center'},
            {name:'dataCell06_gt09',index:'dataCell06_gt09', width: 260, align: 'center'},
            {name:'dataCell07_gt09',index:'dataCell07_gt09', width: 155, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData09 = [ 
        {
            dataCell01_gt09:'GAOK000033',
            dataCell02_gt09:'경산시 공간정보기반 소통행정 공간플랫폼',
            dataCell03_gt09:'한국국토정보공사',
            dataCell04_gt09:'data',
            dataCell05_gt09:'주무관',
            dataCell06_gt09:'토지정보과 공간정보팀',
            dataCell07_gt09:'010-1234-5678',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData09.push({ 
            dataCell01_gt09:'GAOK000033',
            dataCell02_gt09:'경산시 공간정보기반 소통행정 공간플랫폼',
            dataCell03_gt09:'한국국토정보공사',
            dataCell04_gt09:'data',
            dataCell05_gt09:'주무관',
            dataCell06_gt09:'토지정보과 공간정보팀',
            dataCell07_gt09:'010-1234-5678',
        });
    }

    for(var i= 0; i <= gridTableData09.length; i++)
    $('#gridTable09').jqGrid('addRowData',i + 1, gridTableData09[i]);


    /* 연계 시스템 관리 > 하위 연계 시스템 리스트 */
    $('#gridTable10').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시스템코드','시스템명','기관','전화','팩스','성명','직위','부서','전화','메일','상태'],
        colModel:[
            {name:'dataCell01_gt10',index:'dataCell01_gt10', width: 130, align: 'center'},
            {name:'dataCell02_gt10',index:'dataCell02_gt10', width: 270, align: 'center'},
            {name:'dataCell03_gt10',index:'dataCell03_gt10', width: 187, align: 'center'},
            {name:'dataCell04_gt10',index:'dataCell04_gt10', width: 126, align: 'center'},
            {name:'dataCell05_gt10',index:'dataCell05_gt10', width: 126, align: 'center'},
            {name:'dataCell06_gt10',index:'dataCell06_gt10', width: 122, align: 'center'},
            {name:'dataCell07_gt10',index:'dataCell07_gt10', width: 126, align: 'center'},
            {name:'dataCell08_gt10',index:'dataCell08_gt10', width: 126, align: 'center'},
            {name:'dataCell09_gt10',index:'dataCell09_gt10', width: 126, align: 'center'},
            {name:'dataCell10_gt10',index:'dataCell10_gt10', width: 142, align: 'center'},
            {name:'dataCell11_gt10',index:'dataCell11_gt10', width: 108, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });

    $("#gridTable10").jqGrid('setGroupHeaders', {
        useColSpanStyle:true,
        groupHeaders : [
          { "startColumnName":'dataCell03_gt10', "numberOfColumns":3, "titleText":'기관정보' },
          { "startColumnName":'dataCell06_gt10', "numberOfColumns":5, "titleText":'기관정보' },
        ]
      });
    
    var gridTableData10 = [ 
        {
            dataCell01_gt10:'GAOK000033',
            dataCell02_gt10:'경산시 공간정보기간 소통행정 공간플랫폼',
            dataCell03_gt10:'경산시청',
            dataCell04_gt10:'010-4567-7890',
            dataCell05_gt10:'070-4567-7890',
            dataCell06_gt10:'경산시청',
            dataCell07_gt10:'주무관',
            dataCell08_gt10:'data',
            dataCell09_gt10:'070-4567-7890',
            dataCell10_gt10:'wool@korea.com',
            dataCell11_gt10:'',
        },
    ];

    for (var i = 0; i < 10; i++) {
        gridTableData10.push({ 
            dataCell01_gt10:'GAOK000033',
            dataCell02_gt10:'경산시 공간정보기간 소통행정 공간플랫폼',
            dataCell03_gt10:'경산시청',
            dataCell04_gt10:'010-4567-7890',
            dataCell05_gt10:'070-4567-7890',
            dataCell06_gt10:'경산시청',
            dataCell07_gt10:'주무관',
            dataCell08_gt10:'data',
            dataCell09_gt10:'070-4567-7890',
            dataCell10_gt10:'wool@korea.com',
            dataCell11_gt10:'',
        });
    }

    for(var i= 0; i <= gridTableData10.length; i++)
    $('#gridTable10').jqGrid('addRowData',i + 1, gridTableData10[i]);
    /* ---------- */

     /* 연계 시스템 관리 > 대상 시스템 서비스 리스트 */
     $('#gridTable13').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['서비스코드','서비스명','서비스 기간','상태','등록일','수정일'],
        colModel:[
            {name:'dataCell01_gt13',index:'dataCell01_gt13', width: 200, align: 'center'},
            {name:'dataCell02_gt13',index:'dataCell02_gt13', width: 560, align: 'left'},
            {name:'dataCell03_gt13',index:'dataCell03_gt13', width: 250, align: 'center'},
            {name:'dataCell04_gt13',index:'dataCell04_gt13', width: 150, align: 'center'},
            {name:'dataCell05_gt13',index:'dataCell05_gt13', width: 200, align: 'center'},
            {name:'dataCell06_gt13',index:'dataCell06_gt13', width: 200, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData13 = [ 
        {
            dataCell01_gt13:'SVC000045',
            dataCell02_gt13:'도로명주소가 포함된 영업중인 중개업자 검색',
            dataCell03_gt13:'2020-09-16 ~ 2099-12-31',
            dataCell04_gt13:'사용',
            dataCell05_gt13:'2020-09-16 16:09',
            dataCell06_gt13:'2020-09-16 16:09',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData13.push({ 
            dataCell01_gt13:'SVC000045',
            dataCell02_gt13:'도로명주소가 포함된 영업중인 중개업자 검색',
            dataCell03_gt13:'2020-09-16 ~ 2099-12-31',
            dataCell04_gt13:'사용',
            dataCell05_gt13:'2020-09-16 16:09',
            dataCell06_gt13:'2020-09-16 16:09',
        });
    }

    for(var i= 0; i <= gridTableData13.length; i++)
    $('#gridTable13').jqGrid('addRowData',i + 1, gridTableData13[i]);
    /* --------- */

    /* 연계 서비스 관리 > 연계 서비스 목록 */
    $('#gridTable11').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시스템코드','시스템명','서비스코드','서비스명','등록일자','상태'],
        colModel:[
            {name:'dataCell01_gt11',index:'dataCell01_gt11', width: 180, align: 'center'},
            {name:'dataCell02_gt11',index:'dataCell02_gt11', width: 377, align: 'left'},
            {name:'dataCell03_gt11',index:'dataCell03_gt11', width: 180, align: 'center'},
            {name:'dataCell04_gt11',index:'dataCell04_gt11', width: 582, align: 'left'},
            {name:'dataCell05_gt11',index:'dataCell05_gt11', width: 126, align: 'center'},
            {name:'dataCell06_gt11',index:'dataCell06_gt11', width: 122, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData11 = [ 
        {
            dataCell01_gt11:'GAOK000033',
            dataCell02_gt11:'전자도면열람시스템',
            dataCell03_gt11:'SVC0000049',
            dataCell04_gt11:'부동산중개업소',
            dataCell05_gt11:'2017-03-27',
            dataCell06_gt11:'사용',
        },
    ];

    for (var i = 0; i < 10; i++) {
        gridTableData11.push({ 
            dataCell01_gt11:'GAOK000033',
            dataCell02_gt11:'전자도면열람시스템',
            dataCell03_gt11:'SVC0000049',
            dataCell04_gt11:'부동산중개업소',
            dataCell05_gt11:'2017-03-27',
            dataCell06_gt11:'사용',
        });
    }

    for(var i= 0; i <= gridTableData11.length; i++)
    $('#gridTable11').jqGrid('addRowData',i + 1, gridTableData11[i]);
    /* --------- */


     /* 연계 서비스 관리 > 연계 서비스 수정 */
     $('#gridTable12').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['시스템코드','시스템명','상세설명'],
        colModel:[
            {name:'dataCell01_gt12',index:'dataCell01_gt12', width: 200, align: 'center'},
            {name:'dataCell02_gt12',index:'dataCell02_gt12', width: 500, align: 'left'},
            {name:'dataCell03_gt12',index:'dataCell03_gt12', width: 875, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 48,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData12 = [ 
        {
            dataCell01_gt12:'SVC000045',
            dataCell02_gt12:'토지거래허가증_발급',
            dataCell03_gt12:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData12.push({ 
            dataCell01_gt12:'SVC000045',
            dataCell02_gt12:'토지거래허가증_발급',
            dataCell03_gt12:'',
        });
    }

    for(var i= 0; i <= gridTableData12.length; i++)
    $('#gridTable12').jqGrid('addRowData',i + 1, gridTableData12[i]);
    /* --------- */


    /* 환경관리 > 시군구 업무연락처 관리 */
    $('#gridTable14').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['업무명','부서명','전화번호','팩스'],
        colModel:[
            {name:'dataCell01_gt14',index:'dataCell01_gt14', width: 200, align: 'center'},
            {name:'dataCell02_gt14',index:'dataCell02_gt14', width: 500, align: 'center'},
            {name:'dataCell03_gt14',index:'dataCell03_gt14', width: 300, align: 'center'},
            {name:'dataCell04_gt14',index:'dataCell04_gt14', width: 510, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 62,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData14 = [ 
        {
            dataCell01_gt14:'A',
            dataCell02_gt14:'XX과',
            dataCell03_gt14:'010-1111-2222',
            dataCell04_gt14:'',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData14.push({ 
            dataCell01_gt14:'A',
            dataCell02_gt14:'XX과',
            dataCell03_gt14:'010-1111-2222',
            dataCell04_gt14:'',
        });
    }

    for(var i= 0; i <= gridTableData14.length; i++)
    $('#gridTable14').jqGrid('addRowData',i + 1, gridTableData14[i]);
    /* --------- */


    /* 환경관리 > 시군구 바뀐지번 관리 */
    $('#gridTable15').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['변경전지번','변경후지번','변경일자','변경사유','사업명','등록자ID','등록일'],
        colModel:[
            {name:'dataCell01_gt15',index:'dataCell01_gt15', width: 250, align: 'center'},
            {name:'dataCell02_gt15',index:'dataCell02_gt15', width: 250, align: 'center'},
            {name:'dataCell03_gt15',index:'dataCell03_gt15', width: 150, align: 'center'},
            {name:'dataCell04_gt15',index:'dataCell04_gt15', width: 400, align: 'center'},
            {name:'dataCell05_gt15',index:'dataCell05_gt15', width: 600, align: 'center'},
            {name:'dataCell06_gt15',index:'dataCell06_gt15', width: 200, align: 'center'},
            {name:'dataCell07_gt15',index:'dataCell07_gt15', width: 150, align: 'center'},
        ],
        hoverrows: false,
        multiselectWidth: 62,
        multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });
    
    var gridTableData15 = [ 
        {
            dataCell01_gt15:'배반동</br>일반 1093-1',
            dataCell02_gt15:'배반동</br>일반 1093-1',
            dataCell03_gt15:'1968-05-30',
            dataCell04_gt15:'경지정리',
            dataCell05_gt15:'배반지구 경지정리 환지인가서',
            dataCell06_gt15:'admin1234',
            dataCell07_gt15:'2014-09-25',
        },
    ];

    for (var i = 0; i < 9; i++) {
        gridTableData15.push({ 
            dataCell01_gt15:'배반동</br>일반 1093-1',
            dataCell02_gt15:'배반동</br>일반 1093-1',
            dataCell03_gt15:'1968-05-30',
            dataCell04_gt15:'경지정리',
            dataCell05_gt15:'배반지구 경지정리 환지인가서',
            dataCell06_gt15:'admin1234',
            dataCell07_gt15:'2014-09-25',
        });
    }

    for(var i= 0; i <= gridTableData15.length; i++)
    $('#gridTable15').jqGrid('addRowData',i + 1, gridTableData15[i]);
    /* --------- */

    /* 운영홈페이지 > 사용자요청 > 기능지원요청 */
    $('#gridTable16').jqGrid({
        datatype: "local",
        height: "auto",
        colNames:['번호','서비스 구분','제목','상태','기술지원 보고서','작성자','등록일'],
        colModel:[
            {name:'dataCell01_gt16',index:'dataCell01_gt16', width: 120, align: 'center'},
            {name:'dataCell02_gt16',index:'dataCell02_gt16', width: 232, align: 'center'},
            {name:'dataCell03_gt16',index:'dataCell03_gt16', width: 480, align: 'left'},
            {name:'dataCell04_gt16',index:'dataCell04_gt16', width: 130, align: 'center'},
            {name:'dataCell05_gt16',index:'dataCell05_gt16', width: 200, align: 'center',formatter: mylink},
            {name:'dataCell06_gt16',index:'dataCell06_gt16', width: 250, align: 'center'},
            {name:'dataCell07_gt16',index:'dataCell07_gt16', width: 150, align: 'center'},
        ],
        hoverrows: false,
        // multiselectWidth: 62,
        // multiselect: true,
        cmTemplate: {
            resizable: false
        }
    });

    function mylink (cellvalue, options, rowObject) {
        
        url = '<div class="flex jc"><a href="#" title="'+cellvalue+'" class="flex linkBlue btnLnRecordShow">'+cellvalue+'</a>&nbsp;&nbsp;<button type="button" class="btn type07 bgOrange2 btnLnRecordShow" title="보고서출력" onclick="show()">보고서출력</button></div>'; 
        return url;
    };
    
    var gridTableData16 = [ 
        {
            dataCell01_gt16:'5',
            dataCell02_gt16:'부동산중개업',
            dataCell03_gt16:'중개업 XX정보 수정요청',
            dataCell04_gt16:'대기',
            dataCell05_gt16:'',
            dataCell06_gt16:'토지정보과 공간정보팀',
            dataCell07_gt16:'2014-09-25',
        },
    ];

    for (var i = 0; i < 13; i++) {
        gridTableData16.push({ 
            dataCell01_gt16:'5',
            dataCell02_gt16:'부동산중개업',
            dataCell03_gt16:'중개업 XX정보 수정요청',
            dataCell04_gt16:'대기',
            dataCell05_gt16:'',
            dataCell06_gt16:'토지정보과 공간정보팀',
            dataCell07_gt16:'2014-09-25',
        });
    }

    for(var i= 0; i <= gridTableData16.length; i++)
    $('#gridTable16').jqGrid('addRowData',i + 1, gridTableData16[i]);
    /* --------- */


    // ===========================================

    // colspan
    // $('#gridTable01').jqGrid('setGroupHeaders', {
    //     useColSpanStyle: true, 
    //     groupHeaders:[
    //         {startColumnName: 'dataCell02_gt02', numberOfColumns: 3, titleText: '부과임시판단'},
    //     ]	
    // });

    /* jqGrid td firstrow 빼고 높이를 주기위한 클래스 */
    $('.jqgfirstrow td[role="gridcell"]').addClass('jqtd');

    /* jqGrid th 체크박스 감싸는 div */
    $('.thChk').closest('div').addClass('jqChkbox');

    $('.ui-th-column').each(function(){
        if(!$(this).children('.jqChkbox').length == 0){
            $(this).addClass('p0');
        } 
    });
});