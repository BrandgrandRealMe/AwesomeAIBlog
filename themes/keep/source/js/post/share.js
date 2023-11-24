/* global KEEP */

function initPostShareHelper() {
  KEEP.utils.postShareHelper = {
    postShareHandle() {
      const pageUrl = window.location.href
      const pageTitle = window.document.title

      const shareContainer = document.querySelector('.post-share-container .share-list-wrap')

      // WeChat share
      const xShare = shareContainer.querySelector('.wechat')
      xShare &&
        xShare.setAttribute(
          'data-tooltip-img-url',
          `https://twitter.com/intent/tweet?text=View This Awesome Blog Post! ${pageUrl}`
        )

      shareContainer.querySelectorAll('.share-item').forEach((item) => {
        item.addEventListener('click', () => {
          // QQ share
          if (item.classList.contains('qq')) {
            window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${pageUrl}`)
          }

          // WeiBo share
          if (item.classList.contains('weibo')) {
            window.open(
              `https://service.weibo.com/share/share.php?url=${pageUrl}&title=${pageTitle}`
            )
          }
        })
      })
    }
  }

  if (KEEP.theme_config.post?.share === true) {
    KEEP.utils.postShareHelper.postShareHandle()
  }
}

if (KEEP.theme_config.pjax?.enable === true && KEEP.utils) {
  initPostShareHelper()
} else {
  window.addEventListener('DOMContentLoaded', initPostShareHelper)
}
