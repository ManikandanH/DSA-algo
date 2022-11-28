import { BinaryNode } from '../algos/binarytreepreorder';

export const tree: BinaryNode<number> = {
	value: 20,
	right: {
		value: 50,
		right: {
			value: 100,
			right: null,
			left: null
		},
		left: {
			value: 30,
			right: {
				value: 45,
				right: null,
				left: null
			},
			left: {
				value: 29,
				left: null,
				right: null,
			}
		}
	},
	left: {
		value: 10,
		right: {
			value: 15,
			left: null,
			right: null
		},                       
		left: {
			value: 5,
			right: {
				value: 7,
				left: null,
				right: null
			},
			left: null
		}
	}
}
