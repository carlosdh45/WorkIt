import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Facturacion, FacturacionRelations} from '../models';

export class FacturacionRepository extends DefaultCrudRepository<
  Facturacion,
  typeof Facturacion.prototype.idFactura,
  FacturacionRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Facturacion, dataSource);
  }
}
