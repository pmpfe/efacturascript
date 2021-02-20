



/* PREPARA FORM para atribuição automática */
function setup_form(){
var fdiv=document.createElement("div");
/* Opções de categorias */
var options="";
options+="<option value='C99'> Outro </option>"
options+="<option value='C05'> Saúde </option>"
options+="<option value='C06'> Educação </option>"
options+="<option value='C07'> Imóveis </option>"
options+="<option value='C08'> Lares </option>"
options+="<option value='C01'> Manutenção/reparação auto  </option>"
options+="<option value='C02'> Manutenção/reparação motos </option>"
options+="<option value='C03'> Alojamento, restauração e similares </option>"
options+="<option value='C04'> Cabeleireiros </option>"
options+="<option value='C09'> Veterinários </option>"
options+="<option value='C10'> Passes </option>"

fdivh=" <form style='display:float; z-index:1; position: fixed; left:20px; top:200px; border: solid thick blue; padding:30px; background-color: #ddddff;' method='' id='botaoform'>"
fdivh = fdivh+" <input type='text' name='strinput' id='strinput' size='30' value='expressao a procurar'/><br/>"
fdivh = fdivh+" <select id='botaoselect' name='botaoselect'>"+options+"</select><br/><button type='button' id='botaofaturas' onclick='atribuitodas()'>Atribuir</button></form>";

	fdiv.innerHTML=fdivh;
	document.body.appendChild(fdiv);
	document.fdiv=fdiv;
	document.bsel = document.fdiv.getElementsByTagName('select');
}

/* constroi array de faturas */

function setup_facturas(){
	var trs=document.getElementsByTagName('tr'); 
	var docs=[]; 
	/* constroi array de facturas */
	for(i=0;i<trs.length;i++){
			if(trs[i].id.search("documento_")==0){
			  docs[docs.length]=trs[i];
		}
	}
document.docs=docs;
}

function atribuitodas(){
	var reg = new RegExp(document.getElementById('strinput').value, "i");
  for(i in document.docs){
 		var comerciante = document.docs[i].firstChild.textContent;
    if(comerciante.match(reg)!=null){
       document.docs[i].firstChild.textContent = comerciante + "+";
       var botoes = document.docs[i].lastElementChild.getElementsByTagName('button')
       for(j in botoes)
         if(botoes[j].value==document.bsel.botaoselect.value) botoes[j].click();
    }
  }  
}

setup_facturas();
setup_form();



  