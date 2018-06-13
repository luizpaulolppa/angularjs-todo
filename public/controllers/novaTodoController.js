(function () {
    "use strict";

    angular.module("app")
        .controller("novaTodoController", ["$scope", "$location", "todosService", novaTodoController]);

    function novaTodoController($scope, $location, todosService) {

        $scope.descricao = "";
        $scope.dataEvento = "";

        $scope.voltar = function () {
            $location.path('/');
        }

        $scope.salvar = function () {
            var todo = {
                id: 1,
                descricao: $scope.descricao,
                data: $scope.dataEvento,
                concluida: false
            };
            todosService.postTodo(todo);
            $scope.voltar();
        }

    }

})();