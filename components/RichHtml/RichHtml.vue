<template>
  <view class="rich-html">
    <mpHtml :content="html"></mpHtml>
  </view>
</template>

<script>
  import mpHtml from '@/lib/mp-html/mp-html'
  export default {
    name:"RichHtml",
    props: ['html'],
    components: {
      mpHtml
    },
    filters: {
      formatRichText(html) {
      	let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
      		match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
      		match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
      		match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
      		return match;
      	});
      	newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
      		match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
      		return match;
      	});
      	newContent = newContent.replace(/<br[^>]*\/>/gi, '');
      	newContent = newContent.replace(/\<img/gi,
      		'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
      	return newContent;
      }
    },
  }
</script>

<style lang="scss">

</style>
