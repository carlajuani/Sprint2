USE universidad;

-- (visualitza diagrama i consulta)
-- 1 Retorna un llistat amb el primer cognom, segon cognom i el nom de tots els/les alumnes. 
-- El llistat haurà d'estar ordenat alfabèticament de menor a major pel primer cognom, segon cognom i nom.
SELECT CONCAT(apellido1,' ',apellido2) AS 'apellidos', nombre FROM persona WHERE tipo = 'alumno' ORDER BY apellido1 DESC, apellido2 DESC, nombre DESC;

-- 2 Esbrina el nom i els dos cognoms dels alumnes que no han donat d'alta el seu número de telèfon en la base de dades.
SELECT CONCAT(apellido1,' ',apellido2) AS 'apellidos', nombre FROM persona WHERE telefono IS NULL AND tipo = 'alumno';

-- 3 Retorna el llistat dels alumnes que van néixer en 1999.
SELECT * FROM persona WHERE tipo = 'alumno' AND fecha_nacimiento LIKE '1999%';

-- 4 Retorna el llistat de professors/es que no han donat d'alta el seu número de telèfon en la base de dades i a més el seu NIF acaba en K.
SELECT * FROM persona WHERE tipo = 'profesor' AND telefono IS NULL AND nif LIKE '%K';

-- 5 Retorna el llistat de les assignatures que s'imparteixen en el primer quadrimestre, en el tercer curs del grau que té l'identificador 7.
SELECT * FROM asignatura WHERE cuatrimestre = '1' AND curso = '3' AND id_grado = '7';

-- 6 Retorna un llistat dels professors/es juntament amb el nom del departament al qual estan vinculats. El llistat ha de retornar quatre columnes, 
-- primer cognom, segon cognom, nom i nom del departament. El resultat estarà ordenat alfabèticament de menor a major pels cognoms i el nom.
SELECT p.apellido1, p.apellido2, p.nombre, d.nombre AS 'departamento' FROM persona p JOIN profesor pr ON p.id = pr.id_profesor JOIN departamento d ON pr.id_departamento = d.id ORDER BY p.apellido1 DESC, p.apellido2 DESC, p.nombre DESC;

-- 7 Retorna un llistat amb el nom de les assignatures, any d'inici i any de fi del curs escolar de l'alumne/a amb NIF 26902806M.
SELECT a.nombre, ce.anyo_inicio, ce.anyo_fin FROM persona p JOIN alumno_se_matricula_asignatura asma ON p.id = asma.id_alumno 
JOIN asignatura a ON asma.id_asignatura = a.id JOIN curso_escolar ce ON asma.id_curso_escolar = ce.id WHERE p.nif = '26902806M';

-- 8 Retorna un llistat amb el nom de tots els departaments que tenen professors/es que imparteixen alguna assignatura en el Grau en Enginyeria Informàtica (Pla 2015).
SELECT d.nombre FROM departamento d JOIN profesor p ON d.id = p.id_departamento JOIN asignatura a USING (id_profesor) WHERE a.id_grado = (SELECT id FROM grado WHERE nombre = 'Grado en Ingeniería Informática (Plan 2015)') GROUP BY d.nombre;

-- 9 Retorna un llistat amb tots els alumnes que s'han matriculat en alguna assignatura durant el curs escolar 2018/2019.
SELECT * FROM persona p JOIN alumno_se_matricula_asignatura asma ON p.id = asma.id_alumno WHERE asma.id_curso_escolar = (SELECT id FROM curso_escolar WHERE anyo_inicio = '2018');

-- (LEFT JOIN I RIGHT JOIN)
-- 1 Retorna un llistat amb els noms de tots els professors/es i els departaments que tenen vinculats. El llistat també ha de mostrar aquells professors/es que no tenen 
-- cap departament associat. El llistat ha de retornar quatre columnes, nom del departament, primer cognom, segon cognom i nom del professor/a. El resultat estarà ordenat 
-- alfabèticament de menor a major pel nom del departament, cognoms i el nom.
SELECT d.nombre AS 'departamento', p.apellido1, p.apellido2, p.nombre FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN departamento d ON pr.id_departamento = d.id WHERE p.tipo = 'profesor' ORDER BY d.nombre DESC, p.apellido1 DESC, p.apellido2 DESC, p.nombre DESC;

-- 2 Retorna un llistat amb els professors/es que no estan associats a un departament.
SELECT p.apellido1, p.apellido2, p.nombre  FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN departamento d ON pr.id_departamento = d.id WHERE p.tipo = 'profesor' AND pr.id_profesor IS NULL;

-- 3 Retorna un llistat amb els departaments que no tenen professors/es associats.
SELECT d.*, pr.id_profesor FROM departamento d LEFT JOIN profesor pr ON d.id = pr.id_departamento WHERE pr.id_profesor IS NULL;

-- 4 Retorna un llistat amb els professors/es que no imparteixen cap assignatura.
SELECT p.* FROM persona p LEFT JOIN asignatura a ON p.id = a.id_profesor WHERE a.id_profesor IS NULL AND p.tipo = 'profesor';

-- 5 Retorna un llistat amb les assignatures que no tenen un professor/a assignat.
SELECT * FROM asignatura WHERE id_profesor IS NULL;

