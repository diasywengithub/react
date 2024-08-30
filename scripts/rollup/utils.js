/*
 * @Descripttion: 
 * @Author: wangwen
 * @Date: 2024-08-29 14:25:13
 * @LastEditors: wangwen
 * @LastEditTime: 2024-08-29 17:03:26
 */

import path from 'path'
import fs from 'fs'
import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'



const packages = path.resolve(__dirname, '../../packages')
const node_modules = path.resolve(__dirname, '../../dist/node_modules')




export function getPackagePath (name, isDist) {
	if (isDist) {
		return `${node_modules}/${name}`
	}
	return `${packages}/${name}`
}


export function getPackagesJson (name) {
	const path = `${getPackagePath(name)}/package.json`
	const data = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(data)
}

export function getBaseRollupPlugins ({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)]
}