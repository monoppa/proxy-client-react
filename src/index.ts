/** @format */

export type {
  IConfig,
  IContext,
  IMutableContext,
  IVariant,
  IToggle,
} from 'unleash-proxy-client';
export {
  UnleashClient,
  IStorageProvider,
  LocalStorageProvider,
  InMemoryStorageProvider,
} from 'unleash-proxy-client';

import FlagProvider from './FlagProvider';
import useFlag from './useFlag';
import useFlagsStatus from './useFlagsStatus';
import useVariant from './useVariant';
import useUnleashContext from './useUnleashContext';
import useUnleashClient from './useUnleashClient';
import FlagContext from "./FlagContext";

export {
  FlagProvider,
  useFlag,
  useFlagsStatus,
  useVariant,
  useUnleashContext,
  useUnleashClient,
  FlagContext,
};

export default FlagProvider;
