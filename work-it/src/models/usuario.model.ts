import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Usuario'}}})
export class Usuario extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'idUsuario', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idUsuario: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mssql: {columnName: 'nombreUsuario', dataType: 'char', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombreUsuario: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mssql: {columnName: 'nombre', dataType: 'char', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mssql: {columnName: 'apellido', dataType: 'char', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mssql: {columnName: 'pais', dataType: 'char', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'email', dataType: 'char', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mssql: {columnName: 'contraseña', dataType: 'char', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  contraseA: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'fechaRegistro', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fechaRegistro: string;

  @property({
    type: 'string',
    length: 30,
    mssql: {columnName: 'ocupacion', dataType: 'char', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  ocupacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
