# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


CREATE TABLE locations (id SERIAL, name TEXT, address TEXT, city TEXT, state VARCHAR(2), directions TEXT, ada BOOL, cleanliness INT, staff_friendliness INT, image TEXT);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Temple Coffee', '1010 9th Street', 'Sacramento', 'CA', 'Located to the left of counter down hallway', true, 4 ,5);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Sacramento Superior Court', '720 9th', 'Sacramento', 'CA', ' 6th floor', true, 4 ,3);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Zen Sushi', '900 15th Street', 'Sacramento', 'CA', 'You must be a paying customer.', true, 3 ,4);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Sandra Dees BBQ & Seafood', '601 15th', 'Sacramento', 'CA', 'Towards the back of the dining area by their kitchen hallway', true, 4, 2);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Painted Cork', '1624 J Street', 'Sacramento', 'CA', 'In the back, you must be 21', true, 4, 2);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Sacramento Gay and Lesbian Center', '1927 L street', 'Sacramento', 'CA', 'Ask Luis or Robyn (who are usually at the front desk) to use the restroom. They point you in the right direction.', true, 4, 5);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Sacremento Natural Foods Co Op', '2820 R Street', 'Sacramento', 'CA', 'first floor, near the elevator and microwaves', true, 4, 5);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Cafe Morocco', '1221 Alhambra Blv', 'Sacramento', 'CA', 'first floor, near the elevator and microwaves', true, 4, 4);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('The Shack', '5201 Folsom Blv', 'Sacramento', 'CA', 'Behind the restaurant, in the parking lot', false, 2, 3);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Target', '2005 Town Center Plaza', 'Sacramento', 'CA', 's you enter the store, restrooms are located on the right. There is a family restroom next to the gendered restrooms.', false, 2, 3);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Yo Yo Yogurt', '2580 Fair Oaks Blv #10', 'Sacramento', 'CA', 'In the back; visible from front door', false, 5, 5);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Starbucks', '1461 Meadowview Road', 'Sacramento', 'CA', 'You may need to ask for a key', true, 3, 4);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Arco AMPM', 'Airport Road and Crossfield Drive', 'Sacramento', 'CA', 'Through the front door on the right wall.', true, 3, 3);

INSERT INTO locations (name, address, city, state, directions, ada, cleanliness, staff_friendliness) VALUES ('Valley Hi North Laguna Library', '7400 Imagination Pkwy', 'Sacramento', 'CA', 'Just passed the gendered restroom is an accessible unisex restroom', true, 4, 5);
