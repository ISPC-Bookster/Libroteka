FROM python:3.8

WORKDIR /app

COPY Backend/ .

RUN . backendLibroteka-env/bin/activate

RUN pip install --upgrade pip

# WORKDIR /app/Libroteka/Backend/Libroteka

RUN pip install -r /app/Libroteka/requirements.txt

EXPOSE 8000

CMD ["python", "/app/Libroteka/manage.py", "runserver", "0.0.0.0:8000"]