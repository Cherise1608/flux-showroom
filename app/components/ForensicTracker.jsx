'use client';

import { useEffect } from 'react';
import { initForensicTracking } from '../../lib/fingerprint';

/**
 * Invisible client component that activates the forensic tracking layer.
 * Renders nothing to the DOM.
 */
export default function ForensicTracker() {
  useEffect(() => {
    initForensicTracking();
  }, []);

  return null;
}
