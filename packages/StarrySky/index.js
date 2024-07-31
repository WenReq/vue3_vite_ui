/*
 * @Author: 温少昌 wenshaochang@huizhihuyu.com
 * @Date: 2024-07-30 09:59:11
 * @LastEditors: 温少昌 wenshaochang@huizhihuyu.com
 * @LastEditTime: 2024-07-30 10:00:00
 * @FilePath: /vue_vite_ui/packages/StarrySky/index.js
 * @Description: 导出满天星的组件
 */
import StarrySky from './src/StarrySky.vue';

StarrySky.install = (App) => {
    App.component(StarrySky.name, StarrySky);
}

export default StarrySky;