<template>
    <div class="page-view">
      <!-- 文章字数 -->
      <div title="文章字数" class="book-words iconfont icon-book">
        <a href="javascript:;" style="margin-left: 3px; color: #888">{{
          wordsCount
        }}</a>
      </div>
  
      <!-- 预阅读时长 -->
      <div
        v-if="readingTime"
        title="预阅读时长"
        class="reading-time iconfont icon-shijian"
      >
        <a href="javascript:;" style="margin-left: 3px; color: #888">{{
          readingTime
        }}</a>
      </div>
      <!-- 浏览量 -->
      <div v-if="pageView" title="浏览量" class="page-view iconfont icon-view">
        <a
          style="color: #888; margin-left: 3px"
          href="javascript:;"
          id="busuanzi_value_page_pv"
          class="view-data"
          ><i title="正在获取..." class="loading iconfont icon-loading"></i
        ></a>
      </div>
    </div>
  </template>
  
  <script>
  import { fetch } from "../util/webSiteInfo";
  export default {
    data() {
      return {
        // Young Kbt
        wordsCount: 0,
        readingTime: 0,
        pageView: true,
        pageIteration: 3000,
      };
    },
    mounted() {
      this.initPageInfo();
    },
    watch: {
      $route(to, from) {
        if (
          to.path !== "/" &&
          to.path != from.path &&
          this.$themeConfig.blogInfo
        ) {
          this.initPageInfo();
        }
      },
    },
    methods: {
      /**
       * 初始化页面信息
       */
      initPageInfo() {
        this.$filterPosts.forEach((itemPage) => {
          if (itemPage.path == this.$route.path) {
            const { eachFileWords, pageView, pageIteration, readingTime } =
              this.$themeConfig.blogInfo;
            this.pageIteration = pageIteration;
            if (eachFileWords) {
              eachFileWords.forEach((itemFile) => {
                if (itemFile.permalink == itemPage.frontmatter.permalink) {
                  this.wordsCount = itemFile.wordsCount;
                  if (readingTime || readingTime == undefined) {
                    this.readingTime = itemFile.readingTime;
                  } else {
                    this.readingTime = false;
                  }
                }
              });
            }
            this.pageView = pageView == undefined ? true : pageView;
            if (this.pageView) {
              this.getPageViewCouter(this.pageIteration);
            }
            return;
          }
        });
      },
      /**
       * 文章页的访问量
       */
      getPageViewCouter(iterationTime = 3000) {
        fetch();
        let i = 0;
        var defaultCouter = "9999";
        // 如果只需要第一次获取数据（可能获取失败），可注释掉 setTimeout 内容，此内容是第一次获取失败后，重新获取访问量
        // 可能会导致访问量再次 + 1 原因：取决于 setTimeout 的时间（需求调节），setTimeout 太快导致第一个获取的数据没返回，就第二次获取，导致结果返回 + 2 的数据
        setTimeout(() => {
          let pageView = document.querySelector(".view-data");
          if (pageView && pageView.innerText == "") {
            let interval = setInterval(() => {
              // 再次判断原因：防止进入 setInterval 的瞬间，访问量获取成功
              if (pageView && pageView.innerText == "") {
                i += iterationTime;
                if (i > iterationTime * 5) {
                  pageView.innerText = defaultCouter;
                  clearInterval(interval); // 5 次后无法获取，则取消获取
                }
                if (pageView.innerText == "") {
                  // 手动获取访问量
                  fetch();
                } else {
                  clearInterval(interval);
                }
              } else {
                clearInterval(interval);
              }
            }, iterationTime);
            // 绑定 beforeDestroy 生命钩子，清除定时器
            this.$once("hook:beforeDestroy", () => {
              clearInterval(interval);
              interval = null;
            });
          }
        }, iterationTime);
      },
    },
  };
  </script>
  
  <style scoped>
  .page-view > div {
    float: left;
    margin-left: 20px;
    font-size: 0.8rem;
  }
  
  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  .loading {
    display: inline-block;
    animation: turn 1s linear infinite;
    -webkit-animation: turn 1s linear infinite;
  }
  </style>
  