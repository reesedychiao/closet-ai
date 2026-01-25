FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY app /app/app
COPY celery_app.py /app/celery_app.py
COPY tasks /app/tasks

ENV PYTHONUNBUFFERED=1
