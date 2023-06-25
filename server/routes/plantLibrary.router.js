const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Get user's plant library
router.get('/:userId', rejectUnauthenticated, async (req, res) => {
  try {
    const queryText = `SELECT * FROM "plant_library"
    WHERE "user_id" = $1
    `;
    const plantLibraryResponse = await pool.query(queryText, [
      req.params.userId,
    ]);
    const plantList = plantLibraryResponse.rows;

    res.send(plantList);
  } catch (error) {
    res.sendStatus(500);
    console.log('Error getting plant library:', error);
  }
});

//Post to add a new plant to plant library
router.post('/', rejectUnauthenticated, async (req, res) => {
  try {
    const queryText = `INSERT INTO "plant_library" ("user_id", "common_name",
    "sci_name",
    "height_cm",
    "radius_cm",
    "perennial",
    "sprout_start",
    "death_dormant_start",
    "leaf_type",
    "flower_color",
    "flower_start",
    "flower_end",
    "fruit_type",
    "fruit_start",
    "fruit_end",
    "sun_exposure",
    "soil_type")
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    `;
    const queryParams = [
      req.body.user_id,
      req.body.common_name,
      req.body.sci_name,
      req.body.height_cm,
      req.body.radius_cm,
      req.body.perennial,
      req.body.sprout_start,
      req.body.death_dormant_start,
      req.body.leaf_type,
      req.body.flower_color,
      req.body.flower_start,
      req.body.flower_end,
      req.body.fruit_type,
      req.body.fruit_start,
      req.body.fruit_end,
      req.body.sun_exposure,
      req.body.soil_type,
    ];
    await pool.query(queryText, queryParams);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    console.log('Error posting new plant to libaray:', error);
  }
});

router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
