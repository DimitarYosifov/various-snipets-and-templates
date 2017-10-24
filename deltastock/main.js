'use strict';
let dataToArr;
$(window).on('load', function () {
    $.get("http://www.deltastock.com/TEST/data.txt", function (data) {
        data = JSON.parse(data);
        for (let item in data) {
            let itemData;
            itemData = data[item];
            dataToArr = itemData;
        }
        dataToArr.sort((a, b) => a.dispCode.localeCompare(b.dispCode));
        display()
    });
});

function display() {
    $('#main-table').css('pointer-events', 'none');

    setTimeout(function () {
        $('#main-table').css('pointer-events', 'auto')
    }, 1000);

    dataToArr.forEach(x=> {
        let tr = $("<tr>");
        let dispCode = $("<td>")
            .addClass('dispCode')
            .html(x.dispCode)
            .click(function () {
                sortByDispCode()
            })
            .appendTo(tr);

        let buySellContainer = $("<td>")
            .addClass('buySellContainer')
            .click(function () {
                sortBySentiment()
            })
            .appendTo(tr);

        let buyers = $("<span>")
            .html(x.sentiment + "%")
            .addClass('buyers')
            .appendTo(buySellContainer);

        let barContainer = $("<div>")
            .addClass('barContainer')
            .appendTo(buySellContainer);

        let sellBar = $("<div>")
            .addClass('sellBar')
            .animate({
                width: 100 - x.sentiment + 'px',
            }, 1000, function () {
                if (x.sentiment === 0) {
                    $(this).css('border-radius', 10 + 'px')
                }
                $(".buy,.sell").css('display', 'block')
            })
            .appendTo(barContainer);

        let buyBar = $("<div>")
            .addClass('buyBar')
            .animate({
                width: x.sentiment + 'px',
            }, 1000, function () {
                if (x.sentiment === 100) {
                    $(this).css('border-radius', 10 + 'px')
                }
            })
            .insertBefore(sellBar);

        let remnant = $("<span>")
            .html(100 - x.sentiment + "%")
            .addClass('remnant')
            .appendTo(buySellContainer);

        let buy = $("<div>")
            .html("buy")
            .animate({}, 1000)
            .addClass('buy')
            .appendTo(barContainer);

        let sell = $("<div>")
            .html("sell")
            .addClass('sell')
            .appendTo(barContainer);

        $('#main-table').append(tr)
    })
}

function sortByDispCode() {
    dataToArr.sort((a, b) => a.dispCode.localeCompare(b.dispCode));
    $('#main-table').empty();
    display();
}

function sortBySentiment() {
    dataToArr.sort((a, b) => a.sentiment.toString().localeCompare(b.sentiment));
    $('#main-table').empty();
    display();
}

