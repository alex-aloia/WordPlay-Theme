<?php
/*
Title: Featured Movie Widget
Description: Displays a Featured Movie and Relevant Information
*/

if ( ! empty( $settings['mw_direc'] ) ) {
  $director = esc_html( $settings['mw_direc'] );
}

if ( ! empty( $settings['mw_producer'] ) ) {
  $producer = esc_html( $settings['mw_producer'] );
}

if ( ! empty( $settings['mw_list_actors'] ) ) {
  $list_actors = $settings['mw_list_actors'];
}

if ( ! empty( $settings['mw_budget'] ) ) {
  $budget = esc_html( $settings['mw_budget'] );
}

if ( ! empty( $settings['mw_release_date'] ) ) {
  $rel_date = esc_html( $settings['mw_release_date'] );
}

if ( ! empty( $settings['mw_upload_media'] ) ) {
  $media = $settings['mw_upload_media'];
  foreach ( $media as $media_ID ) {
    $img = wp_get_attachment_url( $media_ID );
  }

  $media_meta = wp_prepare_attachment_for_js( $media_ID );
  $img_alt    = $media_meta['alt'];

}

?>



<?php echo $before_widget; ?>

<div class="widget-content">
  <img src="<?php echo $img ?>" alt="<?php echo $img_alt ?>"/>

  <dl>
    <dt>Director:</dt>
    <dd><?php echo $director ?></dd>

    <dt>Producer:</dt>
    <dd><?php echo $producer ?></dd>
  </dl>

  <p>Starring:</p>
  <ul>
    <?php
    foreach ( $list_actors as $item ) {
      echo "<li>" . esc_html( $item ) . "</li>";
    }
    ?>
  </ul>

  <dl>
    <dt>Estimated Budget:</dt>
    <dd><?php echo $budget ?></dd>

    <dt>Project Release Date:</dt>
    <dd><?php echo $rel_date ?></dd>
  </dl>

</div>
<?php echo $after_widget; ?>
