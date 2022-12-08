const list= document.querySelectorAll('.list');
		function activeLink(){
			list.forEach((item) =>
			item.classList.remove('active'));
			console.log(this)
			this.classList.add('active');
		}
		list.forEach((item)=>
			item.addEventListener('click',activeLink));

	

doct1={
	name:"Dr anderson",
	speciality:"anesthesiology",
	contact:50235412
}

function makeDoct(name,speciality,contact){
	return {
	name : name,
	speciality:speciality,
	contact:contact
      }
}
// var doct1=makeDoct(name,speciality,contact)
// var doct2=makeDoct(name,speciality,contact)
// var doct3=makeDoct(name,speciality,contact)
// var doct4=makeDoct(name,speciality,contact)
// var doct5=makeDoct(name,speciality,contact)
// var doct6=makeDoct(name,speciality,contact)
// var doct7=makeDoct(name,speciality,contact)
// var doct8=makeDoct(name,speciality,contact)
// var doctors=[doct1,doct2,doct3,doct4,doct5,doct6,doct7,doct8]
const specialities=["Anesthesiology","cardiologists","psychiatry","paediatrics","orthopedics"]




var  x = `${specialities} hhhh`
$(document).ready(function(){
	function showSpe(){
		console.log("hiiiiiiii")
	for(var i=0;i<specialities.length;i++){
		console.log(specialities[i])
		$(".dropdown-content").append(`<p id="para" '${specialities[i]}'>${specialities[i]}</p>`)
	}

}

showSpe()

})