/**
 *  Copyright (c) 2019 GraphQL Contributors
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 */

import { Uri } from 'graphql-language-service-types';
import { WatchmanCommandResponse } from '../GraphQLWatchman';

class MockWatchmanClient {
  checkVersion(): Promise<void> {
    return Promise.resolve();
  }

  listFiles(
    _entryPath: Uri,
    _options: { [name: string]: any } = {},
  ): Promise<Array<any>> {
    return Promise.resolve([]);
  }

  runCommand(..._args: Array<any>): Promise<any> {
    return Promise.resolve();
  }

  watchProject(_directoryPath: Uri): Promise<WatchmanCommandResponse> {
    return Promise.resolve({
      version: '',
      relative_path: '',
      watcher: '',
      watch: '',
    });
  }

  subscribe(
    _entryPath: Uri,
    _callback: (result: Object) => void,
  ): Promise<void> {
    return Promise.resolve();
  }

  dispose(): void {}
}

export default MockWatchmanClient;
