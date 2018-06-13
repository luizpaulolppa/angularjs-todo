(function () {
    "use strict";

    angular.module("app")
        .controller("homeController", ["$scope", "$location", "todosService", homeController]);

    function homeController($scope, $location, todosService) {

        $scope.nome = "";
        $scope.todos = [];

        var init = function () {
            getNome();
            getTodos();
        }
        init();

        $scope.alterarNome = function() {
            $location.path('/alterar-nome');
        }

        $scope.novaTodo = function() {
            $location.path('/nova-todo');
        }

        $scope.excluirTodo = function(todo) {
            todosService.deleteTodo(todo.id);
            getTodos();
        }

        $scope.check = function(todo) {
            todosService.checkTodo(todo.id);
            getTodos();
        }

        function getTodos() {
            $scope.todos = todosService.getTodos();
        }

        function getNome() {
            var nomeLocal = localStorage.getItem("nome");
            if (nomeLocal) {
                $scope.nome = nomeLocal;
            } else {
                $scope.nome = "Clique e coloque seu nome aqui! (:";
            }
        }

    }

})();