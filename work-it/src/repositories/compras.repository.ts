import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Compras, ComprasRelations} from '../models';

export class ComprasRepository extends DefaultCrudRepository<
  Compras,
  typeof Compras.prototype.idCompras,
  ComprasRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Compras, dataSource);
  }
}
