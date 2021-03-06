/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import glob from 'glob';
import path from 'path';

/**
 * Find an android application path in the folder
 *
 * @param {String} folder Name of the folder where to seek
 * @return {String}
 */
export default function findManifest(folder) {
  const manifestPath = glob.sync(path.join('**', 'AndroidManifest.xml'), {
    cwd: folder,
    ignore: [
      'node_modules/**',
      '**/build/**',
      '**/debug/**',
      'Examples/**',
      'examples/**',
    ],
  })[0];

  return manifestPath ? path.join(folder, manifestPath) : null;
}
