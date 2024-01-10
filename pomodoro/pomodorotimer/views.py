from django.shortcuts import render
from django.utils import timezone
from django.http import JsonResponse

from .models import Timer, Intervals

# Create your views here.
def index(request):
        timer = Timer.objects.create(work_duration=25, break_duration=5, intervals=4)
        overall_intervals_done = Intervals.objects.count()
        return render(request, "pomodorotimer/index.html", {
            "work_duration": timer.work_duration,
            "break_duration": timer.break_duration,
            "intervals": timer.intervals,
            "overall_intervals_done": overall_intervals_done
        })
        
        
def intervalComplete(request):
    new_interval = Intervals.objects.create(timestamp=timezone.now())
    intervalCount = Intervals.objects.count()
    return JsonResponse({"count": intervalCount})