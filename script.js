function valider(){
  nom=document.getElementById('nom').value;
  prenom=document.getElementById('prenom').value;
  if((!nom)&& (!prenom)){
    alert("veuillez remplir ces champs");
  }else{
    alert("vous avez valider l'inscription");
  }
}