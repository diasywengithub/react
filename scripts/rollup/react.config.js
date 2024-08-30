/*
 * @Descripttion: 
 * @Author: wangwen
 * @Date: 2024-08-28 17:41:41
 * @LastEditors: wangwen
 * @LastEditTime: 2024-08-29 16:41:50
 */
import { getPackagesJson, getPackagePath, getBaseRollupPlugins } from './utils'

const { name, module } = getPackagesJson('react');
const path = getPackagePath(name);
const dishPath = getPackagePath(name, true);

export default [{
	input: `${path}/${module}`,
	output: {
		file: `${dishPath}/index.js`,
		name: 'index.js',
		format: 'und'
	},
	plugins: getBaseRollupPlugins()
}]