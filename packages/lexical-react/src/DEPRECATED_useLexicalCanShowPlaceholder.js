/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type {LexicalEditor} from 'lexical';

import {useCanShowPlaceholder} from './shared/useCanShowPlaceholder';

export function useLexicalCanShowPlaceholder(editor: LexicalEditor): boolean {
  return useCanShowPlaceholder(editor);
}
