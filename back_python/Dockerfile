FROM python:3.9

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

COPY ./certs/key.pem .
COPY ./certs/cert.pem .

EXPOSE 5000

CMD [ "python", "app.py" ]