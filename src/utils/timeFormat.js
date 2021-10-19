export const timeFormat1 = (time) => {
	const h = Math.floor(time / 3600);
	const m = Math.floor((time % 3600) / 60);
	const s = time % 60;
	let hh = `${h}`;
	if (hh.length == 1) hh = '0' + hh;
	let mm = `${m}`;
	if (mm.length == 1) mm = '0' + mm;
	let ss = `${s}`;
	if (ss.length == 1) ss = '0' + ss;
	return `${hh} : ${mm} : ${ss}`;
};

export const timeFormat2 = (time) => {
	const h = Math.floor(time / 3600);
	const m = Math.floor((time % 3600) / 60);
	const s = time % 60;

	if (h > 0) {
		return `${h} h ${m} m ${s} s`;
	} else if (m > 0) {
		return `${m} m ${s} s`;
	} else {
		return `${s} s`;
	}
};
