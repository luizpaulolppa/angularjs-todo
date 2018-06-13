(function () {
    "use strict";

    angular.module("app")
        .service("todosService", todosService);

    function todosService() {

        function getUUID() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        var getTodos = function () {
            var todos = localStorage.getItem("todos");
            if (todos) {
                todos = JSON.parse(todos);
            } else {
                todos = [];
            }
            return todos;
        }

        var postTodo = function (todo) {
            var todos = getTodos();
            todo.id = getUUID();
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));
        }

        var deleteTodo = function (id) {
            var todos = getTodos();
            if (todos && todos.length) {
                for (var t = 0; t < todos.length; t++) {
                    var todo = todos[t];
                    if (todo.id === id) {
                        var indiceTodo = todos.indexOf(todo);
                        todos.splice(indiceTodo, 1);
                        localStorage.setItem("todos", JSON.stringify(todos));
                    }
                }
            }
        }

        var checkTodo = function (id) {
            var todos = getTodos();
            if (todos && todos.length) {
                for (var t = 0; t < todos.length; t++) {
                    var todo = todos[t];
                    if (todo.id === id) {
                        todo.concluida = !todo.concluida;
                    }
                }

                localStorage.setItem("todos", JSON.stringify(todos));
            }
        }

        return {
            getTodos: getTodos,
            postTodo: postTodo,
            deleteTodo: deleteTodo,
            checkTodo: checkTodo
        }
    }

})();