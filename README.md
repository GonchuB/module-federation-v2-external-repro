# Minimal reproduction of module federation v2 issue
external-remotes-plugin and @module-federation/enhanced

# Steps to reproduce

1. `npm i`
1. `npm run start:host`
1. `npm run start:remote`
1. Open `localhost:3000` and open the network tab
1. See `GET http://localhost:3001/[window.externalRemote] net::ERR_FAILED 404 (Not Found)` error in console

`[window.externalRemote]` is not being replaced in the request to fetch the remote.
