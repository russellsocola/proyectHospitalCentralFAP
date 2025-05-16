use DBFAP
go

/*
    verificados en producción - 16/05/2025 02:32
*/
create procedure usp_usuario_login
(
    @tipo_documento varchar(10),
    @numero_documento varchar(20),
    @clave_hash varchar(200)
)
as
    SELECT u.id_usuario, p.id_paciente, p.nombre, p.apellido
	FROM usuario u
	INNER JOIN paciente p on u.activo = 1 and p.id_paciente = u.id_paciente
		and p.tipo_documento = @tipo_documento and p.numero_documento = @numero_documento and u.clave_hash = @clave_hash
GO
/*
exec usp_usuario_login 'DNI', '45678901', 'hash123ana';

SELECT *
FROM usuario u
INNER JOIN paciente p on u.activo = 1 and p.id_paciente = u.id_paciente
    and p.tipo_documento = 'DNI' and p.numero_documento = '45678901' and u.clave_hash = 'hash123ana'
*/



/*
    Faltan verificar
*/

create procedure usp_ListarMedicos
as
	SELECT 	P.id_medico,
			P.id_especialidad,
			P.nombre,
			P.apellido,
			P.telefono_contacto
	FROM medico p
go

create procedure usp_ListarMedicos_x_Especilidad
(
    @id_especialidad int
)
as
	SELECT 	P.id_medico,
			P.id_especialidad,
			P.nombre,
			P.apellido,
			P.telefono_contacto
	FROM medico p
    WHERE P.id_especialidad = @id_especialidad
go

create procedure usp_ListarEspecialidad
as
	SELECT 	p.id_especialidad,
			p.nombre,
			p.descripcion
	FROM especialidad_medica p
go

create procedure usp_ListarEspecialidad_x_Medico
(
    @id_medico int
)
as
	SELECT 	p.id_especialidad,
			p.nombre,
			p.descripcion
	FROM especialidad_medica p
        INNER JOIN medico m on m.id_medico = @id_medico
            and m.id_especialidad = p.id_especialidad
go

create procedure usp_ListarFechaDisponible_Medico_Especialidad
(
    @id_medico int
)
as
    SELECT DISTINCT p.fecha
    FROM medico_disponibilidad p
    WHERE p.id_medico = @id_medico
go

create procedure usp_ListarHoraDisponible_Fecha_Medido_Especialidad
(
    @id_medico int,
    @fecha date
)
as
    SELECT p.hora 
    FROM medico_disponibilidad p
    WHERE p.id_medico = @id_medico and p.fecha = @fecha
go

create procedure usp_cancelarCita
(
    @id_cita int,
    @estado varchar(20) /* CANCELADO, REPROGRAMADO */
)
as
    UPDATE cita_medica
    SET estado = @estado
    WHERE id_cita = @id_cita
go

create procedure usp_insertar_cita
(
    @id_cita int OUTPUT,
    @id_paciente int,
    @id_medico int,
    @fecha date,
    @hora varchar(10),
    @estado varchar(20),
    @motivo_consulta varchar(200)    
)
as
    INSERT INTO cita_medica(id_paciente,id_medico,fecha,hora,estado,motivo_consulta)
    VALUES(@id_paciente,@id_medico,@fecha,@hora,@estado,@motivo_consulta)

    SET @id_cita = SCOPE_IDENTITY()
go

/* Previamente se tiene que llamar a cancelarCita y NuevaCita */
create procedure usp_insertar_ReprogramarCita
(
    @id_reprogramacion  int OUTPUT,
    @id_cita_original  int,
    @id_cita_nueva  int,
    @fecha_solicitud  datetime,
    @motivo_reprogramacion varchar(200) 
)
as
    INSERT INTO reprogramacion(id_cita_original,id_cita_nueva,fecha_solicitud,motivo_reprogramacion)
    VALUES(@id_cita_original,@id_cita_nueva,@fecha_solicitud,@motivo_reprogramacion)

    SET @id_reprogramacion = SCOPE_IDENTITY()
go
