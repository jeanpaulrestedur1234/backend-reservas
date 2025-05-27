module.exports = {
  Reservation: {
    type: 'object',
    properties: {
      id: { type: 'string', example: 'resv_123' },
      userId: { type: 'string', example: 'user_001' },
      spaceId: { type: 'string', example: 'space_001' },
      startTime: { type: 'string', format: 'date-time', example: '2025-05-26T14:00:00Z' },
      endTime: { type: 'string', format: 'date-time', example: '2025-05-26T15:00:00Z' },
    },
    required: ['userId', 'spaceId', 'startTime', 'endTime'],
  },
};
