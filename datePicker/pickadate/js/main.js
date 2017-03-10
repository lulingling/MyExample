/**
 * Created by lulingling on 2017/3/10.
 */

$(function () {
    $( '#date1' ).pickadate({
        weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
        monthsFull:['1','2','3','4','5','6','7','8','9','10','11','12'],
        monthsShort:['1','2','3','4','5','6','7','8','9','10','11','12'],
        showMonthsShort: true,
        today:'今天',
        clear:'清除',
        close:'关闭',
        /*labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',*/
         selectMonths: true,
         selectYears: 110,
        format: 'yyyy年mmmm月',
        formatSubmit: 'yyyy/mm',
        hiddenPrefix: 'prefix__',
        hiddenSuffix: '__suffix',
        hiddenName:true,
        /* selectMonth: 'picker__select--month',
        selectYear: 'picker__select--year',*/
        min:new Date(1990,1,1),
        max:new Date(2100,12,31),
        closeOnSelect: true,
        closeOnClear: false,

        /*function*/
        onStart:function () {
            console.log("onStart");
        },
        onRender: function() {
            console.log('Whoa.. rendered anew')
        },
        onOpen: function() {
            console.log('Opened up')
        },
        onClose: function() {
            console.log('Closed now')
        },
        onStop: function() {
            console.log('See ya.')
        },
        onSet: function(context) {
            console.log('Just set stuff:', context)
        }
    });
});

