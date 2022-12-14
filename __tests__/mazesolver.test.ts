import { mazeSolver, Point } from '../algos/mazesolver';

test('maze solver', function () {
	const maze = [
		'xxxxxxxxxx x',
		'x        x x',
		'x        x x',
		'x xxxxxxxx x',
		'x          x',
		'x xxxxxxxxxx'
	];

	const mazeResult = [
		{ y: 10, x: 0 },
		{ y: 10, x: 1 },
		{ y: 10, x: 2 },
		{ y: 10, x: 3 },
		{ y: 10, x: 4 },
		{ y: 9, x: 4 },
		{ y: 8, x: 4 },
		{ y: 7, x: 4 },
		{ y: 6, x: 4 },
		{ y: 5, x: 4 },
		{ y: 4, x: 4 },
		{ y: 3, x: 4 },
		{ y: 2, x: 4 },
		{ y: 1, x: 4 },
		{ y: 1, x: 5 }
	];

	// there is only one path through
	const result = mazeSolver(maze, 'x', { y: 10, x: 0 }, { y: 1, x: 5 });
	expect(drawPath(maze, result)).toEqual(drawPath(maze, mazeResult));
});

function drawPath(data: string[], path: Point[]) {
	const data2 = data.map((row) => row.split(''));
	path.forEach((p) => {
		if (data2[p.y] && data2[p.y][p.x]) {
			data2[p.y][p.x] = '*';
		}
	});
	return data2.map((d) => d.join(''));
}
