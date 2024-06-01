# Tecnicatura Superior en Desarrollo web y Aplicaciones Digitales
## Programación Web 1


- Equipo: Bookster
- Proyecto: Libroteka
- Cohorte: 2023


Dependencies: 
- Node: "^18"
- Angular: "^17"
- Python: "^3.8"
- Django: "^4.2"

Puntos claves:
- Formulario IEEE830: https://github.com/ISPC-Bookster/Libroteka/wiki/Formulario-IEEE830
- Scrum - Registro de ceremonias: https://github.com/ISPC-Bookster/Libroteka/wiki/Scrum:-Registro-de-ceremonias
- Historias de Usuario: https://github.com/ISPC-Bookster/Libroteka/wiki/Historias-de-Usuario
- Milestones: https://github.com/ISPC-Bookster/Libroteka/milestones

Credenciales django:
user: superadmin
password: libroteka

Librerías: 
django djangorestframework django-cors-headers Pillow jsonfield mysqlclient

## Run Locally
<table>
<tr>
<th> Frontend </th>
<th> Backend </th>
</tr>
<tr>

<td>

Clone the project

```bash
  git clone https://github.com/LibrotekaISPC2023/Libroteka
``` 

Go to the project directory

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


</td>
<td>

Clone the project

```bash
  git clone https://github.com/LibrotekaISPC2023/Libroteka
``` 

Go to the project directory

```bash
  cd Backend/Libroteka
```

Activate Virtual environment & install Libraries

```bash
  source backendLibroteka-env/bin/activate
```
```bash
  cd Libroteka/Backend/Libroteka
  pip install -r requirements.txt
```

Start the server

```bash
  python manage.py runserver
```

</td>
</tr>
</table>
