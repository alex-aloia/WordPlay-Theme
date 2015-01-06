<?php
/*
Template Name: Portfolio Template
*/
 while ( have_posts() ) : the_post();
  $args = array( 'post_type' => 'cpt_portfolio', 'posts_per_page' => -1 );
  $loop = new WP_Query( $args );
  ?>





  <div id="wrap_port">
      <ul class="parallax-layer">
        <?php
        while ( $loop->have_posts() ) :
          $loop->the_post();
//          $media_URL  =  wp_get_attachment_metadata($post_id, 'port_img');
//          $data_depth = get_post_meta( $post->ID, 'port_dd' ); // port_dd = data depth
          $description = get_post_meta( $post->ID, 'port_imgW' ); // port_dd = data depth
          ?>
          <li>
<!--          <li data-depth="--><?php //echo $data_depth[0]; ?><!--" class="layer">-->
              <?php //the_title(); ?>
                <a href="<?php echo the_permalink(); ?>" class='layer' id="<?php echo the_ID(); ?>">
                  <?php the_post_thumbnail('port_thumb_med'); ?>
                </a>
          </li>
          <?php
        endwhile;
        ?>
      </ul>
  </div>
   <h1 data-depth="0.10">dfjksdfkshdfghsdfgsdfgkh</h1>
      <h2 data-depth="0.10">dfjksdfkshdfghsdfgsdfgkh</h2>
   <div id="ajax-response">
   </div>
<?php endwhile; ?>


