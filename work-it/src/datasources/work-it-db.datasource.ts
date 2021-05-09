import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'WorkIt_DB',
  connector: 'mssql',
  url: 'mssql://Erik:1234@DESKTOP-35P7LP2/WorkIt',
  host: '',
  port: 1433,
  user: '',
  password: '',
  database: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class WorkItDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'WorkIt_DB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.WorkIt_DB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
