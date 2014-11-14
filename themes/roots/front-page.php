<?php
/**
 *  Site Front Page
 */


 while ( have_posts() ) : the_post();
  $args = array( 'post_type' => 'cpt_portfolio', 'posts_per_page' => -1 );
  $loop = new WP_Query( $args );
  get_template_part('assets/img/inline', 'symbols.svg');
  ?>

  <div class="content">
    <svg id="aaaLogo" class=""><use xlink:href="#aaaLogo"></use></svg>
    <article class="entry-content">
        <?php
        while ( $loop->have_posts() ) :
          $loop->the_post();
          //$img = wp_get_attachment_image_src( $media_URL, 'port_thumb_med');
          ?>

          <?php
        endwhile;
        ?>
    </article>
    <div id="portfolio">
      </div>
<?php endwhile; ?>












