import {onLCP, onINP, onCLS} from 'web-vitals/attribution';

export function reportWebVitalsToAnalytics(metric) {
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function setupWebVitals() {
  onCLS(reportWebVitalsToAnalytics);
  onINP(reportWebVitalsToAnalytics);
  onLCP(reportWebVitalsToAnalytics);
}