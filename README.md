# ffxiv-collectables

### Tech stack
- Development Tools
  - JSPM 0.16x
    - SystemJS
    - Babel 5
  - Chrome
  - Node 5
  - systemjs-hot-reloader
  - chokidar-socket-emitter

- Libraries
  - React
  - React Bootstrap
  - mObservable


### How to set up dev environment
1. Pull and navigate to repo
1. Terminal window 1: ```npm install``` (for chokidar, jspm local dev)
1. Then ```jspm install``` (for libraries)
1. Terminal window 2: ```node chokidar.js```
1. Terminal window 3: run ```"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --allow-file-access-from-files```
1. Open ```index.html``` in browser.
