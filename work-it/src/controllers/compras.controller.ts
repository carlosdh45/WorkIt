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
import {Compras} from '../models';
import {ComprasRepository} from '../repositories';

export class ComprasController {
  constructor(
    @repository(ComprasRepository)
    public comprasRepository : ComprasRepository,
  ) {}

  @post('/compras')
  @response(200, {
    description: 'Compras model instance',
    content: {'application/json': {schema: getModelSchemaRef(Compras)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {
            title: 'NewCompras',
            exclude: ['idCompras'],
          }),
        },
      },
    })
    compras: Omit<Compras, 'idCompras'>,
  ): Promise<Compras> {
    return this.comprasRepository.create(compras);
  }

  @get('/compras/count')
  @response(200, {
    description: 'Compras model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Compras) where?: Where<Compras>,
  ): Promise<Count> {
    return this.comprasRepository.count(where);
  }

  @get('/compras')
  @response(200, {
    description: 'Array of Compras model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Compras, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Compras) filter?: Filter<Compras>,
  ): Promise<Compras[]> {
    return this.comprasRepository.find(filter);
  }

  @patch('/compras')
  @response(200, {
    description: 'Compras PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {partial: true}),
        },
      },
    })
    compras: Compras,
    @param.where(Compras) where?: Where<Compras>,
  ): Promise<Count> {
    return this.comprasRepository.updateAll(compras, where);
  }

  @get('/compras/{id}')
  @response(200, {
    description: 'Compras model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Compras, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Compras, {exclude: 'where'}) filter?: FilterExcludingWhere<Compras>
  ): Promise<Compras> {
    return this.comprasRepository.findById(id, filter);
  }

  @patch('/compras/{id}')
  @response(204, {
    description: 'Compras PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {partial: true}),
        },
      },
    })
    compras: Compras,
  ): Promise<void> {
    await this.comprasRepository.updateById(id, compras);
  }

  @put('/compras/{id}')
  @response(204, {
    description: 'Compras PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compras: Compras,
  ): Promise<void> {
    await this.comprasRepository.replaceById(id, compras);
  }

  @del('/compras/{id}')
  @response(204, {
    description: 'Compras DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.comprasRepository.deleteById(id);
  }
}
