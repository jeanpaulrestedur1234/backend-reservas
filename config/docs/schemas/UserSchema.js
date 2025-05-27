module.exports = {
  User: {
    type: 'object',
    properties: {
      id: { type: 'string', example: 'user_001' },
      name: { type: 'string', example: 'Juan Pérez' },
      email: { type: 'string', example: 'juan@example.com' },
      createdAt: { type: 'string', format: 'date-time', example: '2025-05-01T10:00:00Z' },
      updatedAt: { type: 'string', format: 'date-time', example: '2025-05-10T18:30:00Z' },
    },
    required: ['id', 'name', 'email'],
  },
};
