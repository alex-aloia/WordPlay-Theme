<?php
/*
Template Name: Risk Tolerance
*/
global $post;
if ( ! empty( $post ) ) {
  $img = get_post_meta( $post->ID, '_cmb_img_third', true );
}
?>


<section class="content-wrap template-risk">
  <?php while ( have_posts() ) : the_post(); ?>
    <div class="featured">
      <img src="<?php echo $img; ?>" class="img-responsive">
    </div>
    <div class="content">
      <article class="entry-content">
        <?php the_content(); ?>
      </article>

      <div class="widget_wrap">

        <div class="slider_wrap">
          <div class="range_slider"></div>
        </div>

        <ul class="display_box_panels">
          <?php
          $entries = get_post_meta( get_the_ID(), '_cmb_repeat_group_risk_template', true );
          foreach ( (array) $entries as $key => $entry ) {
            // left box
            if ( isset( $entry['lb_title'] ) ) {
              $lb_title = esc_html( $entry['lb_title'] );
            }
            if ( isset( $entry['lb_percent'] ) ) {
              $lb_percent = esc_html( $entry['lb_percent'] );
            }
            if ( isset( $entry['lb_copy'] ) ) {
              $lb_copy = esc_html( $entry['lb_copy'] );
            }
            // center box
            if ( isset( $entry['cb_title'] ) ) {
              $cb_title = esc_html( $entry['cb_title'] );
            }
            if ( isset( $entry['cb_percent'] ) ) {
              $cb_percent = esc_html( $entry['cb_percent'] );
            }
            if ( isset( $entry['cb_copy'] ) ) {
              $cb_copy = esc_html( $entry['cb_copy'] );
            }
            // right box
            if ( isset( $entry['rb_title'] ) ) {
              $rb_title = esc_html( $entry['rb_title'] );
            }
            if ( isset( $entry['rb_percent'] ) ) {
              $rb_percent = esc_html( $entry['rb_percent'] );
            }
            if ( isset( $entry['rb_copy'] ) ) {
              $rb_copy = esc_html( $entry['rb_copy'] );
            }

            ?>

            <li class="panel">
              <ul class="display_boxes">
                <li>
                  <h5><?php echo $lb_title; ?></h5>
                  <h6><?php echo $lb_percent; ?></h6>

                  <p><?php echo $lb_copy; ?></p>
                </li>

                <li>
                  <h5><?php echo $cb_title; ?></h5>
                  <h6><?php echo $cb_percent; ?></h6>

                  <p><?php echo $cb_copy; ?></p>
                </li>

                <li>
                  <h5><?php echo $rb_title; ?></h5>
                  <h6><?php echo $rb_percent; ?></h6>

                  <p><?php echo $rb_copy; ?></p>
                </li>
              </ul>
            </li>
          <?php
          }
          ?>
        </ul>
      </div>
    </div>
  <?php endwhile; ?>
</section>


