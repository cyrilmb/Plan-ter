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
	
ALTER TABLE "plot_library" ADD CONSTRAINT "plot_library_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plant_library" ADD CONSTRAINT "plant_library_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk1" FOREIGN KEY ("plot_id") REFERENCES "plot_library"("id");
ALTER TABLE "plot_layout" ADD CONSTRAINT "plot_layout_fk2" FOREIGN KEY ("plant_id") REFERENCES "plant_library"("id");