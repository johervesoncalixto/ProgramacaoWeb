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



var alunoController = function($scope, alunoApi) {
  $scope.aluno = {};

  $scope.cadastrar = function() {
    alunoApi.cadastrar($scope.aluno)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('AlunoController', alunoController);


var alunoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/alunos")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/alunos/" + encodeURI(id))
  };

  var _cadastrar = function(aluno) {
    return $http.post(baseUrl + "/aluno", aluno)
  };

  var _atualizar = function(aluno) {
    return $http.put(baseUrl + "/aluno/" + encodeURI(id), aluno)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("alunoApi", alunoFactory);

//Campus
var campusController = function($scope, campusApi) {
  $scope.campus = {};

  $scope.cadastrar = function() {
    campusApi.cadastrar($scope.campus)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('CampusController', campusController);


var campusFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/campi")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/campi/" + encodeURI(id))
  };

  var _cadastrar = function(campus) {
    return $http.post(baseUrl + "/campus", campus)
  };

  var _atualizar = function(campus) {
    return $http.put(baseUrl + "/campus/" + encodeURI(id), campus)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("campusApi", campusFactory);

//Curso
var cursoController = function($scope, cursoApi) {
  $scope.curso = {};

  $scope.cadastrar = function() {
    cursoApi.cadastrar($scope.curso)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('CursoController', cursoController);


var cursoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/cursos")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/cursos/" + encodeURI(id))
  };

  var _cadastrar = function(curso) {
    return $http.post(baseUrl + "/curso", curso)
  };

  var _atualizar = function(curso) {
    return $http.put(baseUrl + "/curso/" + encodeURI(id), curso)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("cursoApi", cursoFactory);

//Disciplina
var disciplinaController = function($scope, disciplinaApi) {
  $scope.disciplina = {};

  $scope.cadastrar = function() {
    disciplinaApi.cadastrar($scope.disciplina)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('DisciplinaController', disciplinaController);


var disciplinaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/disciplinas")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/disciplinas/" + encodeURI(id))
  };

  var _cadastrar = function(disciplina) {
    return $http.post(baseUrl + "/disciplina", disciplina)
  };

  var _atualizar = function(disciplina) {
    return $http.put(baseUrl + "/disciplina/" + encodeURI(id), disciplina)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("disciplinaApi", disciplinaFactory);

//Endereco
var enderecoController = function($scope, enderecoApi) {
  $scope.endereco = {};

  $scope.cadastrar = function() {
    enderecoApi.cadastrar($scope.endereco)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('EnderecoController', enderecoController);


var enderecoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/enderecos")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/enderecos/" + encodeURI(id))
  };

  var _cadastrar = function(endereco) {
    return $http.post(baseUrl + "/endereco", endereco)
  };

  var _atualizar = function(curso) {
    return $http.put(baseUrl + "/endereco/" + encodeURI(id), endereco)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("enderecoApi", enderecoFactory);

//Escola
var escolaController = function($scope, escolaApi) {
  $scope.escola = {};

  $scope.cadastrar = function() {
    escolaApi.cadastrar($scope.escola)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('EscolaController', escolaController);


var escolaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/escolas")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/escolas/" + encodeURI(id))
  };

  var _cadastrar = function(escola) {
    return $http.post(baseUrl + "/escola", escola)
  };

  var _atualizar = function(escola) {
    return $http.put(baseUrl + "/escola/" + encodeURI(id), escola)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("escolaApi", escolaFactory);

//Professor
var professorController = function($scope, professorApi) {
  $scope.professor = {};

  $scope.cadastrar = function() {
    professorApi.cadastrar($scope.professor)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('ProfessorController', professorController);


var professorFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/professores")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/professores/" + encodeURI(id))
  };

  var _cadastrar = function(professor) {
    return $http.post(baseUrl + "/professor", professor)
  };

  var _atualizar = function(professor) {
    return $http.put(baseUrl + "/professor/" + encodeURI(id), professor)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("professorApi", professorFactory);

//Turma
var turmaController = function($scope, turmaApi) {
  $scope.turma = {};

  $scope.cadastrar = function() {
    turmaApi.cadastrar($scope.turma)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('TurmaController', turmaController);


var turmaFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/turmas")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/turmas/" + encodeURI(id))
  };

  var _cadastrar = function(turma) {
    return $http.post(baseUrl + "/turma", turma)
  };

  var _atualizar = function(turma) {
    return $http.put(baseUrl + "/turma/" + encodeURI(id), turma)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("turmaApi", turmaFactory);

//Turno
var turnoController = function($scope, turnoApi) {
  $scope.turno = {};

  $scope.cadastrar = function() {
    turnoApi.cadastrar($scope.turno)
      .then(function(response) {})
      .catch(function(error) {});
  }
}

app.controller('TurnoController', turnoController);


var turnoFactory = function($http) {

  var baseUrl = "localhost:5000";

  var _listar = function() {
    return $http.get(_baseUrl + "/turnos")
  };

  var _buscarPorId = function(id) {
    return $http.get(_baseUrl + "/turnos/" + encodeURI(id))
  };

  var _cadastrar = function(turno) {
    return $http.post(baseUrl + "/turno", turno)
  };

  var _atualizar = function(turno) {
    return $http.put(baseUrl + "/turno/" + encodeURI(id), turno)
  };

  return {
    listar: _listar,
    buscarPorId: _buscarPorId,
    cadastrar: _cadastrar,
    atualizar: _atualizar
  };
}

app.factory("turnoApi", turnoFactory);

