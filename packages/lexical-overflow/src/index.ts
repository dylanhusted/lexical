/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *

 */

import type {EditorConfig, LexicalNode, NodeKey, RangeSelection} from 'lexical';

import {ElementNode} from 'lexical';

export class OverflowNode extends ElementNode {
  static getType(): string {
    return 'overflow';
  }

  static clone(node: OverflowNode): OverflowNode {
    return new OverflowNode(node.__key);
  }

  constructor(key?: NodeKey) {
    super(key);
    this.__type = 'overflow';
  }

  createDOM(config: EditorConfig): HTMLElement {
    const div = document.createElement('span');
    const className = config.theme.characterLimit;
    if (typeof className === 'string') {
      div.className = className;
    }
    return div;
  }

  updateDOM(prevNode: OverflowNode, dom: HTMLElement): boolean {
    return false;
  }

  insertNewAfter(selection: RangeSelection): null | LexicalNode {
    const parent = this.getParentOrThrow();
    return parent.insertNewAfter(selection);
  }

  excludeFromCopy(): boolean {
    return true;
  }
}

export function $createOverflowNode(): OverflowNode {
  return new OverflowNode();
}

export function $isOverflowNode(
  node: LexicalNode | null | undefined,
): node is OverflowNode {
  return node instanceof OverflowNode;
}
