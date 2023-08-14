export const STAT_LIST = [
	{
		value:'hp',
		name: "Hp"
	},
	{
		value:'defense',
		name: "Defense"
	},
	{
		value:'attack',
		name: "Attack"
	},
	{
		value:'speed',
		name: "Speed"
	},
	{
		value:'special-attack',
		name: "Sp.Attack"
	},
	{
		value:'special-defense',
		name: "Sp.Defence"
	},
];

export const getStats = (stats) => {
	let list = [];
	STAT_LIST.map(({value, name}) => {
		stats.find(item => {
			if (item.stat.name === value) {
				return list.push({...item, name: name});
			}
		});
	});

	return list;
};
