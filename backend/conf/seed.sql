-- Create a sample table
CREATE TABLE IF NOT EXISTS product (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  price NUMERIC(12,2) NOT NULL
);

-- Insert initial data
INSERT INTO product (Name, quantity, price) VALUES ('Apple', 100, 0.50);
INSERT INTO product (name, quantity, price) VALUES ('Banana', 150, 0.30);
INSERT INTO product (name, quantity, price) VALUES ('Orange', 80, 0.60);
INSERT INTO product (name, quantity, price) VALUES ('Grapes', 200, 1.20);
INSERT INTO product (name, quantity, price) VALUES ('Watermelon', 30, 3.50);
INSERT INTO product (name, quantity, price) VALUES ('Pineapple', 50, 2.50);
INSERT INTO product (name, quantity, price) VALUES ('Strawberry', 75, 2.00);
INSERT INTO product (name, quantity, price) VALUES ('Blueberry', 60, 2.20);
INSERT INTO product (name, quantity, price) VALUES ('Mango', 40, 1.80);
INSERT INTO product (name, quantity, price) VALUES ('Kiwi', 90, 1.00);
INSERT INTO product (name, quantity, price) VALUES ('Pear', 110, 0.80);
INSERT INTO product (name, quantity, price) VALUES ('Peach', 70, 1.50);
INSERT INTO product (name, quantity, price) VALUES ('Plum', 50, 1.30);
INSERT INTO product (name, quantity, price) VALUES ('Cherry', 120, 2.70);
INSERT INTO product (name, quantity, price) VALUES ('Grapefruit', 55, 1.90);
