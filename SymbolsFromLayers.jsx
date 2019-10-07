var artboard = app.activeDocument;  
var symbols = artboard.layers;    

for (var i = 0; i < symbols.length; i++) {  
    var symbol = symbols[i].groupItems.add();  
    var items = symbols[i].pageItems;  
    for (var j = items.length-1; j > 0; j--) {  
        items[j].moveToBeginning(symbol);  
    };  

    artboard.symbols.add(symbol);
};  