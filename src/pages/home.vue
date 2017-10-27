<!-- [home_page]   @Author: 郑君婵   @Email: zhengjunchan@qq.com   @DateTime: 2017-10-27 -->

<template>
  <div class="home_page">
    <scroller :on-refresh="refresh" :on-infinite="loadMore" :dataList="list" :config="scrollerConfig">
      <p v-for="item in list" v-text="item"></p>
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
            list: [],
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
            scrollData: {
                noFlag: false // 暂无更多数据显示
            },
            scrollerConfig: {
                style: {
                    top: '0',
                    bottom: '0'
                }
            }
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.list = [];
            this.setList();
        },
        /**
         * [setList 设置列表]
         * @Author   郑君婵
         * @DateTime 2017-10-12
         */
        setList() {
            let index = 0;
            let from = this.page.perPage * (this.page.currentPage - 1);

            for (; index < this.page.perPage; index++) {
                this.list.push(`这是第${ from + index }行`);
            }

            this.page.currentPage++;
        },
        refresh(done) {
            this.init();
            done();
        },
        loadMore(done) {
            this.setList();

            if (this.page.currentPage >= this.page.pageCount) {
                this.scrollerConfig.disablePullup = true;
            }

            done();
        }
    }
};
</script>