-- 6 Retorna un llistat amb tots els departaments que no han impartit assignatures en cap curs escolar.
SELECT d.* FROM departamento d LEFT JOIN profesor pr ON d.id = pr.id_departamento LEFT JOIN asignatura a USING (id_profesor) WHERE a.id IS NULL GROUP BY d.id;

-- (consultes resum)
-- 1 Retorna el nombre total d'alumnes que hi ha.
SELECT COUNT(tipo) AS 'alumnos' FROM persona WHERE tipo = 'alumno';

-- 2 Calcula quants alumnes van néixer en 1999.
SELECT COUNT(fecha_nacimiento) FROM persona WHERE tipo = 'alumno' AND fecha_nacimiento LIKE '1999%';

-- 3 Calcula quants professors/es hi ha en cada departament. El resultat només ha de mostrar dues columnes,
-- una amb el nom del departament i una altra amb el nombre de professors/es que hi ha en aquest departament. 
-- El resultat només ha d'incloure els departaments que tenen professors/es associats i haurà d'estar ordenat de major a menor pel nombre de professors/es.
SELECT d.nombre AS 'departamento', COUNT(pr.id_profesor) AS 'numero de profesores' FROM profesor pr JOIN departamento d ON pr.id_departamento = d.id GROUP BY pr.id_departamento ORDER BY COUNT(pr.id_profesor) DESC;

-- 4 Retorna un llistat amb tots els departaments i el nombre de professors/es que hi ha en cadascun d'ells. 
-- Tingui en compte que poden existir departaments que no tenen professors/es associats. Aquests departaments també han d'aparèixer en el llistat. 
SELECT d.nombre AS 'departamento', COUNT(pr.id_profesor) AS 'numero de profesores' FROM profesor pr RIGHT JOIN departamento d ON pr.id_departamento = d.id GROUP BY d.nombre;

-- 5 Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun. 
-- Tingues en compte que poden existir graus que no tenen assignatures associades. Aquests graus també han d'aparèixer en el llistat. 
-- El resultat haurà d'estar ordenat de major a menor pel nombre d'assignatures.
SELECT g.*, COUNT(a.id) AS 'asignaturas' FROM grado g LEFT JOIN asignatura a ON g.id = a.id_grado GROUP BY g.id ORDER BY COUNT(a.id) DESC;

-- 6 Retorna un llistat amb el nom de tots els graus existents en la base de dades i el nombre d'assignatures que té cadascun, 
-- dels graus que tinguin més de 40 assignatures associades.
SELECT g.*, COUNT(a.id) AS 'asignaturas' FROM grado g JOIN asignatura a ON g.id = a.id_grado GROUP BY g.id HAVING COUNT(a.id) > '40';

-- 7 Retorna un llistat que mostri el nom dels graus i la suma del nombre total de crèdits que hi ha per a cada tipus d'assignatura. El resultat ha de tenir
-- tres columnes: nom del grau, tipus d'assignatura i la suma dels crèdits de totes les assignatures que hi ha d'aquest tipus.
SELECT g.nombre, a.tipo, SUM(a.creditos) AS 'total créditos' FROM grado g RIGHT JOIN asignatura a ON g.id = a.id_grado GROUP BY g.nombre, a.tipo;

-- 8 Retorna un llistat que mostri quants alumnes s'han matriculat d'alguna assignatura en cadascun dels cursos escolars. El resultat haurà de mostrar 
-- dues columnes, una columna amb l'any d'inici del curs escolar i una altra amb el nombre d'alumnes matriculats.
SELECT ce.anyo_inicio, COUNT(asma.id_alumno) AS 'alumnos totales' FROM alumno_se_matricula_asignatura asma RIGHT JOIN curso_escolar ce ON asma.id_curso_escolar = ce.id GROUP BY ce.id;

-- 9 Retorna un llistat amb el nombre d'assignatures que imparteix cada professor/a. El llistat ha de tenir en compte aquells professors/es que no imparteixen 
-- cap assignatura. El resultat mostrarà cinc columnes: id, nom, primer cognom, segon cognom i nombre d'assignatures. El resultat estarà ordenat de major a menor pel nombre d'assignatures.
SELECT p.id, p.nombre, p.apellido1, p.apellido2, COUNT(a.id_profesor) AS 'numero de asignaturas' FROM asignatura a RIGHT JOIN persona p ON a.id_profesor = p.id WHERE p.tipo = 'profesor' GROUP BY p.id ORDER BY COUNT(a.id_profesor) DESC;

-- 10 Retorna totes les dades de l'alumne/a més jove.
SELECT * FROM persona WHERE tipo = 'alumno' AND fecha_nacimiento = (SELECT MAX(fecha_nacimiento) FROM persona WHERE tipo = 'alumno');

--  11 Retorna un llistat amb els professors/es que tenen un departament associat i que no imparteixen cap assignatura.
SELECT p.*, pr.id_departamento, a.nombre AS 'asignatura' FROM profesor pr LEFT JOIN departamento d ON pr.id_departamento = d.id LEFT JOIN asignatura a USING (id_profesor) JOIN persona p ON pr.id_profesor = p.id WHERE p.tipo = 'profesor' AND a.id IS NULL;