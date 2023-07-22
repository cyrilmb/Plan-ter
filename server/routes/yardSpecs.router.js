const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  try {
    const queryText = `
    INSERT into "yard" ("user_id", "width", "length")
    VALUES ($1, $2, $3, $4);
    `;
    const queryData = [
      req.body.userId,
      req.body.yardWidth,
      req.body.yardHeight,
    ];
    pool.query(queryText, queryData);
    res.sendStatus(201);
  } catch (error) {
    console.log('Error posting yard dimensions:', error);
  }
});

module.exports = router;
