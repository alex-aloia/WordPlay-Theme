<footer class="content-info" role="contentinfo">
  <?php //dynamic_sidebar('sidebar-footer'); ?>


  <nav class="navbar-fixed-bottom" role="navigation">
    <a id="aaaLogo_wrap" class="navbar-right" href="#">
        <p class="pwdby">powered by:</p>
    </a>
      <?php
      if (has_nav_menu('footer_navigation')) :
        wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => 'nav navbar-nav '));
      endif;
      ?>
  </nav>


</footer>
