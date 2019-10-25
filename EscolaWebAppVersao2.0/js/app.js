// Inicializar o módulo.
let nomeapp = "EscolaWebApp";
let modulos = [];
var app = angular.module(nomeapp, modulos);

//Estrura básica para uma função no controlador.
var homeController = function($scope){
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller("HomeController", homeController);


var alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.nascimento = "";
  $scope.id_endereço = "";
  $scope.Curso = "";
}

app.controller('AlunoController', alunoController);


var campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";
}

app.controller('CampusController', campusController);


var cursoController = function($scope){
  $scope.nome = "";
  $scope.turno = "";
}

app.controller('CursoController', cursoController);


var disciplinaController = function($scope){
  $scope.nome = "";
  $scope.id = "";
}

app.controller('DisciplinaController', disciplinaController);


var enderecoController = function($scope){
  $scope.Logradouro = "";
  $scope.Complemento = "";
  $scope.Bairro = "";
  $scope.CEP = "";
  $scope.Numero = "";
}

app.controller('EnderecoController', enderecoController);

var escolaController = function($scope){
  $scope.nome = "";
  $scope.endereço = "";
  $scope.campus = "";
}
app.controller('EscolaController', escolaController);

var professorController = function($scope){
  $scope.nome = "";
  $scope.endereco = "";
}

app.controller('ProfessorController', professorController);

var turmaController = function($scope){
  $scope.nome = "";
  $scope.nome = "";
}

app.controller('TurmaController', turmaController);

var turnoController = function($scope){
  $scope.nome = "";
}

app.controller('TurnoController', turnoController);
