import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import { DeliveryAPIResult } from '@uniformdev/optimize-common';
import { indexedDbScopeStorage } from "@uniformdev/optimize-tracker-storage-indexeddb"
import intentManifest from './intentManifest.json';
import { createNextCookieStorage } from './nextCookieStorage';
import { NextPageContext } from 'next';
import { Tracker, TrackerLogLevels } from '@uniformdev/optimize-tracker-common';

// the Uniform tracker emits log data to the console.
// You can set how much here. Pass undefined to disable console logging.
// You can wire up other loggers if you desire regardless of this setting.
let logLevelThreshold: TrackerLogLevels = 'info';

// Reduce the tracker logging when exporting SSG content, to avoid polluting build logs.
// Next export workers/child processes set `__NEXT_DATA__.nextExport = true` when exporting.
// (this is optional, you can remove this if you don't like it)
if ((global as any)?.__NEXT_DATA__?.nextExport) {
  logLevelThreshold = 'error';
}

export const createLocalTracker = (ctx?: NextPageContext): Tracker =>
  createDefaultTracker({
    intentManifest: intentManifest as DeliveryAPIResult,
    storage: {
      scopes: indexedDbScopeStorage({
        scoringStorage: createNextCookieStorage(ctx),
      }),
    },
    logLevelThreshold,
  });

export const localTracker = createLocalTracker();