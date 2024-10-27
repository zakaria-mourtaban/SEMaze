var startdiv = document.getElementById("start")
var enddiv = document.getElementById("end")
var boundingdivs = document.querySelectorAll(".boundary")
var gamestarted = false
startdiv.addEventListener("mouseleave",function(event)
{
	var rect = startdiv.getBoundingClientRect()
	if (event.clientX > rect.right)
		gamestarted = true
})
boundingdivs.forEach(function(element){
	element.addEventListener("mouseover",function(){
		if (gamestarted === true)
		{
			alert("you lose :(")
			location.reload()
		}
	})
})
enddiv.addEventListener("mouseover", function(){
	if (gamestarted === true)
	{
		alert("You Win!!!")
		location.reload
	}
})