let app = angular.module('app', []);

app.filter('customFilter', function () {
    return function (input) {
        return input ? '\u2600':'\u2602';
    }
})

app.controller("controller1", function ($scope) {
    $scope.name = 'az';
    $scope.age = 0;
    $scope.city = "undefined";
    $scope.updateData = function () {
        $scope.result = $scope.age + $scope.name
    };
    $scope.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
});

app.controller("newItemController", function ($scope) {
    $scope.items = ['red', 'white', 'blue'];
    $scope.error = 'please enter an item';
    $scope.addItem = function (newItem) {
        if (newItem !== "") {
            $scope.items.push(newItem)
            $scope.error = ''
        }
        else {
            $scope.error = 'please enter valid item'
        }
    };
    $scope.checkItem = function (newItem) {
        if (newItem !== '') {
            $scope.error = ''
        }
        else {
            $scope.error = 'please enter an item'
        }
    }
});

app.controller("checkBoxController", function ($scope) {
    $scope.items = [
        {color: 'shoes', selected: false, price: 20},
        {color: 'tie', selected: false, price: 10},
        {color: 'socks', selected: false, price: 5},
        {color: 'hat', selected: false, price: 12},
        {color: 'suit', selected: false, price: 45}
    ];
    $scope.select = function (index) {
        $scope.items[index].selected = !$scope.items[index].selected
    };
    $scope.x = 0;
    $scope.numberOfSelectedItems = 0;
    $scope.getTotalPrice = function () {
        $scope.x = 0;
        $scope.numberOfSelectedItems = 0;
        $scope.items.forEach(function (i) {
            if (i.selected) {
                $scope.x += i.price
                $scope.numberOfSelectedItems++;
            }
        });
    }
    $scope.isPurchaseMade = false;
    $scope.areAllSelected = false;
    $scope.selectAllItems = function () {
        $scope.x = 0;
        $scope.areAllSelected = !$scope.areAllSelected

        $scope.items.forEach(function (i) {
            i.selected = $scope.areAllSelected
            $scope.x += i.price
        });
        if (!$scope.areAllSelected) {
            $scope.x = 0;
        }
    };
    $scope.purchaseMade = function () {
        $scope.isPurchaseMade = true;
    }
});

app.controller("filtersAndDates", function ($scope) {
    $scope.currentDate = new Date()
    $scope.stringLimit = 'ajkjrljksfd]fdkeld]'
    $scope.limitedArray = [1, 2, 3, 4, 5]
    $scope.weather = [
        {day: 'monday', rain: false},
        {day: 'tuesday', rain: true}
    ]
})




