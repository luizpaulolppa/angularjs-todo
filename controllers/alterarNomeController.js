(function () {
    "use strict";

    angular.module("app")
        .controller("alterarNomeController", ["$scope", "$location", alterarNomeController]);

    function alterarNomeController($scope, $location) {

        $scope.nome = "";

        var init = function () {
            getNome();
        }
        init();

        $scope.voltar = function() {
            $location.path('/');
        }

        $scope.salvar = function() {
            localStorage.setItem("nome", $scope.nome);
            $scope.nome = "";
            $scope.voltar();
        }
        
        function getNome() {
            var nomeLocal = localStorage.getItem("nome");
            if (nomeLocal) {
                $scope.nome = nomeLocal;
            }
        }


    }

})();