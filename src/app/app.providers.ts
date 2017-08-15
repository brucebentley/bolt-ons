/**
 * app.providers.ts
 */

// import { ApiService } from 'core/services/connect-api';
// import { ProfilesService } from 'core/services/profile';
// import { ProfilesQuery } from 'core/queries';
// import { AuthActionFactory, ProfileActionFactory } from 'core/actions';

const SERVICES = [
    // ApiService,
    // ProfilesService,
];

const ACTION_FACTORIES = [
    // ProfileActionFactory,
    // AuthActionFactory,
];

const QUERIES = [
    // ProfilesQuery,
];

export const APP_PROVIDERS = [
    ...SERVICES,
    ...QUERIES,
    ...ACTION_FACTORIES
];
