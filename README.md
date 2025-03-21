# Minimal reproduction of module federation v2 issue
Bundle size increase when swapping webpack plugin for @module-federation/enhanced

# Steps to reproduce

1. `npm i`
1. `npm run build:host`
1. Open `host/reports/bundle-stats.html`
1. See ~`74kb` in initial js

## Baseline

1. Swap the following commented lines in `host/webpack.config.js`
```
//const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
```
1. `npm run build:host`
1. Open `host/reports/bundle-stats.html`
1. See ~`4kb` in initial js
