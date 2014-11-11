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
    <h1 id="click" style="color:#aaff00;font-size:30px;">click</h1>

<!--    <div class="scroll-container">-->
<!--      <ul>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=1" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=2" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=3" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=4" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=5" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=6" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=7" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=8" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=9" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=10" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=11" width="120" height="120" /></li>-->
<!--        <li href="#" rel="group" class="fancybox thumb"><img src="http://placehold.it/120x120&text=12" width="120" height="120" /></li>-->
<!--      </ul>-->
<!--    </div>-->

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












