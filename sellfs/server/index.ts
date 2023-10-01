import 'reflect-metadata';
import { SSRFilter } from 'simple-boot-http-ssr/filters/SSRFilter';
import Factory, { MakeSimFrontOption } from '@src/bootfactory';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { HttpServerOption } from 'simple-boot-http-server/option/HttpServerOption';
import { SimpleBootHttpSSRServer } from 'simple-boot-http-ssr';
import { ResourceFilter } from 'simple-boot-http-server/filters/ResourceFilter';
import { UserServer } from '@server/domains/UserServer';
import { DBInitializer } from '@server/initializers/DBInitializer';
import { DataSource, EntityManager } from 'typeorm';
import { IntentSchemeFilter } from 'simple-boot-http-ssr/filters/IntentSchemeFilter';
import { IndexRouter } from '@server/routers/IndexRouter';
import { RequestResponse } from 'simple-boot-http-server/models/RequestResponse';


Promise.all([new DBInitializer().run()]).then(async ([connection]) => {
  const otherInstanceSim = new Map<ConstructorType<any>, any>();
  otherInstanceSim.set(DataSource, connection);
  return otherInstanceSim;
}).then((otherInstanceSim) => {
  const option = new HttpServerOption();
  const frontDistPath = 'dist-front';
  option.filters = [
    new ResourceFilter(frontDistPath,
      ['\\.js$', '\\.map$', '\\.ico$', '\\.png$', '\\.jpg$', '\\.jpeg$', '\\.gif$', 'offline\\.html$', 'webmanifest$', 'manifest\\.json', 'service-worker\\.js$', 'googlebe4b1abe81ab7cf3\\.html$']
    ),
    IntentSchemeFilter,
    new SSRFilter({
      frontDistPath: frontDistPath,
      factorySimFrontOption: (window: any) => MakeSimFrontOption(window),
      factory: Factory,
      poolOption: {
        max: 10,
        min: 1,
      },
      using: [UserServer],
      ssrExcludeFilter: (rr: RequestResponse) => {
        const url = rr.reqUrl;
        const firstExcludeFilter = [/^\/api(\/)?.*/];
        for (const excludeRegExp of firstExcludeFilter) {
          if (excludeRegExp.test(url)) {
            return true;
          }
        }
        return false;
      },
      domExcludes: []
    }, otherInstanceSim)
  ];
  option.listen.listeningListener = (server: SimpleBootHttpSSRServer) => {
    console.log(`startup server ${server.option.listen.port}`);
  }

  const simpleBootHttpSSRServer = new SimpleBootHttpSSRServer(IndexRouter, option);
  simpleBootHttpSSRServer.run(otherInstanceSim);
  return simpleBootHttpSSRServer;
}).then((server) => {
  console.log('server startUp finish!!', server.option.listen);
});
