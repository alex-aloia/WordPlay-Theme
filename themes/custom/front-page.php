<?php
/**
 *  Site Front Page
 */
global $post;
if (!empty($post)) {
  $args = array('post_type' => 'cpt_main_menu', 'posts_per_page' => -1);
  $loop = new WP_Query($args);
}
?>

<nav id="main_menu" class="menu" role="navigation">
  <ul>
    <?php while ($loop->have_posts()) : $loop->the_post();
      $post_id = get_the_ID();
      $dir = get_template_directory_uri();
      $title = get_the_title();
      $title = strtolower($title);
      //$svg_src = $dir . '/assets/svg/nav-menu-' . $title . '.svg';
      //$svg_img = '<img src="' . $svg_src . '" class="inject">';
      ?>
      <li class="<?php echo $title; ?>">
        <?php //echo $svg_img; ?>

        <?php get_template_part('assets/svg/nav-menu', $title . '.svg'); ?>
        <a href="<?php echo the_permalink(); ?>"><?php the_title() ?></a>
      </li>

    <?php endwhile; ?>
  </ul>
</nav>


<div class="content">
  <div id="contact_container">
    <?php echo do_shortcode('[cscf-contact-form]'); ?>
  </div>
</div>

<div id="loader-wrap">
  <?php get_template_part('assets/svg/common', 'tri-loader.svg'); ?>
</div>
<?php get_template_part('assets/svg/common', 'back-arw.svg'); ?>
<?php get_template_part('assets/svg/common', 'close.svg'); ?>
