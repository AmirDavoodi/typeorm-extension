import type { DataSourceCacheOption } from '../data-source';
import type { EnvironmentName } from './constants';

export interface Environment {
    env: `${EnvironmentName}`,

    // Seeder
    seeds: string[],
    factories: string[],

    // DataSource
    type?: string,
    url?: string,
    host?: string,
    port?: number,
    username?: string,
    password?: string,
    database?: string,
    sid?: string, // string ??
    schema?: string, // string ??
    /**
     * dropSchema
     */
    schemaDrop?: boolean,
    extra?: any,
    synchronize?: boolean,
    migrations: string[],
    migrationsRun?: boolean,
    migrationsTableName?: string,
    entities: string[],
    entityPrefix?: string,
    metadataTableName?: string,
    subscribers: string[],
    logging: string[] | boolean | string,
    logger?: string,
    maxQueryExecutionTime?: string,
    debug?: string,
    cache?: DataSourceCacheOption,
    uuidExtension?: string
}
