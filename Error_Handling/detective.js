function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const no_missions= 20;
const success_no = 13;
const failed_no = 1;
const attendance = 3;
let res=0;

for (let i=0; i<no_missions; i++){
	try {
		mysteryOperation();
		res= res + success_no;

	}
	catch{
		res=res+1;
	}
	finally{
		res= res + attendance;
	}
}
console.log(res);
