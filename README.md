# develop
dom-render
```
cd libs/dom-render
npm install
npm run tsc:watch
```

simple-boot-core
```
cd libs/simple-boot-core
npm install
npm run tsc:watch
```

simple-boot-front
```
cd libs/simple-boot-front
npm install
npm run tsc:watch
```

simple-boot-http-server
```
cd libs/simple-boot-http-server
npm install
npm run tsc:watch
```

simple-boot-http-ssr
```
cd libs/simple-boot-http-ssr
npm install
npm run tsc:watch
```

support
```
cd support <- root directory
npm run bundle:front:watch --workspace=support
npm run bundle:server:watch --workspace=support
npm run serve:server:watch --workspace=support
```