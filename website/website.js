function display (selected)
{
	document.getElementById("texty").innerHTML = "Text related to " + selected + " project.";
	document.getElementById("texty").style.display="block";
	document.getElementById("block").style.display="none";
    
}

function user (name)
{
	document.getElementById("texty").innerHTML = "Text related to " + name;
	document.getElementById("texty").style.display="block";
	document.getElementById("block").style.display="none";
}

function Info()
{
	document.getElementById("texty").style.display="none";
	document.getElementById("home").style.display="block";
}
