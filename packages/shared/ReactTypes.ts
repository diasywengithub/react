/*
 * @Descripttion: 
 * @Author: wangwen
 * @Date: 2024-08-28 15:57:51
 * @LastEditors: wangwen
 * @LastEditTime: 2024-08-28 16:15:57
 */
 export type Type = any;
 export type Key = any;
 export type Ref = any;
 export type Props = any;
 export type ElementType = any;

export interface ReactElement{
	$$typeof:Symbol|number,
	type:Type,
	key:Key,
	ref:Ref,
	props:Props,
}
