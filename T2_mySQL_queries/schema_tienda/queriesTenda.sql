USE  tienda;
  
-- 1 nom de tots els productes que hi ha en la taula producto.
SELECT nombre FROM producto p;

-- 2 noms i els preus de tots els productes de la taula producto.
SELECT nombre AS 'producto', precio AS 'precio(€)' FROM producto p;

-- 3 totes les columnes de la taula producto
SELECT * FROM producto p;

-- 4 nom dels productes, el preu en euros i el preu en dòlars estatunidencs (USD)
SELECT nombre AS 'producto', precio AS 'precio(€)', ROUND(precio*1.08,2) AS 'precio(USD)' FROM producto p;

-- 5 nom dels productes, el preu en euros i el preu en dòlars estatunidencs (USD)
-- Utilitza els següents àlies per a les columnes: nom de producto, euros, dòlars.
SELECT nombre AS 'nombre de producto', precio AS 'euros', ROUND(precio*1.08,2) AS 'dólares' FROM producto p;

-- 6 noms i els preus de tots els productes de la taula producto, convertint els noms a majúscula.
SELECT UPPER(nombre) AS 'producto', precio AS 'precio(€)' FROM producto p;

-- 7 noms i els preus de tots els productes de la taula producto, convertint els noms a minúscula.
SELECT LOWER(nombre) AS 'producto', precio AS 'precio(€)' FROM producto p;

-- 8 nom de tots els fabricants en una columna, i en una altra columna obtingui en majúscules els dos primers caràcters del nom del fabricant.
SELECT nombre, UPPER(left(nombre,2)) AS 'inicio' FROM fabricante f;

-- 9 noms i els preus de tots els productes de la taula producto, arrodonint el valor del preu.
SELECT codigo, nombre, ROUND(precio) AS precio, codigo_fabricante FROM producto p;

-- 10 noms i els preus de tots els productes de la taula producto, truncant el valor del preu per a mostrar-lo sense cap xifra decimal.
SELECT codigo, nombre, TRUNCATE(precio, 0) AS precio, codigo_fabricante FROM producto p;

-- 11 codi dels fabricants que tenen productes en la taula producto.
SELECT p.codigo_fabricante FROM producto p;

-- 12 codi dels fabricants que tenen productes en la taula producto, eliminant els codis que apareixen repetits.
SELECT p.codigo_fabricante AS 'codigo fabricantes con producto' FROM producto p GROUP BY p.codigo_fabricante;

-- 13 noms dels fabricants ordenats de manera ascendent.
SELECT nombre FROM fabricante ORDER BY nombre;

-- 14 noms dels fabricants ordenats de manera descendent.
SELECT nombre FROM fabricante ORDER BY nombre DESC;

-- 15 noms dels productes ordenats, en primer lloc, pel nom de manera ascendent i, en segon lloc, pel preu de manera descendent.
SELECT nombre FROM producto ORDER BY nombre, precio DESC;

-- 16 les 5 primeres files de la taula fabricante.
SELECT * FROM fabricante LIMIT 5;

-- 17 2 files a partir de la quarta fila de la taula fabricante. La quarta fila també s'ha d'incloure en la resposta.
SELECT * FROM fabricante WHERE codigo > 3 LIMIT 3;

-- 18 nom i el preu del producte més barat. (Utilitza solament les clàusules ORDER BY i LIMIT). NOTA: Aquí no podria usar MIN(preu), necessitaria GROUP BY.
SELECT nombre AS 'producto mas barato', precio FROM producto ORDER BY precio LIMIT 1;

-- 19 nom i el preu del producte més car. (Utilitza solament les clàusules ORDER BY i LIMIT). NOTA: Aquí no podria usar MAX(preu), necessitaria GROUP BY.
SELECT nombre AS 'producto mas caro', precio FROM producto ORDER BY precio DESC LIMIT 1;

-- 20 nom de tots els productes del fabricant el codi de fabricant del qual és igual a 2.
SELECT nombre FROM producto WHERE codigo_fabricante = 2;

-- 21 nom del producte, preu i nom de fabricant de tots els productes de la base de dades.
SELECT p.nombre AS 'producto', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo;
    
-- 22 nom del producte, preu i nom de fabricant de tots els productes de la base de dades. Ordena el resultat pel nom del fabricant, per ordre alfabètic.
SELECT p.nombre AS 'producto', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo ORDER BY f.nombre;

