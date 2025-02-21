/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings 
//of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

function animal_reg(...names){
	console.log(names);
}
animal_reg('hen','cat','dog','mouse');

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of 
//protected areas within the sanctuary.

const protectedArea=[...forestHabitats,...savannahHabitats];
console.log(protectedArea);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. 
//Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const rhinoNewStatus ={
	...rhinoStatus,
	population: 480,
	habitat: 'Forest A'
};
console.log(rhinoNewStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics`
// property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfileCopy ={
	...lionProfile,
	age:6,
	genetics:"Diverse"
};
console.log(lionProfileCopy);
console.log(lionProfile);
/*
 * Observations:Observations:
 * Modifying a property in the copied object does not affect the original object because the spread operator creates a shallow copy of the object.
 * This means top-level properties are duplicated and assigned new memory space.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const ecosystemHealthCopy ={
	...ecosystemHealth
	//foodSupply:{...ecosystemHealth.foodSupply, herbivores: "Plentiful"} //Since foodSupply is an object, spreading it ensures that the original ecosystemHealth.foodSupply is not mutated.
};
ecosystemHealthCopy.foodSupply.herbivores = 'nil';
console.log(ecosystemHealthCopy);
console.log(ecosystemHealth);
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. 
//Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect 
//both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * Without spreading foodSupply, both objects would share the same reference.
Changing ecosystemHealthCopy.foodSupply.herbivores would also modify ecosystemHealth.foodSupply.herbivores.
 */
