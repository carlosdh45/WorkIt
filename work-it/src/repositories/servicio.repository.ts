import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Servicio, ServicioRelations} from '../models';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.idServicio,
  ServicioRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Servicio, dataSource);
  }
}
