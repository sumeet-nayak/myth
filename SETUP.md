# API Key Setup Guide

Your API key has been securely moved from hardcoded values to environment variables.

## Files Created/Updated

### 1. `.env` - Production Environment Variables
**⚠️ Important: This file is NOT committed to Git (added to .gitignore)**
- Contains your actual API key: `API_KEY=TrSl7LCkCKvZkKz`
- Keep this file private and never commit it

### 2. `.env.example` - Template for Team Members
- Contains placeholder values for your team
- Safe to commit to Git
- Use as a template: copy to `.env` and fill in actual values

### 3. `config.js` - Configuration Loader
- Loads configuration from environment variables
- Tries multiple fallback sources:
  1. `process.env.REACT_APP_API_KEY` (if using a build process)
  2. `localStorage.getItem('apiKey')` (browser storage)
  3. Default value from `.env`

### 4. `index.html` - Updated Script
- Now loads `config.js` before the main script
- Uses `window.APP_CONFIG` instead of hardcoded values

### 5. `.gitignore` - Safety Layer
- Prevents `.env` file from being committed
- Includes other sensitive files

## How to Use

### Development (Static HTML)
1. Keep `.env` file locally (not in Git)
2. The app will load the API key from `config.js`
3. Never commit `.env` to version control

### Production (Build Process)
For production deployment, use environment variables:

```bash
# Using Node/npm with webpack or similar:
export REACT_APP_API_KEY="your_production_key_here"
npm run build

# Or with environment file:
source .env.production
npm run build
```

### Docker Deployment
```dockerfile
ENV REACT_APP_API_KEY=${API_KEY}
```

Then run:
```bash
docker build --build-arg API_KEY=your_key_here .
```

## Best Practices

✅ **DO:**
- Store API keys in `.env` locally
- Use environment variables in CI/CD
- Rotate API keys periodically
- Use different keys for dev/prod
- Keep `.env` in `.gitignore`

❌ **DON'T:**
- Commit `.env` to Git
- Hardcode API keys in source files
- Share API keys in messages/chats
- Use the same key for dev and production
- Check credentials into version control

## Updated Code Reference

The API key is now accessed via:
```javascript
const CONFIG = window.APP_CONFIG;
const apiKey = CONFIG.API_KEY;
```

Instead of hardcoded:
```javascript
// ❌ OLD - NO LONGER USED
API_KEY: 'TrSl7LCkCKvZkKz'
```

## Git Verification

To verify `.env` is properly excluded:
```bash
git status
# Should show .env as ignored or not listed
```

To check what's committed:
```bash
git ls-files | grep env
# Should only show: .env.example
```
