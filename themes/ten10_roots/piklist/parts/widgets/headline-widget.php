<?php
/*
Title: Headline Widget
Description: Headline / Featured Copy Widget for page sidebars
*/

$headline      = esc_html( $settings['headline'] );
$copy          = $settings['copy'];
$list_headline = $settings['list_headline'];
$link          = $settings['link_select'];
?>


<?php echo $before_widget; ?>

	<h3 class="headline"><?php echo $headline; ?></h3>
	<p class="copy"><?php echo $copy; ?></p>
	<h4 class="list_headline"><?php echo $headline; ?></h4>
<ul>
<?php
$list = $settings['list_item'];
foreach ( $list as $item ) {
	echo "<li>" . $item . "</li>";
}
?>
</ul>

<div class="btn_wrap">
	<a class="btn btn-primary" href="<?php //echo $link; ?>"><i class="fa fa-caret-right"></i>Investment Opportunities</a>
</div>

<?php echo $after_widget; ?>
