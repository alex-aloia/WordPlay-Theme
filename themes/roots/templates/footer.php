<footer class="content-info" role="contentinfo">
  <?php //dynamic_sidebar('sidebar-footer'); ?>


  <nav class="navbar-fixed-bottom" role="navigation">
      <?php
      if (has_nav_menu('footer_navigation')) :
        wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => 'nav navbar-nav '));
      endif;
      ?>
  </nav>
  <a id="aaaLogo_footer" class="aaaLogo_wrap" href="#">
    <p class="pwdby">powered by:</p>
    <svg id="aaaLogo" class=""><use xlink:href="#aaaLogo"></use></svg>
  </a>


</footer>


