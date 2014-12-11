<?php
/**
 *  Site Front Page
 */
while (have_posts()) : the_post();
    //$args = array( 'post_type' => 'cpt_portfolio', 'posts_per_page' => -1 );
    //$loop = new WP_Query( $args );
    get_template_part('assets/img/inline', 'symbols.svg');
endwhile;
?>
<!--
<svg id="triLoader" width="325" height="300" viewBox="0 0 1600 1200">
    <def>
        <mask id="triLoaderMask">
            <g stroke-width="2" stroke="#fff">
                <path class='p1'
                      d="M 408.56,5 L 368.25,74.78 242.91,291.88 117.56,508.94 77,579.25 239.34,485.53 324.06,338.72 337.63,315.28 408.56,192.47 408.56,5 Z M 408.56,5"/>
                <path class='p2'
                      d="M 408,5 L 448.31,74.78 573.66,291.87 699,508.94 739.56,579.25 577.22,485.53 492.5,338.72 478.94,315.28 408,192.47 408,5 Z M 408,5"/>
                <path class='p3'
                      d="M 76.89,578.88 L 157.48,578.89 408.16,578.9 658.82,578.92 739.99,578.89 577.65,485.15 408.15,485.19 381.07,485.16 238.25,485.14 76.89,578.88 Z M 76.89,578.88"/>
            </g>
        </mask>
    </def>
    <g id="triLoaderParts" stroke-width="3" stroke="green" style="mask: url(#triLoaderMask)">
    <g id="triLoaderParts">
        <path class='p1'
              d="M 408.56,5 L 368.25,74.78 242.91,291.88 117.56,508.94 77,579.25 239.34,485.53 324.06,338.72 337.63,315.28 408.56,192.47 408.56,5 Z M 408.56,5"/>
        <path class='p2'
              d="M 408,5 L 448.31,74.78 573.66,291.87 699,508.94 739.56,579.25 577.22,485.53 492.5,338.72 478.94,315.28 408,192.47 408,5 Z M 408,5"/>
        <path class='p3'
              d="M 76.89,578.88 L 157.48,578.89 408.16,578.9 658.82,578.92 739.99,578.89 577.65,485.15 408.15,485.19 381.07,485.16 238.25,485.14 76.89,578.88 Z M 76.89,578.88"/>
    </g>
</svg>
-->

<div id="portfolio"></div>


<div class="content container-fluid">
    <article class="entry-content row">

    </article>
</div>













