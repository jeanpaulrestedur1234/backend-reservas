const express = require('express');
const router = express.Router();

const SequelizeReservationRepository = require('../../../adapters/db/SequelizeReservationRepository');
const ReservationService = require('../../../domain/services/ReservationService');
const ReservationController = require('../controllers/ReservationController');

// Instancias
const reservationRepository = new SequelizeReservationRepository();
const reservationService = new ReservationService(reservationRepository);
const reservationController = new ReservationController(reservationService);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               spaceId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente
 */
router.post('/', reservationController.createReservation);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Cancela una reserva por ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la reserva a cancelar
 *     responses:
 *       200:
 *         description: Reserva cancelada exitosamente
 *       404:
 *         description: Reserva no encontrada
 */
router.delete('/:id', reservationController.cancelReservation);

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Lista todas las reservas
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   resourceId:
 *                     type: string
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   endTime:
 *                     type: string
 *                     format: date-time
 */
router.get('/', reservationController.listReservations);


/**
 * @swagger
 * /reservations/filter:
 *   post:
 *     summary: Lista reservas con filtros opcionales
 *     tags: [Reservations]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               spaceId:
 *                 type: integer
 *                 example: 1
 *               userId:
 *                 type: integer
 *                 example: 2
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-05-01T00:00:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-05-31T23:59:59Z"
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   spaceId:
 *                     type: integer
 *                   startTime:
 *                     type: string
 *                     format: date-time
 *                   endTime:
 *                     type: string
 *                     format: date-time
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.post('/filter', reservationController.listReservations);


module.exports = router;
