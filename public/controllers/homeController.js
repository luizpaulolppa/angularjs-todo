(function () {
    "use strict";

    angular.module("app")
        .controller("homeController", ["$scope", controller]);

    function controller($scope) {

        $scope.nome = "";
        $scope.todos = [];

        var init = function () {
            getNome();
            getTodos();
        }

        $scope.alterarNome = function() {
            console.log("alterarNome");
        }

        function getTodos() {
            var todosLocal = localStorage.getItem("todos");
            if (todosLocal) {
                $scope.todos = todosLocal;
            } else {
                $scope.todos = [
                    { id: 1, descricao: "Trabalho de português", data: "13/06/2018", concluida: false },
                    { id: 2, descricao: "Entregar presente", data: "13/06/2018", concluida: true },
                    { id: 3, descricao: "Acenar para amigo", data: "13/06/2018", concluida: false },
                    { id: 4, descricao: "Testar aplicação", data: "13/06/2018", concluida: true },
                    { id: 5, descricao: "Cumprimentar", data: "13/06/2018", concluida: false },
                    { id: 6, descricao: "Acenar para amigo", data: "13/06/2018", concluida: false },
                    { id: 7, descricao: "Testar aplicação", data: "13/06/2018", concluida: true },
                    { id: 8, descricao: "Cumprimentar", data: "13/06/2018", concluida: false },
                    { id: 9, descricao: "Testar aplicação", data: "13/06/2018", concluida: true },
                    { id: 10, descricao: "Cumprimentar", data: "13/06/2018", concluida: false },
                    { id: 11, descricao: "Acenar para amigo", data: "13/06/2018", concluida: false },
                    { id: 12, descricao: "Testar aplicação", data: "13/06/2018", concluida: true },
                    { id: 13, descricao: "Cumprimentar", data: "13/06/2018", concluida: false },
                ];
            }
        }

        function getNome() {
            var nomeLocal = localStorage.getItem("nome");
            if (nomeLocal) {
                $scope.nome = nomeLocal;
            } else {
                $scope.nome = "Clique e coloque seu nome aqui! (:";
            }
        }


        init();
    }

})();