import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Puntuacion, PuntuacionRelations} from '../models';

export class PuntuacionRepository extends DefaultCrudRepository<
  Puntuacion,
  typeof Puntuacion.prototype.idPuntuacion,
  PuntuacionRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Puntuacion, dataSource);
  }
}
