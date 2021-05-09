import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Ventas, VentasRelations} from '../models';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.idVentas,
  VentasRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Ventas, dataSource);
  }
}
