<footer class="content-info" role="contentinfo">
  <?php //dynamic_sidebar('sidebar-footer'); ?>


  <nav class="navbar-fixed-bottom" role="navigation">
      <?php
      if (has_nav_menu('footer_navigation')) :
        wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => 'nav navbar-nav '));
      endif;
      ?>
<!--    <a id="aaaLogo_footer" href="--><?php //echo esc_url( home_url( '/' ) ); ?><!--">-->
<!--      <p>powered by:</p>-->
<!--      <svg class="logo aaaLogo"><use xlink:href="#aaaLogo-flat"></use></svg>-->
<!--    </a>-->
  </nav>
</footer>



