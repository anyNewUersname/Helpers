//Format date 
.replace(/(\d{4})\-(\d{2})\-(\d{2}).*/, '$3-$2-$1') 

//Sort object by value 
_.sortBy(objectToParse, o => { return o.widgetIndex });
