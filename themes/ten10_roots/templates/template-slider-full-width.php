<?php
/*
Template Name: Slider - Full Width
*/

global $post;
if(!empty($post)) {
    $slider_imgs = get_post_meta( get_the_ID(), '_cmb_slider_full', true );
    }
?>


<?php while (have_posts()) : the_post(); ?>









    <section id="widget_home" class="row">
        <div id="projects_carousel" class="col-sm-12 carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ul class="carousel-indicators">
            </ul>

            <div class="carousel-inner">
                <!-- Wrapper for slides -->
                <?php
                $entries = get_post_meta(get_the_ID(), '_cmb_repeat_group', true);
                foreach ((array)$entries as $key => $entry) {
                    $img = $title = $desc = $caption = '';
                    if (isset($entry['title']))
                        $title = esc_html($entry['title']);
                    if (isset($entry['description']))
                        //    $desc = wpautop($entry['description']);
                        $desc = $entry['description'];
                    if (isset($entry['image'])) {
                        $img = $entry['image'];
                        // $img = wp_get_attachment_image( $entry['image_id'], 'share-pick', null, array(
                        //     'class' => 'thumb',
                        // ) );
                    }
                    $caption = isset($entry['image_caption']) ? wpautop($entry['image_caption']) : '';
                    ?>

                    <div class="item">
                        <img src="<?php echo $img; ?>" class="slider_img"/>
                        <a href="#" alt="<?php echo $title ?>">
                            <div class="slider_desc">
                                <p class="title"><?php echo $title; ?></p>

                                <p class="caption"><?php echo $desc; ?></p>
                            </div>
                        </a>
                    </div>
                <?php
                }
                ?>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#home_carousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a class="right carousel-control" href="#home_carousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
        </div>
    </section>











    <article class="col-lg-6">
        <div class="entry-content">
            <?php the_content(); ?>
        </div>
    </article>
<?php endwhile; ?>


