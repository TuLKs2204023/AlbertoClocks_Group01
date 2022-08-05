document.addEventListener("mouseover", (e) => {
  const isDropdownBtn = e.target.matches("[data-dropdown-link]");
  if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.add("active");
  }
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

document.addEventListener("mouseover", (e) => {
  const isShopDropdown = e.target.matches("[shop-dropdown-link]");
  if (!isShopDropdown && e.target.closest("[shop-dropdown]") != null) return;

  let currentShopDropdown;
  if (isShopDropdown) {
    currentShopDropdown = e.target.closest("[shop-dropdown]");
    currentShopDropdown.classList.add("active");
  }
  document.querySelectorAll("[shop-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentShopDropdown) return;
    dropdown.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.matches("[m-dropdown-arrow]");
  if (!isDropdownBtn && e.target.closest("[m-dropdown]") != null) return;

  let currentDropdown;
  let currentBtn;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[m-dropdown]");
    currentDropdown.classList.toggle("active");
    currentBtn = e.target.closest("[m-dropdown-arrow]");
    currentBtn.classList.toggle("bxs-chevron-up");
  }
  document.querySelectorAll("[m-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });

  document
    .querySelectorAll("[m-dropdown-arrow].bxs-chevron-up")
    .forEach((i) => {
      if (i === currentBtn) return;
      i.classList.remove("bxs-chevron-up");
    });
});

document.addEventListener("click", (e) => {
  const isDropdownBtn = e.target.matches("[m-snd-btn]");
  if (!isDropdownBtn && e.target.closest("[m-snd-dropdown]") != null) return;

  let currentDropdown;
  let currentBtn;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest("[m-snd-dropdown]");
    currentDropdown.classList.toggle("active");
    currentBtn = e.target.closest("[m-snd-btn]");
    currentBtn.classList.toggle("bxs-chevron-up");
  }
  document.querySelectorAll("[m-snd-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });

  document.querySelectorAll("[m-snd-btn].bxs-chevron-up").forEach((i) => {
    if (i === currentBtn) return;
    i.classList.remove("bxs-chevron-up");
  });
});
// form

document.addEventListener("click", (e) => {
  const isHeart = e.target.matches("[item-heart]");
  let currentHeart = e.target.closest("[item-heart]");
  if (!isHeart) return;
  if (isHeart) {
    currentHeart.classList.toggle("bxs-heart");
  }
});

// AngularJS-----------------------------------------/

const app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
    })
    .when("/appraisal", {
      templateUrl: "appraisal.html",
    })
    .when("/shop", {
      templateUrl: "shop.html",
    });
});

app.controller("MyController", [
  "$scope",
  "$location",
  "$anchorScroll",
  "$http",
  "$filter",
  "$element",
  function ($scope, $location, $anchorScroll, $http, $filter, $element) {
    $scope.gotoCitizenCollection = function () {
      $location.hash("citizen_collection");
      $anchorScroll();
    };
    $scope.GotoEssence = function () {
      $location.hash("switch-essence-collection");
      $anchorScroll();
    };
    $scope.GotoBlog = function () {
      $location.hash("alberto-blog");
      $anchorScroll();
    };
    $scope.scrollTop = function () {
      window.scrollTo(0, 0);
    };
    $scope.GotoFooter = () => {
      $location.hash("footer");
      $anchorScroll();
    };
    // Links
    $scope.OpenWatch = (e) => {
      location.href = "#!shop";
      $scope.MyFilter(e);

      document.querySelectorAll("[filter-watch]").forEach((evt) => {
        if (evt.innerHTML.toLowerCase().includes(e)) {
          evt.classList.add("active");
        }
      });
    };
    // Fetch Data
    $http.get("./watch.json").then((response) => {
      if (sessionStorage.getItem("sessionWatches") == null) {
        sessionStorage.setItem("sessionWatches", JSON.stringify(response.data));
        $scope.watches = JSON.parse(sessionStorage.getItem("sessionWatches"));
      } else {
        $scope.watches = JSON.parse(sessionStorage.getItem("sessionWatches"));
      }
    });
    $scope.MyFilter = (value) => {
      $scope.filter3 = "";
      $scope.watchType = value;
      const sidebar = document.querySelector("[side-bar]");
      sidebar.classList.remove("active");
    };
    {
      document.addEventListener("click", (event) => {
        const isSearch = event.target.matches("[filter-watch]");
        if (!isSearch) {
          return;
        }
        let currentSearch;
        if (isSearch) {
          currentSearch = event.target.closest("[filter-watch]");
          currentSearch.classList.add("active");
        }
        document.querySelectorAll("[filter-watch].active").forEach((search) => {
          if (search === currentSearch) {
            return;
          }
          search.classList.remove("active");
        });
      });
    }
    //sidebar //
    $scope.sideBar = () => {
      const sidebar = document.querySelector("[side-bar]");
      sidebar.classList.add("active");
    };
    $scope.CloseBar = () => {
      const sidebar = document.querySelector("[side-bar]");
      sidebar.classList.remove("active");
    };
    // form;
    {
      const isSignInBtn = document.getElementById("alberto__form");

      $scope.MyForm = () => {
        isSignInBtn.classList.add("active");
        $scope.SignIn();
      };
      $scope.CloseForm = () => {
        isSignInBtn.classList.remove("active");
      };
      document.addEventListener("click", (e) => {
        const current = e.target.matches("#form-overlay");
        if (current) {
          isSignInBtn.classList.remove("active");
        }
      });

      const signIn = document.getElementById("alberto__form-signIN");
      const signUp = document.getElementById("alberto__form-register");
      const signInBtn = document.getElementById("alberto__form-buttons_signIn");
      const signUpBtn = document.getElementById("alberto__form-buttons_signUp");

      $scope.SignIn = () => {
        signIn.classList.add("active");
        signInBtn.classList.add("active");
        signUp.classList.remove("active");
        signUpBtn.classList.remove("active");
      };
      $scope.SignUp = () => {
        signUp.classList.add("active");
        signUpBtn.classList.add("active");
        signIn.classList.remove("active");
        signInBtn.classList.remove("active");
      };
    }

    // mobile menu//
    function Misc() {
      const navbar = document.getElementById("m-navbar");
      const top = document.getElementById("scroll-top");

      $scope.MobileMenu = () => {
        navbar.classList.add("active");
      };
      $scope.CloseMenuMobile = () => {
        navbar.classList.remove("active");
      };
      window.onscroll = () => {
        if (window.pageYOffset >= 780) {
          top.style.display = "flex";
        } else {
          top.style.display = "none";
        }
        navbar.classList.remove("active");
      };
    }
    Misc();
  },
]);
// function fetchData() {
//   fetch("watch.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((products) => {
//       let placeholder = document.querySelector("#placeholder");
//       let out = "";
//       for (let product of products) {
//         out += `
//               <div class="item">
//                 <img
//                   src="${product.imgS}"
//                   alt="item"
//                 />
//                 <div class="item-rating">
//                   <p>-5%</p>
//                   <i item-heart class="bx bx-heart"></i>
//                 </div>
//                 <div class="item-content">
//                   <h3>${product.name}</h3>
//                   <h4>${product.brand}</h4>
//                   <p>$${product.price}</p>
//                   <li><a href="#">ADD TO CART</a></li>
//                 </div>
//               </div>
//               `;
//       }
//       placeholder.innerHTML = out;
//     });
// }
// fetchData();
