FROM python:3.8

WORKDIR /app

COPY Backend/ .

RUN . backendLibroteka-env/bin/activate

WORKDIR /app/Libroteka/Backend

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]