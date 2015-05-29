<?php
/*
Template Name: Projects Page
*/
global $post;
if ( ! empty( $post ) ) {
  $args = array( 'post_type' => 'cpt_project', 'posts_per_page' => - 1 );
  $loop = new WP_Query( $args );
}
?>


<?php dynamic_sidebar( 'sidebar-subhead' ); ?>

<div class="archive-projects">
  <section class="content-wrap">
    <div class="content">
      <article class="entry-content">
        <?php
        while ( $loop->have_posts() ) :
          $loop->the_post();
          ?>


          <ul class="project_list">
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
          </ul>



        <?php
          //the_excerpt();
        endwhile;
        ?>
      </article>
    </div>
  </section>


</div>









