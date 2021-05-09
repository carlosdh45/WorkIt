import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.idCategoria,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
