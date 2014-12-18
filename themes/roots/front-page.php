<?php
/**
 *  Site Front Page
 */
while (have_posts()) : the_post();
    //$args = array( 'post_type' => 'cpt_portfolio', 'posts_per_page' => -1 );
    //$loop = new WP_Query( $args );
endwhile;
?>

<div id="portfolio"></div>


<div class="content container-fluid">
    <article class="entry-content row">

    </article>
</div>













