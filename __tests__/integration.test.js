const request = require('supertest');
const app = require('../src/app');

describe('API Integration Tests', () => {
  it('GET /pedidos should return a list of pedidos', async () => {
    const response = await request(app).get('/pedidos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /pedidos should create a new pedido', async () => {
    const newPedido = {
      endereco: {
        latitude: -23.550520,
        longitude: -46.633308
      },
      produto: 'Produto Teste',
      quantidade: 1
    };
    const response = await request(app).post('/pedidos').send(newPedido);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(newPedido));
  });

  it('GET /rotas should return a list of rotas', async () => {
    const response = await request(app).get('/rotas');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /rotas should create a new rota', async () => {
    const newRota = {
      latitude: -23.550520,
      longitude: -46.633308
    };
    const response = await request(app).post('/rotas').send(newRota);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(expect.objectContaining(newRota));
  });

  it('GET /melhor-rota/:id should return the best delivery route', async () => {
    const rotaId = 1; // Ajuste conforme necessário
    const response = await request(app).get(`/melhor-rota/${rotaId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({ message: 'Melhor rota calculada' }));
  });
});
