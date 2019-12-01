<div class="photo-gallery">
  <div class="columns is-multiline photos">
  <?php

    $files = glob("img/*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}",GLOB_BRACE);
    $sorted_files=array(); /* a new array that have modification time as values
    and files as keys the purpose is to sort files according to the values in reverse order */
    foreach ($files as $file)
    {
    $sorted_files[$file]=filemtime($file);
    }
    arsort($sorted_files);
    foreach ($sorted_files as $image=>$mtime)
    {
    echo '<div class="column is-4"><a data-fslightbox href="'.$image.'" title="'.$i.'"><img src="'.$image.'"></a></div>';
    }
    ?>
  </div>
</div>