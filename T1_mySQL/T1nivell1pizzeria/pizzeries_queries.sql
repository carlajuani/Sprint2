USE pizzeries;

-- Query1 productes de categoria 'Begudes' s'han venut en una determinada localitat
SELECT 
	d.drink_id, 
    d.name AS 'product_name', 
    o.order_id, 
    o.order_datetime, 
    l.locality_id, 
    l.locality_name
FROM orders o
JOIN orders_has_products ohp
	ON o.order_id = ohp.orders_order_id
JOIN products p
	ON ohp.products_product_id = p.product_id
JOIN drinks d
	ON p.drinks_drink_id = d.drink_id
JOIN stores s
	ON o.stores_store_id = s.store_id
JOIN locality l
	ON s.locality_locality_id = l.locality_id
WHERE p.drinks_drink_id IS NOT NULL AND l.locality_id = 1;

-- Query2 comandes que ha efectuat un determinat empleat/da
SELECT 
	e.employee_id,
    CONCAT(e.first_name,' ',e.lasts_names) AS 'employee_name',
    e.NIF,
    o.order_id,
    CONCAT(o.order_type,' ',o.order_datetime) AS 'order_datetime',
    o.clients_client_id AS 'client_id'
FROM orders o
JOIN employees e
	ON o.employees_employee_id = e.employee_id
WHERE e.employee_id = 7