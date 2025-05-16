""" ================= """
""" fap_usuario_login """
""" ================= """

import json
import pyodbc 

def lambda_handler(event,context):
    conn = pyodbc.connect("Driver={ODBC Driver 18 for SQL Server};"
                      "Server=upc-dbweb.cyphf9v7gxq3.us-east-1.rds.amazonaws.com;"
                      "Database=DBFAP;"
                      "UID=admin;"
                      "PWD=$Jacc.78;")
    
    cursor = conn.cursor()
    try:
        tipo_documento = event.get('tipo_documento')
        numero_documento = event.get('numero_documento')
        clave_hash = event.get('clave_hash')
        params = (tipo_documento, numero_documento, clave_hash)
        
        cursor.execute('exec usp_usuario_login @tipo_documento=?, @numero_documento=?, @clave_hash=?', params)
        
        data = []

        for row in cursor:
            data.append({"id_usuario":row[0],"id_paciente":row[1],"nombre":row[2], "apellido":row[3] })

        return {
            'data': data
        }
    except:
        return {
            'error': 'Error al obtener los datos'
        }

    finally:
        cursor.close()
        conn.close()
 
 """ TEST """
 {
  "tipo_documento": "DNI",
  "numero_documento": "45678901",
  "clave_hash": "hash123ana"
}
