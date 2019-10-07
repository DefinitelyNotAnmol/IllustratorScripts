var artboard = app.activeDocument;
var symbols = artboard.symbols;  

if(artboard.selection.length > 0) {
	try {
		for (i = artboard.selection.length-1; i >= 0; i--) {
			var selectedObject = artboard.selection[i];
			
			var symbol = artboard.symbolItems.add(symbols[Math.floor(Math.random() * symbols.length)]);
			symbol.height = selectedObject.height;
			symbol.width = selectedObject.width;
			symbol.position = [selectedObject.left, selectedObject.top];
			selectedObject.remove();
		}
	}
	catch(e) {
		alert("Unknown error occured.");
	}
}
else {
	alert("There is no selection");
}