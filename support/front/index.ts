// import {AnonServiceFront} from '@front/services/AnonServiceFront';
import Factory, { MakeSimFrontOption } from '@src/bootfactory';
// import { AuthServiceFront } from '@front/services/AuthServiceFront';
// import { LiveServiceFront } from '@front/services/LiveServiceFront';
// import { AuthPetServiceFront } from '@front/services/AuthPetServiceFront';
// import { AuthMsgServiceFront } from '@front/services/AuthMsgServiceFront';
// import { MyServiceFront } from '@front/services/MyServiceFront';
// import {AnonPetServiceFront} from '@front/services/AnonPetServiceFront';
// import { StoreManagerServiceFront } from '@front/services/StoreManagerServiceFront';
// import { StoreServiceFront } from '@front/services/StoreServiceFront';
const using = [
    // AnonServiceFront, AuthServiceFront,
    // LiveServiceFront, AuthMsgServiceFront,
    // AuthPetServiceFront, MyServiceFront,
    // AnonPetServiceFront, StoreManagerServiceFront, StoreServiceFront
];
Factory.create(MakeSimFrontOption(window), using).then(it => {
    it.run();
    // console.log(it)
});
