# develop
## project setting
```shell
git submodule init
git submodule update
```

### dom-render
```shell
cd libs/dom-render
npm install
npm run tsc:watch
```

### simple-boot-core
```shell
cd libs/simple-boot-core
npm install
npm run tsc:watch
```

### simple-boot-front
```shell
cd libs/simple-boot-front
npm install
npm run tsc:watch
```

### simple-boot-http-server
```shell
cd libs/simple-boot-http-server
npm install
npm run tsc:watch
```

### simple-boot-http-ssr
```shell
cd libs/simple-boot-http-ssr
npm install
npm run tsc:watch
```

### selffs
```
cd selffs <- root directory
npm install
npm run bundle:front:watch --workspace=selffs
npm run bundle:server:watch --workspace=selffs
npm run serve:server:watch --workspace=selffs
```
