from django.db import models

# Create your models here.
class Timer(models.Model):
    work_duration = models.IntegerField(default=25)
    break_duration = models.IntegerField(default=5)
    intervals = models.IntegerField(default=4)
    
class Intervals(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)