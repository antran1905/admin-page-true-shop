export const sortByName = (inputData: any) => {
	const data = inputData;
	data.sort((a: { name: number }, b: { name: number }) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
	return data;
};
