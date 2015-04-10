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



<!--<svg class="title-hr" viewBox="0 0 1200 4" preserveAspectRatio="none">-->
<!--  <line x1="0" y1="0" x2="1200" y2="0"/>-->
<!--</svg>-->

<div class="wrap container">


  <section id="contact" class="container2">
    <div class="content">
      <?php echo do_shortcode('[cscf-contact-form]'); ?>
    </div>

  </section>


  <section id="about" class="container2">
    <div class="content">
      <article>
        <!--        <h3>Welcome to my world...</h3>-->
        <p>

        <div class="pic_box">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/me.png" alt=""/>
          <p>Check me out!</p>
          <?php get_template_part('assets/svg/common', 'social.svg'); ?>
        </div>

          In this digital age... the terminology, job titles & jargon inherently associated with technology, often mask
          the ultimate objective of its true nature: communication.
          I am a designer & full-stack web developer focused on
          improving communication by creating unique end-user
          experiences with modern, standard-based code; supported by highly efficient and scalable infrastructure.  
          <br><br>
          As a child, I became enamored with both Art & Technology: two realms that continue to forge the passion of my
          existence. Artistry and its fundamentals were always at the center of my elementary training, giving me a keen
          eye
          for aesthetics. Somewhere along the way, I discovered Design; which has proven to meld these two worlds
          together
          in my mind... leaving the ‘World Wide Web’ at the crux of my fascination.  
          <br><br>
          I LOVE everything about the Internet! I especially enjoy building hybrid/responsive web applications. From
          inception to deployment, through continued development and maintenance, I enjoy being a part of every aspect
          of
          the seemingly daunting process. My preferred 'weapon of choice' is the open-source 'LEMP stack', built on top
          of
          Ubuntu.
          <br><br>
          Currently, I have been working on a couple of open-source projects centered on creating deployable Wordpress
          environments. Utilizing Packer & Ansible, I have created a framework that allows me to create new,
          pre-provisioned cloud instances on the fly. The same codebase also lets me deploy updates from a Git repo with
          ease. You can check out my work on <a href="http://codepen.io/tripl3inf/">github</a> if your curious!
          <br><br>
           Besides all the ‘nerd stuff’, I also have a passion for music. I rock out on my Les Paul guitar through a
          very
          unnecessary Mesa Boogie amp... My neighbors love me! I enjoy playing almost anything, from bluesy Zeppelin
          leads
          to hammering Pantera riffs. Want to jam? I’d love to be in your band!
          <br><br>
          If you have a project that you'd like to discuss, or just want to 'drop me a line', please get in touch! You
          can
          use my contact page, or find me on social networks.


        </p>
      </article>


    </div>
  </section>


  <section id="portfolio" class="container2">
  </section>

</div> <!-- end wrap-->

<div id="loader-wrap">
  <?php get_template_part('assets/svg/common', 'tri-loader.svg'); ?>
</div>
<?php get_template_part('assets/svg/common', 'back-arw.svg'); ?>
<?php get_template_part('assets/svg/common', 'close.svg'); ?>
