import os

DATABASES = {
'sqlite': {
'ENGINE': 'django.db.backends.sqlite3',
'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
},
'default': {
'ENGINE': 'django.db.backends.mysql',
'NAME': 'abm_ispc',
'USER': 'root',
'PASSWORD': 'contraseña',
'HOST': 'localhost',
'PORT': '3306',
'OPTIONS': {
'sql_mode': 'traditional',
}
}
}
