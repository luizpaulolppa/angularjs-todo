(function () {
    "use strict";

    angular.module("app")
        .service("todosService", todosService);

    function todosService() {

        var getTodos = function() {
            var todos = localStorage.getItem("todos");
            if (todos) {
                todos = JSON.parse(todos);
            } else {
                todos = [];
            }
            return todos;
        }

        var postTodo = function(todo) {
            var todos = getTodos();
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        return {
            getTodos: getTodos,
            postTodo: postTodo
        }
    }

})();