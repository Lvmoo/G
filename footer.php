</div>
</div>
<div id="footer">
	<div id="footer-content" class="clear">
		<div id="footer-content-left">
			<p>&copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a> | 诞生<?php getBuildTime($this->options->builtTime); ?></p>
			<?php if($this->options->icpbeian): ?>
			<a target="_blank" rel="noopener" href="http://www.miitbeian.gov.cn"><?php $this->options->icpbeian(); ?></a>
			<?php endif; ?>
			<?php if($this->options->gajbeian): ?>
			<a target="_blank" rel="noopener" href="<?php $this->options->gajbeianurl(); ?>"> <img src="https://cdn.lvmoo.com/gh.png" alt="国徽">  <?php $this->options->gajbeian(); ?> </a>
			<?php endif; ?>
		</div>
		<div id="footer-content-right">
			<p><?php if ($this->options->enableUpyun): ?>
	   <a href="https://upyun.com" target="_blank"><img src="https://i.loli.net/2019/02/11/5c6187c809c8c.png"/></a>
	   <?php endif; ?>
	  			<?php if ($this->options->enableAliyun): ?>
			 <img src="https://i.loli.net/2019/02/11/5c6187e663b3a.png"/>
			 <?php endif; ?></p>
		</div>
	</div>

	<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://cdn.bootcss.com/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>
	<script src="<?php $this->options->themeUrl('JS/X.js'); ?>"></script>
	<script type="text/javascript" src="<?php $this->options->themeUrl('JS/prism.js'); ?>"></script>
	<script src="https://cdn.bootcss.com/fancybox/3.5.6/jquery.fancybox.min.js"></script>
	<script>
		$(document).ready(function(){
				$("#post img").each(function(){
						$(this).wrap(function(){
							if($(this).is(".bq"))
							{
								 return '';
							}
						return '<a data-fancybox="gallery" no-pjax data-type="image" href="' + $(this).attr("src") + '" class="light-link"></a>';
				 })
			})
		})

 </script>
</div>
<a id="gototop"><img src="https://i.loli.net/2019/02/11/5c617e353eb56.png"></a>
</body>
</html>