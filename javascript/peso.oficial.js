window.onload = function(){ 
  var objBotaoInserir = document.getElementById("botaoInserir");
  var objH3Data = document.getElementById("data");
  var objH3Peso = document.getElementById("peso");
  
 
  var objPeso;
  var objData;

  var data= new Date()
  var dia = data.getDate()
  var mes = data.getMonth()
  var ano = data.getFullYear()

  objBotaoInserir.onclick = function()
  {
  	objPeso = Number(prompt("Peso"));

  	objH3Data.innerHTML = dia+"/"+(mes+1)+"/"+ano;
  	objH3Peso.innerHTML = objPeso;
    pesoInserido();  	
  }
  
  var objBotaoEditar = document.getElementById("botaoEditar");

  objBotaoEditar.onclick = function()
  {
  	objData = prompt("Editar Data");
  	objPeso = Number(prompt("Editar Peso"));

  	objH3Data.innerHTML = objData;
  	objH3Peso.innerHTML = objPeso;

  	pesoEditado();  	
  }

  var objBotaoExcluir = document.getElementById("botaoExcluir");

  objBotaoExcluir.onclick = function(){
  	objH3Data.innerHTML = "";
  	objH3Peso.innerHTML = "";
	pesoExcluido();
  }


  function pesoInserido(){
  	window.alert("Peso inserido com sucesso!");
  }
  function pesoEditado(){
  	window.alert("Peso editado sucesso!");
  }
  function pesoExcluido(){
  	window.alert("Peso Excluído com sucesso!")
  }
} 