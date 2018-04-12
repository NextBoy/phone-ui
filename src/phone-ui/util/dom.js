/**
 * @description 在头部插入新节点
 * @param el 目标元素
 * @param insertNodeName 插入的节点类型  div  a  img ...
 */
export const insertDomInHead = (el, insertNodeName) => {
  let insertNode = document.createElement(insertNodeName)
  let target = el.childNodes[0] || null
  el.insertBefore(insertNode, target)
  console.log(123)
  return insertNode
}
