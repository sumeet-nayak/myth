/**
 * Application Configuration
 * This file should NOT be committed to version control if it contains sensitive data.
 * Use environment variables or a secure configuration server in production.
 */

// Load API key from environment variable (when using a build process)
// or fallback to reading from a secure location
window.APP_CONFIG = {
  API_KEY: process.env.REACT_APP_API_KEY || localStorage.getItem('apiKey') || 'TrSl7LCkCKvZkKz',
  MARKUP: 0.20,
  ENDPOINTS: {
    availability: 'https://api.connectreseller.com/ConnectReseller/ESHOP/checkdomainavailable',
    pricing: 'https://api.connectreseller.com/ConnectReseller/ESHOP/checkDomainPrice',
    suggestions: 'https://api.connectreseller.com/ConnectReseller/ESHOP/domainSuggestion'
  },
  YEARS: [1, 2, 3, 5, 10]
};

// Note: For production, replace the API_KEY with a call to a secure backend
// that retrieves the key from environment variables server-side:
// fetch('/api/config')
//   .then(r => r.json())
//   .then(data => { window.APP_CONFIG.API_KEY = data.apiKey; });
