//
// mdn-bcd-collector: lib/config.ts
// Common variables used throughout all of the collector
//
// © Gooborg Studios
// See the LICENSE file for copyright details
//

import {fileURLToPath} from 'node:url';

export const BCD_DIR = fileURLToPath(
  new URL(process.env.BCD_DIR || `../../browser-compat-data`, import.meta.url)
);

export const RESULTS_DIR = fileURLToPath(
  new URL(process.env.RESULTS_DIR || '../../mdn-bcd-results', import.meta.url)
);