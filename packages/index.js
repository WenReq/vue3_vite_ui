/*
 * @Author: 温少昌 wenshaochang@huizhihuyu.com
 * @Date: 2024-07-30 10:01:40
 * @LastEditors: 温少昌 wenshaochang@huizhihuyu.com
 * @LastEditTime: 2024-07-30 10:01:56
 * @FilePath: /vue_vite_ui/packages/index.js
 * @Description: 用于导出所有的组件
 */
import StarrySky from './StarrySky';

// 按需引入
export { StarrySky };

const components = [StarrySky];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default {
	install,
};
