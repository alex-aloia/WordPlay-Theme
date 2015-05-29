<?php
/*
Title: Video Bar Widget
Description: Displays a Featured Movie and Relevant Information
*/

if ( ! empty( $settings['vid_embed_url'] ) ) {
  $media = $settings['vid_embed_url'];
}
echo $before_widget;
?>

<div class="widget-content">
  <?php
  foreach ( $media as $media_ID ) {
    if ($media_ID) {
      $thumb_query_url = 'http://i1.ytimg.com/vi/' . $media_ID . '/mqdefault.jpg';
      echo "<div class='vid_link_wrap'>
                <a class='popup-youtube' href='http://www.youtube.com/watch?v=" . $media_ID . "'>
                  <img src='" . $thumb_query_url . "'>
                </a>
            </div>";
    }
  }
  ?>
</div>
<?php echo $after_widget; ?>


