export function setUserName(name) {
	// return {
	// 	type: 'SET_NAME',
	// 	payload: name
	// }
	// return (dispath) => {
	// 	setTimeout(() => {
	// 		dispath({
	// 			type: 'SET_NAME',
	// 			payload: name
	// 		});
	// 	},2000);
	// }
	return {
		type: 'SET_NAME',
		payload: new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve(name);
			},3000);
		})
	}
}

export function setUserAge(age) {
	return {
		type: 'SET_AGE',
		payload: age
	}
}