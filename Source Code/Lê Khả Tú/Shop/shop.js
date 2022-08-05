
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById("priceInput").oninput = function(){
    console.log('hello')
}

var app = angular.module('myApp', []);
app.controller("myCtrl", function ($scope, $http) {

    function getData() {
        sessionStorage.clear();
        $http.get("watch.json").then((response) => {
            if (sessionStorage.getItem("sesWatches") == null) {
                sessionStorage.setItem("sesWatches", JSON.stringify(response.data.watches));
                $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
            } else {
                $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
            }
        });
    };
    getData();
    $scope.shopReset = () => {
        $scope.search = '';
    };

    /*Class */
    $scope.vintageFilter = () => {
        $scope.search = 'vintage';
    };
    $scope.casualFilter = () => {
        $scope.search = 'casual';
    };
    $scope.smartFilter = () => {
        $scope.search = 'smart';
    };
    /*Type */
    $scope.automaticFilter = () => {
        $scope.search = 'automatic';
    };
    $scope.sportFilter = () => {
        $scope.search = 'sport';
    };
    $scope.luxuryFilter = () => {
        $scope.search = 'luxury';
    };
    $scope.digitalFilter = () => {
        $scope.search = 'digital';
    };
    /*Brand */
    $scope.rolexFilter = () => {
        $scope.search = 'rolex';
    };
    $scope.citizenFilter = () => {
        $scope.search = 'citizen';
    };
    $scope.movadoFilter = () => {
        $scope.search = 'movado';
    };
    $scope.michaelkorsFilter = () => {
        $scope.search = 'michael kors';
    };
    $scope.patekphilippeFilter = () => {
        $scope.search = 'patek';
    };
    $scope.hublotFilter = () => {
        $scope.search = 'hublot';
    };
    $scope.vacheronconstantinFilter = () => {
        $scope.search = 'vacheron';
    };
    $scope.omegaFilter = () => {
        $scope.search = 'omega';
    };
    $scope.tagheuerFilter = () => {
        $scope.search = 'heuer';
    };
    $scope.breitlingFilter = () => {
        $scope.search = 'breitling';
    };
    $scope.montblancFilter = () => {
        $scope.search = 'montblanc';
    };
    /*Gender */
    $scope.menFilter = () => {
        $scope.search = "men's";
    };
    $scope.laddiesFilter = () => {
        $scope.search = "laddies's";
    };
    $scope.unisexFilter = () => {
        $scope.search = "unisex";
    };

    /*Sort */
    $scope.sort = {};
    $scope.doSort = function (cot) {
        var sort = $scope.sort;
        if (sort.cot == cot) {
            sort.descending = !sort.descending;
        }
        else {
            sort.cot = cot;
            sort.descending = false;
        }
    }

});

// $scope.rolexFilter = () => {
    //     sessionStorage.clear();
    //     $http.get("watch.json").then((response) => {
    //         if (sessionStorage.getItem("sesWatches") == null) {
    //             sessionStorage.setItem("sesWatches", JSON.stringify(response.data.rolex));
    //             $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
    //         } else {
    //             $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
    //         }
    //     });
    // };
    // $scope.citizenFilter = () => {
    //     sessionStorage.clear();
    //     $http.get("watch.json").then((response) => {
    //         if (sessionStorage.getItem("sesWatches") == null) {
    //             sessionStorage.setItem("sesWatches", JSON.stringify(response.data.citizen));
    //             $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
    //         } else {
    //             $scope.watchList = JSON.parse(sessionStorage.getItem("sesWatches"));
    //         }
    //     });
    // };

