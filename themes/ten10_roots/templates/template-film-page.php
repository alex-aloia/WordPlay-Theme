<?php
/*
Template Name: Film Page
*/
global $post;
if ( ! empty( $post ) ) {
//    $slider_imgs = get_post_meta(get_the_ID(), '_cmb_slider_home', true);
	$featured_img_full = get_post_meta( $post->ID, '_cmb_featured_img_full', true );
	$url               = get_post_meta( $post->ID, '_cmb_video1_embed', true );
	$url2              = get_post_meta( $post->ID, '_cmb_video2_embed', true );

//	$url = esc_html( cmb_get_option( 'cmb_options', 'video1_embed' ) );
}
?>



<section class="content-wrap template-film">
	<?php while ( have_posts() ) : the_post(); ?>
		<div class="featured_img_full">
			<img src="<?php echo $featured_img_full; ?>" class="img-responsive">
		</div>

		<div class="left_rail">
			<div class="vid_holder">
				<?php echo wp_oembed_get( $url , array('width'=>350)); ?>
			</div>
			<div class="vid_holder">
				<?php echo wp_oembed_get( $url2 , array('width'=>350)); ?>
			</div>
			<?php dynamic_sidebar('sidebar-left-rail'); ?>
		</div>

		<div class="content">
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		</div>
	<?php endwhile; ?>
</section>








