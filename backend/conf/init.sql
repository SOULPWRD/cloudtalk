-- Create a sample table
CREATE TABLE IF NOT EXISTS product (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  price NUMERIC(12,2) NOT NULL
);
