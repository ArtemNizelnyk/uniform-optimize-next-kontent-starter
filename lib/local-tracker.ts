import { createDefaultTracker } from '@uniformdev/optimize-tracker-browser';
import intentManifest from './intentManifest.json';

const localTracker = createDefaultTracker({
  intentManifest,
  logLevelThreshold: 'info',
});

export default localTracker;