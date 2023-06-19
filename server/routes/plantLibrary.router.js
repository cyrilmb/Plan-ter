const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, async (req, res) => {
  try {
    const queryText = `SELECT * FROM "plant_library"
    WHERE "user_id" = $1
    `;

    const plantLibraryResponse = await pool.query(queryText, [req.params.id]);
    const plantList = plantLibraryResponse.rows;

    res.send(plantList);
  } catch (error) {
    res.sendStatus(500);
    console.log('Error getting plant library', error);
  }
});

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
