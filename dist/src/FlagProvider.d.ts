import * as React from 'react';
import { IConfig } from 'unleash-proxy-client';
interface IFlagProvider {
    config: IConfig;
}
declare const FlagProvider: React.FC<IFlagProvider>;
export default FlagProvider;
