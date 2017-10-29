<!-- [home_page  滚动插件使用方法]   @Author: 郑君婵   @Email: zhengjunchan@qq.com   @DateTime: 2017-10-27 -->

<template>
  <div class="home_page">
    <scroller :on-refresh="refresh" :on-infinite="loadMore" :dataList="list" :config="scrollerConfig">
      <p class="item bd_b" v-for="item in list" v-text="item"></p>
    </scroller>
  </div>
</template>

<script type="text/javascript">

import { Scroller } from '@/components';

export default {
    components: {
        Scroller
    },
    data() {
        return {
            list: [], // 滚动数据
            page: {
                currentPage: 1,
                pageCount: 3,
                perPage: 20,
                totalCount: 0
            },
            loading: {
                tip: '上拉加载',
                showImg: true
            },
            // 插件配置项
            scrollerConfig: {
                // 父元素需要设置属性position: relative;
                // 不设置top和bottom，默认高度时父元素的100;
                style: {
                    top: '0',     // 滚动区域离父元素的顶部距%离
                    bottom: '0'   // 滚动区域离父元素的底部距离
                },
                // 是否禁止上拉刷新
                // 默认值：false
                disablePullup: false
            }
        };
    },
    created() {
        this.setList();
    },
    methods: {
        // 下拉刷新
        refresh(done) {
            // 初始化
            this.init();

            // 告诉插件本次上拉动作结束
            done();
        },
        // 初始化数据
        init() {
            this.list = [];
            this.page.currentPage = 1;

            this.setList();
        },
        // 上拉加载更多
        loadMore(done) {
            // 加载滚动数据
            this.setList();

            // 如果没有数据
            if (this.page.currentPage >= this.page.pageCount) {
                // 禁止上拉功能
                this.scrollerConfig.disablePullup = true;
            }

            // 告诉插件本次上拉动作结束
            done();
        },
        /**
         * [setList 设置滚动数据]
         */
        setList() {
            let index = 0;
            let from = this.page.perPage * (this.page.currentPage - 1) + 1;

            for (; index < this.page.perPage; index++) {
                this.list.push(`这是第${ from + index }行`);
            }
            this.page.currentPage++;
        }
    }
};
</script>

<style lang="less" scoped>
.home_page{
    .item{
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: relative;
    }
}
</style>
