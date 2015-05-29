<?php
/*
Template Name: Feature Image - Split
*/

global $post;
if(!empty($post)) {
    $img = get_post_meta( $post->ID, '_cmb_img_split', true );

    }
?>




<section class="content-wrap template-split">
<?php while (have_posts()) : the_post(); ?>
    <div class="featured">
        <img src="<?php echo $img; ?>" class="img-responsive">
    </div>
    <div class="content">
        <article class="entry-content">
            <?php the_content(); ?>
        </article>
    </div>
<?php endwhile; ?>
</section>



