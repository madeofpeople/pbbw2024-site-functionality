import { registerBlockType, registerBlockCollection } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './filters';

import * as linkGroup from './link-group';
import * as tout from './linked-article';

const blocks = [
	linkGroup,
	tout
];

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}

	const { name, settings } = block;

	registerBlockType( name, {
		...settings,
	} );
};

/**
 * Function to register blocks
 */
export const registerBlocks = () => {
	blocks.forEach( registerBlock );
};

registerBlocks();
