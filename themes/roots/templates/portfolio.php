<?php
/*
Template Name: Portfolio Template
*/
 while ( have_posts() ) : the_post();
  $args = array( 'post_type' => 'cpt_portfolio', 'posts_per_page' => -1 );
  $loop = new WP_Query( $args );
  ?>

<!---->
<!--       <div id="scene">-->
<!--        <svg version="1.1" id="t3i_logo" class="layer" data-depth="0.60" width="100%" height="100%" viewBox="0 0 270 200" ></svg>-->
<!--        <svg id="comingSoon" class="layer" data-depth="0.20" width="400" height="200"></svg>-->
<!--         <ul id="menu_social" class="layer" data-depth="0.50" style="display:block; position:absolute;">-->
<!--           <li>facebook</li>-->
<!--           <li>google+</li>-->
<!--           <li>github</li>-->
<!--           <li>codepen</li>-->
<!--           <li>linkedin</li>-->
<!--           <li>BLOG</li>-->
<!--         </ul>-->
<!--        <div  id="mainMenu" class="layer" data-depth="0.30">-->
<!--            <p><i class="fa fa-cubes fa-4x"></i>philosophy</p>-->
<!--            <p><i class="fa fa-comments fa-4x"></i>contact</p>-->
<!--            <p><i class="fa fa-gears fa-4x"></i>work</p>-->
<!--        </div>-->
<!--    </div>-->
<!---->






  <div id="wrap_port">
      <ul class="parallax-layer">
        <?php
        while ( $loop->have_posts() ) :
          $loop->the_post();
//          $media_URL  =  wp_get_attachment_metadata($post_id, 'port_img');
//          $data_depth = get_post_meta( $post->ID, 'port_dd' ); // port_dd = data depth
          $description = get_post_meta( $post->ID, 'port_description' ); // port_dd = data depth
          ?>
          <li>
<!--          <li data-depth="--><?php //echo $data_depth[0]; ?><!--" class="layer">-->
              <?php //the_title(); ?>
                <a href="<?php echo the_permalink(); ?>" class='layer' id="<?php echo the_ID(); ?>">
                  <?php the_post_thumbnail('port_thumb_med'); ?>
                </a>
<!--              <p>--><?php //echo $description[0]; ?><!--</p>-->
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


