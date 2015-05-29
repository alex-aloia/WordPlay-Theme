<?php
/*
Template Name: Feature Image - Third
*/

global $post;
if(!empty($post)) {
    $img = get_post_meta( $post->ID, '_cmb_img_third', true );
    }

?>





<section class="content-wrap template-thirds">
<?php while (have_posts()) : the_post();?>
    <div class="featured col-sm-4">
        <img src="<?php echo $img; ?>" class="img-responsive">
    </div>
    <div class="col-sm-8">
        <div class="entry-content">
            <?php the_content(); ?>
        </div>
    </div>
<?php endwhile; ?>
</section>



