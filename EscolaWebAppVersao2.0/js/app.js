// Inicializar o módulo.
let nomeapp = "EscolaWebApp";
let modulos = [];
var app = angular.module(nomeapp, modulos);

//Estrura básica para uma função no controlador.
var meuPrimeiroController = function($scope){
  $scope.logradouro = "Outro valor";
  $scope.numero1 = 0;
  $scope.numero2 = 0;

  $scope.somar = function(numero1, numero2){
    $scope.resultado = numero1 + numero2;
  }
}

app.controller("MeuPrimeiroController", meuPrimeiroController);



var MeuSegundoController = function($scope){
}

app.controller("MeuSegundoController", meuSegundoController);
