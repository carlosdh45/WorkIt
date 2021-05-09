import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Puntuacion'}}})
export class Puntuacion extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'idPuntuacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idPuntuacion: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idServicio', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idServicio: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'puntuacion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  puntuacion: number;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'comentarios', dataType: 'char', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  comentarios?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Puntuacion>) {
    super(data);
  }
}

export interface PuntuacionRelations {
  // describe navigational properties here
}

export type PuntuacionWithRelations = Puntuacion & PuntuacionRelations;
