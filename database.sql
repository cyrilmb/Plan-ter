-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "plot_library" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"yard_id" INT NOT NULL,
	"x_yard_coordinate" INT NOT NULL,
	"y_yard_coordinate" INT NOT NULL,
	"plot_name" varchar NOT NULL,
	"container_type" varchar NOT NULL,
	"width" integer NOT NULL,
	"length" integer NOT NULL,
	"soil_type" varchar,
	"sun_exposure" varchar,
	CONSTRAINT "plot_library_pk" PRIMARY KEY ("id")
	);
	
CREATE TABLE "plant_library" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"common_name" varchar NOT NULL,
	"sci_name" varchar,
	"height_cm" integer,
	"radius_cm" integer,
	"perennial" BOOLEAN,
	"sprout_start" DATE,
	"death_dormant_start" DATE,
	"leaf_type" varchar,
	"flower_color" varchar,
	"flower_start" DATE,
	"flower_end" DATE,
	"fruit_type" varchar,
	"fruit_start" DATE,
	"fruit_end" DATE,
	"sun_exposure" integer,
	"soil_type" varchar,
	CONSTRAINT "plant_library_pk" PRIMARY KEY ("id")
	);
	
CREATE TABLE "plot_layout" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"plot_id" integer NOT NULL,
	"plant_id" integer NOT NULL,
	"coordinates" varchar NOT NULL UNIQUE,
	"date_planted" DATE NOT NULL,
	"notes" varchar NOT NULL,
	CONSTRAINT "plot_layout_pk" PRIMARY KEY ("id")
	);

CREATE TABLE "yard" (
	"id" serial NOT NULL,
	"user_id" INT NOT NULL,
	"yard_name" VARCHAR(255),
	"width" INT NOT NULL,
	"length" INT NOT NULL,
	PRIMARY KEY ("id")
);
	
ALTER TABLE "plot_library" ADD CONSTRAINT "plot_library_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plot_library" ADD CONSTRAINT "plot_library_fk1" FOREIGN KEY ("yard_id") REFERENCES "yard"("id");
ALTER TABLE "plant_library" ADD CONSTRAINT "plant_library_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk1" FOREIGN KEY ("plot_id") REFERENCES "plot_library"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk2" FOREIGN KEY ("plant_id") REFERENCES "plant_library"("id");
ALTER TABLE "yard" ADD CONSTRAINT "yard_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");


INSERT INTO "plant_library" ("user_id", "common_name", "sci_name", "height_cm", "radius_cm", "perennial", "sprout_start", "death_dormant_start", "leaf_type", "flower_color", "flower_start", "flower_end", "fruit_type", "fruit_start", "fruit_end", "sun_exposure", "soil_type")
VALUES
(1, 'Rose', 'Rosa', 50, 20, true, '2023-04-01', '2023-12-01', 'Compound', 'Red', '2023-05-01', '2023-06-30', 'Drupe', '2023-07-01', '2023-08-31', 7, 'Loam'),
(1, 'Tulip', 'Tulipa', 30, 10, false, '2023-03-15', NULL, 'Simple', 'Yellow', '2023-04-15', '2023-05-15', 'Capsule', '2023-06-01', '2023-07-31', 6, 'Sandy'),
(1, 'Sunflower', 'Helianthus', 200, 60, true, '2023-05-01', '2023-12-01', 'Simple', 'Yellow', '2023-06-01', '2023-08-15', 'Achene', '2023-09-01', '2023-10-31', 8, 'Loam'),
(1, 'Lily', 'Lilium', 80, 25, true, '2023-04-15', '2023-12-01', 'Simple', 'White', '2023-05-15', '2023-07-15', 'Capsule', '2023-08-01', '2023-09-30', 6, 'Clay'),
(1, 'Daisy', 'Bellis perennis', 20, 5, true, '2023-03-01', '2023-12-01', 'Simple', 'Pink', '2023-04-01', '2023-05-31', 'Achene', '2023-06-15', '2023-07-31', 7, 'Sandy'),
(1, 'Cactus', 'Cactaceae', 40, 30, false, NULL, NULL, 'Simple', 'Yellow', NULL, NULL, 'Berry', '2023-08-01', '2023-09-30', 9, 'Sandy'),
(1, 'Maple', 'Acer', 150, 100, true, '2023-04-15', '2023-11-30', 'Compound', 'Red', '2023-05-15', '2023-07-15', NULL, NULL, NULL, 6, 'Loam'),
(1, 'Fern', 'Filicopsida', 40, 30, true, '2023-03-15', '2023-12-01', 'Pinnate', NULL, NULL, NULL, NULL, NULL, NULL, 5, 'Moist'),
(1, 'Orchid', 'Orchidaceae', 25, 10, false, NULL, NULL, 'Simple', 'Purple', NULL, NULL, NULL, NULL, NULL, 5, 'Moist')