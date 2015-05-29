<?php
$url = home_url();
?>


<header>
  <div class="banner-wrap">
    <div class="banner">
      <a class="logo" href="<?php echo $url ?>">

        <svg style="overflow: unset;" id="svg" x="0px" y="0px" width="537.8px"
             height="60.2px" viewBox="0 0 537.8 60.2" preserveAspectRatio="xMinYMin meet">

          <defs>
            <filter id="drop-shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="0"/>
              <feOffset dx="2" dy="0" result="offsetblur"/>
              <feFlood flood-color="#2D2D2D"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <g fill="#3490D3" filter="url(#drop-shadow)">
            <path d="M153.1,2.5h21.9v11h-8.8V24h8.2v10.5h-8.2v12.1h9.7v11h-22.8V2.5z"/>
            <path d="M207.8,2.5v55.1h-11.5l-6.8-25.1v25.1h-11V2.5h11l7.4,24.8V2.5H207.8z"/>
            <path d="M238.3,2.5v11h-7.8v44.1h-13.2V13.6h-7.8v-11H238.3z"/>
            <path d="M240.1,2.5H262v11h-8.8V24h8.2v10.5h-8.2v12.1h9.7v11h-22.8V2.5z"/>
            <path d="M265.4,2.5h9.3c6.2,0,10.4,0.3,12.6,0.8c2.2,0.5,4,1.9,5.4,4s2.1,5.6,2.1,10.3c0,4.3-0.5,7.2-1.5,8.7
				s-2.9,2.4-5.8,2.7c2.6,0.7,4.4,1.6,5.2,2.8c0.9,1.2,1.5,2.3,1.7,3.3s0.3,3.7,0.3,8.2v14.5h-12.2V39.3c0-3-0.2-4.8-0.6-5.5
				c-0.4-0.7-1.5-1.1-3.4-1.1v24.9h-13.2V2.5z M278.5,12v12.3c1.5,0,2.5-0.2,3.1-0.7s0.9-1.9,0.9-4.3v-3c0-1.7-0.3-2.9-0.9-3.4
				S280,12,278.5,12z"/>
            <path d="M325.1,2.5v11h-7.8v44.1h-13.2V13.6h-7.8v-11H325.1z"/>
            <path d="M347,2.5l7.5,55.1H341l-0.7-9.9h-4.7l-0.8,9.9h-13.6l6.7-55.1H347z M340,38c-0.7-6.2-1.3-14-2-23.2
				c-1.3,10.6-2.2,18.3-2.5,23.2H340z"/>
            <path d="M368.6,2.5v55.1h-13.2V2.5H368.6z"/>
            <path d="M402,2.5v55.1h-11.5l-6.8-25.1v25.1h-11V2.5h11l7.4,24.8V2.5H402z"/>
            <path d="M446.6,2.5v55.1h-11.5l0-37.2l-4.6,37.2h-8.2l-4.8-36.4l0,36.4H406V2.5h17c0.5,3.3,1,7.2,1.6,11.7l1.9,14
				l3-25.8H446.6z"/>
            <path d="M450.6,2.5h21.9v11h-8.8V24h8.2v10.5h-8.2v12.1h9.7v11h-22.8V2.5z"/>
            <path d="M505.3,2.5v55.1h-11.5l-6.8-25.1v25.1h-11V2.5h11l7.4,24.8V2.5H505.3z"/>
            <path d="M535.8,2.5v11h-7.8v44.1h-13.2V13.6H507v-11H535.8z"/>
          </g>

          <g id="g1" filter="url(#drop-shadow)" fill="#fff">
            <path d="M29.8,2.5v11h-7.8v44.1H8.8V13.6H1v-11H29.8z"/>
            <path d="M31.5,2.5h21.9v11h-8.8V24h8.2v10.5h-8.2v12.1h9.7v11H31.5V2.5z"/>
            <path d="M86.2,2.5v55.1H74.6l-6.8-25.1v25.1h-11V2.5h11l7.4,24.8V2.5H86.2z"/>
            <path d="M109.3,2.5v55.1H96.6V28.1c0-4.3-0.1-6.8-0.3-7.7c-0.2-0.9-0.7-1.5-1.5-2s-2.7-0.7-5.6-0.7h-1.2v-6.4
				C94,9.9,98.6,7,101.8,2.5H109.3z"/>
            <circle cx="128" cy="30.1" r="28.3"/>
            <image x="103" y="3.75" width="52" height="52"
                   xlink:href="<?php echo get_template_directory_uri(); ?>/assets/img/logo_lense.png"/>
          </g>
        </svg>
      </a>

      <div class="mod_featured">
<!--        <div class="content">-->
          <img src="<?php bloginfo('template_url'); ?>/assets/img/banner/704X169_2x_Banner1.png"
               class="img-responsive" alt="Invest in a Desert Wind Studio Production"/>
<!--          <p>Invest in a Dessert Wind Studios Production</p>-->
<!--          <div class="img"></div>-->
<!--        </div>-->
      </div>
    </div>
  </div>

  <div class="nav-wrap">
    <nav>
      <div id="nav-main" class="navbar navbar-static-top" role="navigation">

        <i id="mobile_open_BTN" class="mobile_BTN fa fa-bars"></i>
        <i id="mobile_close_BTN" class="mobile_BTN fa fa-times-circle-o" style="visibility: hidden"></i>

        <?php
        if ( has_nav_menu( 'primary_navigation' ) ) :
          wp_nav_menu( array(
            'theme_location' => 'primary_navigation',
            'menu_class'     => 'nav navbar-nav'
          ) );
        endif;
        ?>
      </div>
    </nav>
  </div>


</header>
<?php if ( wp_is_mobile() ) { ?>
    <script>
      window.onload = function () {
        var mNav_btn = $('.mobile_BTN').show();
        mobile_nav_btn();
      }
    </script>
<?php } ?>


