function display (selected)
{
	document.getElementById("information").innerHTML = "Text related to " + selected + " project";
	document.getElementById("home").style.display="block";
	document.getElementById("texty").style.display="none";
    
}

function user (name)
{
	document.getElementById("information").innerHTML = "Text related to " + name;
	document.getElementById("home").style.display="block";
	document.getElementBysId("texty").style.display="none";
}

function Info()
{
	document.getElementById("texty").style.display="none";
	document.getElementById("home").style.display="block";
}
