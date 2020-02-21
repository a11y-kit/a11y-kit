/**
 * Sorts an array of Nodes by document position.
 * @param {Node} a
 * @param {Node} b
 * @example [Node, Node, Node].sort(orderNodes)
 * @returns {Array.Node} An array of nodes sorted by document position
 */
export const orderNodes = (a: Node, b: Node): number => {
  if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1
  }

  if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING) {
    return 1
  }

  return 0
}