-- 23 codi del producte, nom del producte, codi del fabricador i nom del fabricador, de tots els productes de la base de dades.
SELECT p.codigo, p.nombre AS 'producto', p.codigo_fabricante, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo;
    
-- 24 nom del producte, el seu preu i el nom del seu fabricant, del producte més barat.
SELECT p.nombre AS 'producto mas barato', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo ORDER BY precio LIMIT 1;

-- 25 nom del producte, el seu preu i el nom del seu fabricant, del producte més car.
SELECT p.nombre AS 'producto mas caro', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo ORDER BY precio DESC LIMIT 1;

-- 26 tots els productes del fabricant Lenovo.
SELECT p.codigo AS 'codigo producto', p.nombre AS 'nombre producto', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Lenovo';

-- 27 tots els productes del fabricant Crucial que tinguin un preu major que 200 €.
SELECT p.codigo AS 'codigo producto', p.nombre AS 'nombre producto', p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Crucial' AND p.precio > 200;

-- 28 tots els productes dels fabricants Asus, Hewlett-Packardy Seagate. Sense utilitzar l'operador IN.
SELECT * FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Asus' OR f.nombre = 'Hewlett-Packard' OR f.nombre = 'Seagate';

-- 29 tots els productes dels fabricants Asus, Hewlett-Packardy Seagate. Fent servir l'operador IN.
SELECT * FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre IN ('Asus','Hewlett-Packard','Seagate');

-- 30 nom i el preu de tots els productes dels fabricants el nom dels quals acabi per la vocal e.
SELECT p.nombre AS 'producto', p.precio FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre LIKE '%e';

-- 31 nom i el preu de tots els productes el nom de fabricant dels quals contingui el caràcter w en el seu nom.
SELECT p.nombre, p.precio FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre LIKE '%w%';

-- 32 nom de producte, preu i nom de fabricant, de tots els productes que tinguin un preu major o igual a 180 €. 
-- Ordena el resultat, en primer lloc, pel preu (en ordre descendent) i, en segon lloc, pel nom (en ordre ascendent).
SELECT p.nombre, p.precio, f.nombre AS 'fabricante' FROM producto p JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE p.precio >= 180 ORDER BY p.precio DESC, p.nombre;

-- 33 codi i el nom de fabricant, solament d'aquells fabricants que tenen productes associats en la base de dades.
SELECT p.codigo_fabricante, f.nombre AS 'fabricante' FROM fabricante f JOIN producto p ON f.codigo = p.codigo_fabricante GROUP BY p.codigo_fabricante;

-- 34 tots els fabricants que existeixen en la base de dades, juntament amb els productes que té cadascun d'ells. 
-- El llistat haurà de mostrar també aquells fabricants que no tenen productes associats.
SELECT * FROM fabricante f LEFT JOIN producto p ON f.codigo = p.codigo_fabricante;

-- 35 només apareguin aquells fabricants que no tenen cap producte associat.
SELECT * FROM fabricante f LEFT JOIN producto p ON f.codigo = p.codigo_fabricante WHERE p.nombre IS NULL;

-- 36 productes del fabricador Lenovo. (Sense utilitzar INNER JOIN).
SELECT * FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.codigo = p.codigo_fabricante AND f.nombre = 'Lenovo';
	
-- 37 les dades dels productes que tenen el mateix preu que el producte més car del fabricant Lenovo. (Sense usar INNER JOIN).
SELECT * FROM producto p WHERE p.precio LIKE (SELECT MAX(p.precio) FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Lenovo');

-- 38 nom del producte més car del fabricant Lenovo.
SELECT p.nombre FROM producto p WHERE p.precio = (SELECT MAX(p.precio) FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Lenovo');

-- 39 nom del producte més barat del fabricant Hewlett-Packard.
SELECT p.nombre FROM producto p WHERE p.precio = (SELECT MIN(p.precio) FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Hewlett-Packard');

-- 40 productes de la base de dades que tenen un preu major o igual al producte més car del fabricant Lenovo.
SELECT * FROM producto p WHERE p.precio >= (SELECT MAX(p.precio) FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Lenovo');

-- 41 productes del fabricant Asus que tenen un preu superior al preu mitjà de tots els seus productes.
SELECT * FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE (f.nombre = 'Asus') AND p.precio > (SELECT AVG(p.precio) FROM producto p LEFT JOIN fabricante f ON p.codigo_fabricante = f.codigo WHERE f.nombre = 'Asus');
