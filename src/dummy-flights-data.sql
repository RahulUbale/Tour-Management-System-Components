USE flights;
CREATE TABLE flights (
  id INT PRIMARY KEY,
  airline VARCHAR(255) NOT NULL,
  flight_number INT NOT NULL,
  departure_date DATE NOT NULL,
  arrival_date DATE NOT NULL,
  departure_airport VARCHAR(255) NOT NULL,
  arrival_airport VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);

INSERT INTO flights (id, airline, flight_number, departure_date, arrival_date, departure_airport, arrival_airport, price) VALUES
(1, 'Delta', 123, '2022-05-15', '2022-05-16', 'JFK', 'LAX', 500.00),
(2, 'United', 456, '2022-06-20', '2022-06-21', 'LAX', 'JFK', 600.00),
(3, 'American', 789, '2022-07-05', '2022-07-06', 'ORD', 'SFO', 700.00);
