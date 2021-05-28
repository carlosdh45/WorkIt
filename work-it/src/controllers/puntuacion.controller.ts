import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Puntuacion} from '../models';
import {PuntuacionRepository} from '../repositories';

export class PuntuacionController {
  constructor(
    @repository(PuntuacionRepository)
    public puntuacionRepository : PuntuacionRepository,
  ) {}

  @post('/puntuacions')
  @response(200, {
    description: 'Puntuacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Puntuacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntuacion, {
            title: 'NewPuntuacion',
            exclude: ['idPuntuacion'],
          }),
        },
      },
    })
    puntuacion: Omit<Puntuacion, 'idPuntuacion'>,
  ): Promise<Puntuacion> {
    return this.puntuacionRepository.create(puntuacion);
  }

  @get('/puntuacions/count')
  @response(200, {
    description: 'Puntuacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Puntuacion) where?: Where<Puntuacion>,
  ): Promise<Count> {
    return this.puntuacionRepository.count(where);
  }

  @get('/puntuacions')
  @response(200, {
    description: 'Array of Puntuacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Puntuacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Puntuacion) filter?: Filter<Puntuacion>,
  ): Promise<Puntuacion[]> {
    return this.puntuacionRepository.find(filter);
  }

  @patch('/puntuacions')
  @response(200, {
    description: 'Puntuacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntuacion, {partial: true}),
        },
      },
    })
    puntuacion: Puntuacion,
    @param.where(Puntuacion) where?: Where<Puntuacion>,
  ): Promise<Count> {
    return this.puntuacionRepository.updateAll(puntuacion, where);
  }

  @get('/puntuacions/{id}')
  @response(200, {
    description: 'Puntuacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Puntuacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Puntuacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Puntuacion>
  ): Promise<Puntuacion> {
    return this.puntuacionRepository.findById(id, filter);
  }

  @patch('/puntuacions/{id}')
  @response(204, {
    description: 'Puntuacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Puntuacion, {partial: true}),
        },
      },
    })
    puntuacion: Puntuacion,
  ): Promise<void> {
    await this.puntuacionRepository.updateById(id, puntuacion);
  }

  @put('/puntuacions/{id}')
  @response(204, {
    description: 'Puntuacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() puntuacion: Puntuacion,
  ): Promise<void> {
    await this.puntuacionRepository.replaceById(id, puntuacion);
  }

  @del('/puntuacions/{id}')
  @response(204, {
    description: 'Puntuacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.puntuacionRepository.deleteById(id);
  }
}
