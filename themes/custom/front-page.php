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

  <div id="about_container">
    <h1>Welcome to my world...</h1>

    <p>
      In this digital age... the terminology, job titles & jargon inherently associated with technology, often mask the
      ultimate objective of its true nature: communication. I am a designer & full-stack web developer focused on improving communication by creating unique end-user
      experiences with modern, standard-based code; supported by highly efficient and scalable infrastructure.  
      <br><br>
      As a child, I became enamored with both Art & Technology: two realms that continue to forge the passion of my
      existence. Artistry and its fundamentals were always at the center of my elementary training, giving me a keen eye
      for aesthetics. Somewhere along the way, I discovered Design; which has proven to meld these two worlds together
      in my mind... leaving the ‘World Wide Web’ at the crux of my fascination.  
      <br><br>
      I LOVE everything about the Internet! I especially enjoy building hybrid/responsive web applications. From
      inception to deployment, through continued development and maintenance, I enjoy being a part of every aspect of the seemingly daunting process.
      My preferred 'weapon of choice' is the open-source 'LEMP stack', built on top of  Ubuntu.
      <br><br>
       Besides all the ‘nerd stuff’, I also have a passion for music. I rock out on my Les Paul guitar through a very
      unnecessary Mesa Boogie amp... My neighbors love me! I enjoy playing almost anything, from bluesy Zeppelin leads
      to hammering Pantera riffs. Want to jam? I’d love to be in your band. Nowadays, I really dig the electronic music.
      On a rare occasion, you might find me tearing up the dance
      floor at a indiscriminate Chicago nitespot; as long as their playing some deep house tracks.
    </p>
  </div>
</div>

<div id="loader-wrap">
  <?php get_template_part('assets/svg/common', 'tri-loader.svg'); ?>
</div>
<?php get_template_part('assets/svg/common', 'back-arw.svg'); ?>
<?php get_template_part('assets/svg/common', 'close.svg'); ?>
