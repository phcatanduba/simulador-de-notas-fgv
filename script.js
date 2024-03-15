
			console.log("test");
			var botaoCalcular = document.querySelector("#calcular");
			var avaliacaoIntermediaria;
			var avaliacaoFinal;

        var listenAI = document.querySelector(".somaAI");
        var listenAO = document.querySelector(".resultado");
        var listenAF = document.querySelector(".nota-final");

        listenAI.addEventListener("change", (event) => {
          let ai = event.target.value
          if (listenAO.value) {
            listenAF.value = (0.45 * ai + 0.55 * listenAO.value).toFixed(2)
          } else if (listenAF.value) {
            listenAO.value = ((listenAF.value - 0.45 * ai) / 0.55).toFixed(2)
          }
        })
        listenAO.addEventListener("change", (event) => {
          let ao = event.target.value
          if (listenAI.value) {
            listenAF.value = (0.45 * listenAI.value + 0.55 * ao).toFixed(2)
          } else if (listenAF.value) {
            listenAI.value = ((listenAF.value - 0.55 * ao) / 0.45).toFixed(2)
          }
        })
        listenAF.addEventListener("change", (event) => {
          let af = event.target.value
          if (listenAI.value) {
            listenAO.value = ((af - 0.45 * listenAI.value) / 0.55).toFixed(2)
          } else if (listenAO.value) {
            listenAI.value = ((af - 0.55 * listenAO.value) / 0.45).toFixed(2)
          }
        })

			botaoCalcular.addEventListener("click", function(event) {
				event.preventDefault();

				var botaoCalcular = document.querySelector("#calcular");
				var nota1 = document.querySelector("#nota1");
				var nota2 = document.querySelector("#nota2");
				var nota3 = 0;
				var nota4 = document.querySelector("#nota4");
				var nota5 = 0;
				var nota6 = 0;
				var nota7 = document.querySelector("#nota7");

				avaliacaoIntermediaria = parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota4.value) + parseFloat(nota7.value);
				console.log(avaliacaoIntermediaria);
				avaliacaoFinal = (60 - (0.45 * avaliacaoIntermediaria))/0.55;
				avaliacaoIntermediaria = avaliacaoIntermediaria.toFixed(2);
				avaliacaoFinal = avaliacaoFinal.toFixed(2);

        if(isNaN(avaliacaoFinal)) {
          alert("Digite uma nota válida em todos os campos");
          return
        }
		

				if(nota1.value > 10 || nota2.value > 20 || nota4.value > 30 ||         nota7.value > 40){
					alert("Digite uma nota válida.\n\nOs JobTasks valem no máximo 20 pontos o prmeiro e 30 pontos o segundo. O Harvard Case vale no máximo 40 pontos.");
					form.reset();
				}

        var mostrarAtividadeIntermediaria = document.querySelector(".somaAI");
        var mostrarNota = document.querySelector(".resultado");
        var mostrarNotaFinal = document.querySelector(".nota-final");
        mostrarNota.value = avaliacaoFinal;
        mostrarAtividadeIntermediaria.value = avaliacaoIntermediaria;
        mostrarNotaFinal.value = (0.45 * avaliacaoIntermediaria + 0.55 * avaliacaoFinal).toFixed(2);

				var form = document.querySelector("#tabela");
				form.reset();
			});


			function apenasNumero(evt) {
				var theEvent = evt || window.event;
				var key = theEvent.keyCode || theEvent.which;
				key = String.fromCharCode( key );
				//var regex = /^[0-9.,]+$/;
				var regex = /^[0-9.]+$/;
				if( !regex.test(key) ) {
				    theEvent.returnValue = false;
				    if(theEvent.preventDefault) theEvent.preventDefault();
				}
			}