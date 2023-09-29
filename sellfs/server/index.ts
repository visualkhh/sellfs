import 'reflect-metadata';
import {SSRFilter} from 'simple-boot-http-ssr/filters/SSRFilter';
import Factory, {MakeSimFrontOption} from '@src/bootfactory';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {HttpServerOption} from 'simple-boot-http-server/option/HttpServerOption';
import {SimpleBootHttpSSRServer} from 'simple-boot-http-ssr';
import {AppRouter} from '@src/app.router';
import {ResourceFilter} from 'simple-boot-http-server/filters/ResourceFilter';
import {UserServerService} from '@server/services/UserServerService';
import { DBInitializer } from '@server/initializers/DBInitializer';
import {DataSource, EntityManager} from 'typeorm';
import { IntentSchemeFilter } from 'simple-boot-http-ssr/filters/IntentSchemeFilter';

const otherInstanceSim = new Map<ConstructorType<any>, any>();
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
        using: [UserServerService],
        domExcludes: []
    }, otherInstanceSim)
];
option.listen.listeningListener = (server: SimpleBootHttpSSRServer) => {
    console.log(`startup server ${server.option.listen.port}`);
}


Promise.all([new DBInitializer().run()]).then(async ([connection]) => {
    otherInstanceSim.set(DataSource, connection);
}).then(() => {
    new SimpleBootHttpSSRServer(AppRouter, option).run(otherInstanceSim);
}).then(() => {
    console.log('server startUp finish!!', option.listen);
});

// const ssr = new SimpleBootHttpSSRServer(IndexRouter, option);
// await ssr.run(otherInstanceSim);
// return ssr;
//
// console.log('server startUp finish!!', it.option.listen);
