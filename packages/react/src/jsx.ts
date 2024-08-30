/*
 * @Descripttion: 
 * @Author: wangwen
 * @Date: 2024-08-28 15:54:18
 * @LastEditors: wangwen
 * @LastEditTime: 2024-08-29 17:07:27
 */
import { REACT_ELEMENT_TYPE } from '../../shared/ReactSymbol'
import { Type,Key,Ref,Props,ReactElement ,ElementType} from '../../shared/ReactTypes'



const ReactElement = function (type:Type, key:Key, ref:Ref, props:Props):ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props
	}
	return element
}

export const jsx = function(type:ElementType, config:any, ...children:any){
	let key:Key = null;
	let ref:Ref = null;
	let props:Props = {};

for (const prop in config) {
	const val = config[prop]
	if(props==='key'){
		key = ''+val;
		continue
	}
	if(props==='ref'){
		ref = val;
		continue
	}
	if({}.hasOwnProperty.call(config, prop)) {
		props[prop] = val;
	}
}
props.children = children.length === 1?children[0]:children;

return ReactElement(type, key, ref, props);
}