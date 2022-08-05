<?php
/**
 * Register and Render Block
 *
 * @since   1.0.0
 * @package Site_Functionality
 */
namespace Site_Functionality\Blocks\Tout;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render Block
 *
 * @param array $block_attributes
 * @param string $content
 * @return string
 */
function render( $attributes, $content, $block ) {
    $wrapper_attributes = \get_block_wrapper_attributes();

    $output = '<div ' . $wrapper_attributes . '>';

    if( isset( $attributes['url'] ) && $attributes['url'] ) {
        $output .= sprintf( '<a href="%1$s"%2$s%3$s class="tout__link">', 
            \esc_url( $attributes['url'] ), 
            ( isset( $attributes['linkTarget'] ) && $attributes['linkTarget'] ) ? ' target="' . $attributes['linkTarget'] . '"' : '',
            ( isset( $attributes['linkTarget'] ) && $attributes['linkTarget'] ) ? ' rel="noreferrer noopener"' : ''
        );
    }

    foreach ( $block->inner_blocks as $inner_block ) { 
        $output .= \apply_filters( 'the_content', $inner_block->render() );
    }

    if( isset( $attributes['url'] ) && $attributes['url'] ) {
        $output .= '</a>';
    }

    $output .= '</div>';

    return $output;
}

/**
 * Registers the `site-functionality/tout` block on the server.
 */
function register() {
	\register_block_type(
		__DIR__,
		[
			'render_callback' 	=> __NAMESPACE__ . '\render',
		]
	);
}
add_action( 'init', __NAMESPACE__ . '\register' );