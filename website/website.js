function display (selected)
{
	document.getElementById("text").innerHTML = "Text related to " + selected + " project";
	document.getElementById("home").style.display="block";
	document.getElementById("texty").style.display="none";
}

function user (name)
{
	document.getElementById("text").innerHTML = "Text related to " + name;
	document.getElementById("home").style.display="block";
	document.getElementBystyle.verticalAlignId("texty").style.display="none";
}

function Info()
{
	document.getElementById("texty").style.display="none";
	document.getElementById("home").style.display="block";
}
