<?php
/**
 * 大气
 *
 *
 * @package G
 * @author YOURAN
 * @version 1.0.3
 * @link https://gundam.exia.xyz/
 */

 $this->need('header.php');
 ?>
<div id="article" class="clear">
  <div id="article-content">
 <?php while($this->next()): ?>
    <div id="article-<?php $this->cid();?>" class="article-item hoverup">
    	<h2 id="article-<?php $this->cid();?>-title"><a href="<?php $this->permalink() ?>"><?php $this->title() ?></a></h2>
      <?php if ($this->options->enableOneRow == 0): ?><em><?php $this->excerpt(50);?></em><?php endif; ?>
      <p class="clear"><span id="article-author"><?php $this->author(); ?></span><span id="article-date"><?php $this->date('F j, Y'); ?></span></p>
    </div>
<?php endwhile; ?>
<div id="pages" class="clear">
  <?php $this -> pageNav('←', '→'); ?>
</div>
  </div>
</div>
<?php
/*** 
<div id="pages" class="clear">
  <?php $this->pageLink('更多&raquo;','next'); ?>
  <?php $this->pageLink('&laquo;返回','prev'); ?>
</div>
  </div>
</div>
*/
?>
  <?php $this->need('footer.php'); ?>
