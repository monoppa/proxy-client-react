/** @format */
import * as React from 'react';
import { UnleashClient, IConfig } from 'unleash-proxy-client';
interface IFlagProvider {
    config?: IConfig;
    unleashClient?: UnleashClient;
}
declare const FlagProvider: React.FC<IFlagProvider>;
export default FlagProvider;
