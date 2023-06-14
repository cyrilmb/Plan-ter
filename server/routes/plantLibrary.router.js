const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const queryText = `SELECT * FROM "plant_library"
    `;

    const plantLibraryResponse = await pool.query(queryText);
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
