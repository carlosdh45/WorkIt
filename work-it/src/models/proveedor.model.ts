import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Proveedor'}}})
export class Proveedor extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'idProveedor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idProveedor: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idUsuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idUsuario: number;

  @property({
    type: 'string',
    length: 20,
    mssql: {columnName: 'descripcion', dataType: 'char', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  descripcion?: string;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'habilidades', dataType: 'char', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  habilidades?: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {columnName: 'educacion', dataType: 'char', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  educacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Proveedor>) {
    super(data);
  }
}

export interface ProveedorRelations {
  // describe navigational properties here
}

export type ProveedorWithRelations = Proveedor & ProveedorRelations;
