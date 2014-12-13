/*
 *  Table Sort support
 *  Author:Ming
 *  Version:1.2.1
 *  Date:2014.12.12
 */
(function($, NULL, UNDEFINED) {
    var CLASS_TH = 'table-sort-th';
    var CLASS_ARROW = 'table-sort-arrow';
    var CLASS_ARROW_DESC = 'table-sort-arrow-desc';
    /**
     * constructor of table sort
     * @param selector container selector
     * @param highlightClass row hightlight class name
     * @param footerCnt column numbers keep unsort
     */
    function TableSort(selector, highlightClass, footerCnt) {
        var objThis = this;
        var $table = $(selector);
        if ($table.length !== 1) {
            $table.each(function(table) {
                new TableSort(table, highlightClass, footerCnt);
            });
            return;
        }
        var $th = $table.find('th').addClass(CLASS_TH);
        for (var i = 0; i < $th.length; i++) {
            (function(th, index) {
                $(th).click(function() {
                    var $arrow = $(th).find('.' + CLASS_ARROW);
                    var desc = 0;
                    var cName = CLASS_ARROW;
                    if ($arrow.length > 0 && !$arrow.hasClass(CLASS_ARROW_DESC)) {
                        desc = 1;
                        cName += ' ' + CLASS_ARROW_DESC;
                    }
                    $table.find('.' + CLASS_ARROW).remove();//remove old arrow
                    $(th).append('<span class="' + cName + '"></span>');//append new arrow
                    _sort($table, index, desc, highlightClass, footerCnt);
                });
            })($th[i], i);
        }
        objThis.$dom = $table;
    }
    function _isNum(text) {
        return text !== NULL && !isNaN(text);
    }
    /**
     * sort table
     * @param $table sort table element
     * @param index sort column index
     * @param desc descending
     * @param highlightClass row hightlight class name
     * @param footerCnt column numbers keep unsort
     */
    function _sort($table, index, desc, highlightClass, footerCnt) {
        var rows = [];
        var cnt = 0;
        var isNum = 1;
        var $tr = $table.find('tbody tr').each(function(tr) {
            var allTd = $(tr).find('td');
            if (index < allTd.length) {
                var td = allTd[index];
                var text = $(td).text();
                if ($.trim(text) === '') {
                    var $input = $(td).find('input');
                    if ($input.length > 0) {
                        var input = $input[0];
                        if ('checked' in input) {
                            text = input.checked ? 1 : 0;
                        } else if ('value' in input) {
                            text = input.value;
                        }
                    }
                }
                if (!_isNum(text))
                    isNum = 0;
                rows.push({
                    i: cnt++,
                    t: text
                });
            }
        });
        //do sort
        for (var i = 1; i < rows.length; i++) {
            for (var j = rows.length - 1; j >= i; j--) {
                var row1 = rows[j];
                var row2 = rows[j - 1];
                var swap = isNum ? (parseFloat(row1.t || '0') < parseFloat(row2.t || '0')) : (row1.t < row2.t);
                if (desc) {
                    swap = !swap;
                }
                if (swap) {
                    rows[j - 1] = row1;
                    rows[j] = row2;
                }
            }
        }
        //reset table element
        var $tbody = $table.find('tbody');
        for (var r in rows) {
            $($tr[rows[r].i]).appendTo($tbody);
        }
        if (footerCnt) {
            for (var j = $tr.length - footerCnt; j < $tr.length; j++) {
                $($tr[j]).appendTo($tbody);
            }
        }
        if (highlightClass) {
            $tr = $table.find('tbody tr').removeClass(highlightClass);
            for (var k = 0; k < $tr.length; k++) {
                if (k % 2 === 1) {
                    $($tr[k]).addClass(highlightClass);
                }
            }
        }
    }
    //retisger to window
    window.TableSort = TableSort;
})(Gnim, null);

