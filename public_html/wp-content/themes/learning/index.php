<?php

get_header();

if (have_posts())
{
  while (have_posts())
  {
    the_post();
?>

    <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
    <?php the_content(); ?>

<?php
  }
}
else
{
  echo '<p>no content found</p>';
}

get_footer();

?>
