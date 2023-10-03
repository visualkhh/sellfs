# develop
## project setting
```shell
git submodule init
git submodule update
```

### dom-render
```shell
cd libs/dom-render
git switch master
git pull
npm install
npm run tsc:watch
```

### simple-boot-core
```shell
cd libs/simple-boot-core
git switch master
git pull
npm install
npm run tsc:watch
```

### simple-boot-front
```shell
cd libs/simple-boot-front
git switch master
git pull
npm install
npm run tsc:watch
```

### simple-boot-http-server
```shell
cd libs/simple-boot-http-server
git switch master
git pull
npm install
npm run tsc:watch
```

### simple-boot-http-ssr
```shell
cd libs/simple-boot-http-ssr
git switch master
git pull
npm install
npm run tsc:watch
```

### sellffs
```
cd sellfs <- root directory
npm install
npm run bundle:front:watch --workspace=sellfs
npm run bundle:server:watch --workspace=sellfs
npm run serve:server:watch --workspace=sellfs
```


# project develop start
```shell
npm run app:bundle:watch
npm run serve:watch
```


# db setting
```sql
CREATE DATABASE sellfs CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER DATABASE sellfs CHARACTER SET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```