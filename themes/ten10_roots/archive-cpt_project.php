<?php

global $post;
if ( ! empty( $post ) ) {
  $slider_imgs = get_post_meta( get_the_ID(), '_cmb_slider_full', true );
  $args        = array( 'post_type' => 'cpt_project', 'posts_per_page' => - 1 );
  $loop        = new WP_Query( $args );
}
?>


<?php while (have_posts()) :
the_post(); ?>

<div class="archive-projects">

  <section class="slider_full_width">

    <div class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <!-- Wrapper for slides -->
        <?php
        $entries = get_post_meta( get_the_ID(), '_cmb_repeat_group', true );
        foreach ( (array) $entries as $key => $entry ) {
          $img = $title = $desc = $caption = '';
          if ( isset( $entry['title'] ) ) {
            $title = esc_html( $entry['title'] );
          }
          if ( isset( $entry['description'] ) ) {
            $desc = esc_html( $entry['description'] );
          }
          if ( isset( $entry['image'] ) ) {
            $img = $entry['image'];
          }
          $caption = isset( $entry['image_caption'] ) ? wpautop( $entry['image_caption'] ) : '';
          ?>

          <div class="item">
            <img src="<?php echo $img; ?>"/>
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
      <a class="left carousel-control" href=".carousel" role="button" data-slide="prev">
        <span class="fa fa-angle-left"></span>
      </a>
      <a class="right carousel-control" href=".carousel" role="button" data-slide="next">
        <span class="fa fa-angle-right"></span>
      </a>
    </div>
  </section>


  <?php endwhile; ?>


  <section class="content-wrap">
    <div class="content">
      <article class="entry-content">
        <ul class="project_list">
          <?php
          while ( $loop->have_posts() ) :
            $loop->the_post();
            ?>
            <li class="project_info">
              <div class="thumb_wrap">
                <a href="<?php echo the_permalink(); ?>">
                  <?php the_post_thumbnail( 'archive-project-thumb' ); ?>
                </a>
              </div>

              <ul>
                <li class="project_title">
                  <?php the_title(); ?>
                </li>

                <li>
                  <span>Director:</span>
                  <?php echo get_post_meta( $post->ID, 'project_director', true ); ?>
                </li>


                <li>
                  <span>Producer:</span>
                  <?php echo get_post_meta( $post->ID, 'project_producer', true ); ?>
                </li>

                <li class="project_trailer_link">
                  <a href="<?php echo get_post_meta( $post->ID, 'project_trailer_url',
                    true ); ?>" class="btn btn-default btn-xs">
                    Watch this Trailer
                  </a>
                </li>

                <li class="project_desc"><p><?php echo get_post_meta( $post->ID, 'project_desc', true ); ?></p></li>
              </ul>

            </li>
          <?php
            //the_excerpt();
          endwhile;
          ?>
        </ul>
      </article>
    </div>
  </section>


</div>





