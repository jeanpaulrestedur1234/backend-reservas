module.exports = {
  Space: {
    type: 'object',
    properties: {
      id: { type: 'string', example: 'space_001' },
      name: { type: 'string', example: 'Sala de reuniones A' },
      description: { type: 'string', example: 'Sala equipada con proyector y pizarra' },
      capacity: { type: 'integer', example: 10 },
      createdAt: { type: 'string', format: 'date-time', example: '2025-04-10T09:00:00Z' },
      updatedAt: { type: 'string', format: 'date-time', example: '2025-04-11T10:00:00Z' },
    },
    required: ['id', 'name', 'capacity'],
  },
};
