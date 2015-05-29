<?php

// slider img var
if ( ! empty( $data['upload_media_slider_img'] ) ) {
  $images = $data['upload_media_slider_img'];
  foreach ( $images as $img ) {
    $img = $img;
  }
}

// slider page link var
if ( ! empty( $data['page_link'] ) ) {
  $page_link = $data['page_link'];
}


?>

<div class="item">
<a href="<?php echo get_permalink( $page_link ); ?>">
  <img src="<?php echo wp_get_attachment_url( $img ) ?>"/>
</a>
</div>







