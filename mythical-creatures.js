const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const Wname=mythicalCreatures.find(function(val){
	return (val.type==='Water')
});
console.log(Wname.name);

console.log(mythicalCreatures.findIndex(function(val){
	return(val.name=="Griffin");
})) ;

console.log(mythicalCreatures.find(function(val){
	return(val.lastSeen=="Enchanted Forest");
})) ;