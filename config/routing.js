(function () {
    "use strict"

    angular.module("app")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    controller: "homeController",
                    templateUrl: "views/home.html"
                })
                .when("/alterar-nome", {
                    controller: "alterarNomeController",
                    templateUrl: "views/alterar-nome.html"
                })
                .when("/nova-todo", {
                    controller: "novaTodoController",
                    templateUrl: "views/nova-todo.html"
                })
                
                .otherwise({redirectTo: '/'});
        });

})();