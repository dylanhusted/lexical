/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {
  ElementFormatType,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
} from 'lexical';

import {DecoratorNode} from 'lexical';

export type SerializedDecoratorBlockNode = {
  ...SerializedLexicalNode,
  format: ElementFormatType,
  ...
};

export class DecoratorBlockNode extends DecoratorNode<React$Node> {
  __format: ?ElementFormatType;

  constructor(format?: ?ElementFormatType, key?: NodeKey) {
    super(key);
    this.__format = format;
  }

  exportJSON(): SerializedDecoratorBlockNode {
    return {
      format: this.__format || '',
      type: 'decorator-block',
      version: 1,
    };
  }

  createDOM(): HTMLElement {
    return document.createElement('div');
  }

  updateDOM(): false {
    return false;
  }

  setFormat(format: ElementFormatType): void {
    const self = this.getWritable();
    self.__format = format;
  }
}
export function $isDecoratorBlockNode(node: ?LexicalNode): boolean %checks {
  return node instanceof DecoratorBlockNode;
}
