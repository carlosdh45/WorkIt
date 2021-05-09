import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {WorkItDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.idUsuario,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.WorkIt_DB') dataSource: WorkItDbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
