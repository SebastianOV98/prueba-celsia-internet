prueba_servicio_clienteprueba_servicio_clienteprueba_servicio_clienteCREATE TABLE clientes (
  identificacion VARCHAR(20) NOT NULL PRIMARY KEY,
  nombres VARCHAR(80) NOT NULL,
  apellidos VARCHAR(80) NOT NULL,
  tipoIdentificacion VARCHAR(2) NOT NULL CHECK (tipoIdentificacion IN ('CC', 'TI', 'CE', 'RC')),
  fechaNacimiento DATE NOT NULL,
  numeroCelular VARCHAR(20) NOT NULL,
  correoElectronico VARCHAR(80) NOT NULL
);

CREATE TABLE servicios (
  identificacion VARCHAR(20) NOT NULL,
  servicio VARCHAR(80) NOT NULL CHECK (servicio IN ('Internet 200 MB', 'Internet 400 MB', 'Internet 600 MB', 'Directv Go', 'Paramount+', 'Win+')),
  fechaInicio DATE NOT NULL,
  ultimaFacturacion DATE NOT NULL,
  ultimoPago INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (identificacion, servicio),
  CONSTRAINT servicios_FK1 FOREIGN KEY (identificacion) REFERENCES clientes(identificacion) ON UPDATE CASCADE ON DELETE NO ACTION
);
