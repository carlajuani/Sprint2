USE cul_dampolla;

-- QUERY 1 total de factures d'un client/a en un període determinat
SELECT *
FROM sales s
WHERE clients_client_id = 8 AND sale_date BETWEEN '2021-01-01' AND '2022-12-30';

-- QUERY 2 models d'ulleres que ha venut un empleat/da durant un any
SELECT 
	e.employee_id, 
    CONCAT(e.employee_first_name,' ',e.employees_last_name) AS 'employee_name', 
    s.glasses_model_id,
    CONCAT(g.frame_color,' ',g.frame_type,' model, ',g.lens_graduation,'D') AS 'model_description',
    s.sale_date
FROM sales s
JOIN employees e
	ON s.employees_employee_id = e.employee_id
JOIN glasses g
	ON s.glasses_model_id = g.model_id
WHERE e.employee_id = 2 AND s.sale_date BETWEEN '2022-09-01' AND '2022-12-31';

-- QUERY 3 proveïdors que han subministrat ulleres venudes amb èxit per l'òptica
SELECT 
	su.supplier_id, 
    su.first_name, 
    ghs.glasses_model_id, 
    ghs.sales_sale_id
FROM glasses_has_sales ghs
JOIN glasses g
	ON ghs.glasses_model_id = g.model_id
JOIN suppliers su
	ON g.suppliers_supplier_id = su.supplier_id
ORDER BY su.supplier_id