/**
 * Forensic tracking layer.
 * Generates a browser fingerprint and monitors for unauthorized reproduction attempts.
 */

/**
 * djb2 hash function - simple, fast, no external dependencies.
 * Returns a positive 32-bit hex string.
 */
function djb2Hash(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) & 0xffffffff;
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

/**
 * Generates a browser fingerprint from environment signals.
 * @returns {string} Hex string fingerprint.
 */
export function generateFingerprint() {
  const signals = [
    typeof navigator !== 'undefined' ? navigator.userAgent : '',
    typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : '',
    typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : '',
    typeof navigator !== 'undefined' ? navigator.language : '',
    typeof navigator !== 'undefined' ? navigator.platform : '',
  ];

  return djb2Hash(signals.join('|'));
}

/**
 * Initialises the forensic tracking layer:
 *  - Stamps document.body with a data-fp attribute.
 *  - Listens for screenshot key-combos and logs a warning.
 *  - Detects DevTools via viewport dimension threshold.
 */
export function initForensicTracking() {
  if (typeof window === 'undefined') return;

  // 1. Stamp fingerprint on <body>
  const fp = generateFingerprint();
  document.body.setAttribute('data-fp', fp);

  // 2. Screenshot key detection
  window.addEventListener('keydown', (e) => {
    const isPrintScreen = e.key === 'PrintScreen';
    const isMacScreenshot =
      e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4');

    if (isPrintScreen || isMacScreenshot) {
      console.warn(
        '[Forensic] Screenshot attempt detected. Fingerprint: ' + fp
      );
    }
  });

  // 3. DevTools detection via viewport threshold
  const DEVTOOLS_THRESHOLD = 160;

  function checkDevTools() {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > DEVTOOLS_THRESHOLD || heightDiff > DEVTOOLS_THRESHOLD) {
      console.log(
        '%cThis site is monitored. Unauthorized reproduction is tracked.',
        'color:red;font-weight:bold;font-size:14px;'
      );
    }
  }

  // Check periodically
  setInterval(checkDevTools, 2000);
  checkDevTools();
}
