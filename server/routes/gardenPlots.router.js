const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Get user's garden plot info
router.get('/:userId', rejectUnauthenticated, async (req, res) => {
  try {
    const queryText = `SELECT * FROM "plot_library"
      WHERE "user_id" = $1
      `;
    const gardenPlotsResponse = await pool.query(queryText, [
      req.params.userId,
    ]);
    const plots = gardenPlotsResponse.rows;

    res.send(plots);
  } catch (error) {
    res.sendStatus(500);
    console.log('Error getting user garden plots:', error);
  }
});

module.exports = router;
