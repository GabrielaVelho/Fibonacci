function fibonacci(){
	var valor = document.getElementById("numero").value;
	var resultado;
	var vetor = [];
	var aux = 2;
	vetor[0] = 0;
	vetor[1] = 1;
	vetor[aux] = vetor[0] + vetor[1];
	
	while(vetor[aux] < valor){
		console.log(aux);
		aux++;
		console.log(aux);
		vetor[aux] = vetor[aux-1]+vetor[aux-2];
		console.log(vetor[aux]);
	}
	
	document.getElementById("resultado").innerHTML = vetor;
	
}