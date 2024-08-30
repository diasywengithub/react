/*
 * @Descripttion: 
 * @Author: wangwen
 * @Date: 2024-08-28 15:49:47
 * @LastEditors: wangwen
 * @LastEditTime: 2024-08-30 14:40:58
 */
export const REACT_ELEMENT_TYPE = (typeof globalThis.Symbol === 'function' && globalThis.Symbol.for)
  ? globalThis.Symbol.for('react.element')
  : 0xeac7;