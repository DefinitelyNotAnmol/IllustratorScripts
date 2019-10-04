var doc=app.activeDocument;
var sym = doc.symbols;  

if(doc.selection.length>0)
{
	try{
		for (i = 0; i < doc.selection.length; i++) {
			var iObj = doc.selection[i];
			
			var currDot=doc.symbolItems.add(sym[Math.floor(Math.random() * sym.length)]);
			currDot.height = iObj.height;
			currDot.width = iObj.width;
			currDot.position=[iObj.left, iObj.top];
			iObj.remove();
		}
	}
	catch(e) {
		alert("Unknown error occured.");
	}
}
else {
	alert("There is no selection");
}