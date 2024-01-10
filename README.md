# CS50web Capstone Project

1. [Pomodoro Timer](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#pomodoro-timer)
2. [Distinctiveness and Complexity](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#distinctiveness-and-complexity)
3. [Delving into the Coding Process](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#delving-into-the-coding-process)
   - [Laying the Foundations](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#laying-the-foundations)
   - [Infusing Front-End Vitality](Infusing%20Front-End%20Vitality)
     - [Timer Function](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#timer-function)
     - [Update Display](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#update-display)
     - [Additional Functions](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#additional-functions)
     - [Audio Integration](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#audio-integration)
   - [Functionality of the Backend](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#functionality-of-the-backend)
     - [Timer](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#timer)
     - [Overall Intervals](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#overall-intervals)
4. [File Structure](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#file-structure)
5. [Models](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#models)
6. [Views](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#views)
7. [Templates](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#templates)
8. [JavaScript](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#javascript)
9. [Running the application](https://github.com/vaupunkt/CS50web-Pomodoro?tab=readme-ov-file#running-the-application)

## Pomodoro Timer

This is a simple Pomodoro Timer web application built with Django. It uses Python for the backend, HTML for the frontend, and JavaScript for interactivity.

A Pomodoro Timer is a time management tool based on the Pomodoro Technique, which was developed by Francesco Cirillo. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks Each interval is known as a “pomodoro”, from the Italian word for ‘tomato’, after the tomato-shaped kitchen timer that Cirillo used as a university student.

Here’s how to use the Pomodoro Timer:

1.  Make a to-do list and get a timer.
2.  Set the timer for 20 or 25 minutes and focus on one task until the alarm goes off.
3.  Upon completion of the session, check off a pomodoro and record what you completed.
4.  Take a 5-minute break to refresh your concentration.
5.  After 4 pomodoros, take a long 15-minute break.

The aim of this technique is to help you focus on any task you are working on, such as studying, writing, or coding. It’s a popular method used by many people to increase productivity and manage time effectively.

## Distinctiveness and Complexity

This project is distinctive and complex for several reasons:

1. **Interactivity**: The application uses JavaScript to provide a real-time, interactive timer. This requires careful management of state and time.

2. **Database Integration**: The application uses Django's ORM to interact with the database. It creates and retrieves records in response to user actions.

3. **AJAX**: The application uses AJAX to update the number of intervals completed without requiring a page refresh.

In the realm of web development, it’s essential to create applications that not only solve problems but also engage and provide value to the user. My decision to develop a Pomodoro Timer using Django was driven by this philosophy. The Pomodoro Technique is a renowned time management method used by millions around the world, and by digitizing this technique, I aimed to make it more accessible and customizable for users everywhere.

What sets this project apart is its unique blend of simplicity and functionality. While there are numerous Pomodoro timers available, this application is designed with a keen focus on user experience, offering a clean, intuitive interface that doesn’t compromise on features. Users can customize their work and break intervals and track their productivity over time.

Moreover, the application is built with Django and JavaScript, demonstrating a robust backend structure and dynamic frontend interactions. It’s also mobile-responsive, ensuring that users can manage their time effectively, whether they’re at their desk or on the go.

In essence, this project embodies the principles of effective web development - solving a real-world problem in a user-friendly manner while demonstrating technical competence and creativity. It’s not just about building another web application; it’s about creating a tool that can genuinely enhance productivity and make a difference in people’s lives. And that’s what makes this project truly distinctive and complex.

## Delving into the Coding Process

### Laying the Foundations

My journey began with establishing the Django project framework, incorporating the `pomodorotimer` app into the `apps` section. Next, I crafted the initial template, `layout.html`, where the website's head section is defined. This template serves as the anchor point for importing both the `script.js` and `styles.css` files. The `index.html` template seamlessly extends `layout.html`.

To ensure that my project transitioned into a single-page application, I implemented waypoints. These waypoints facilitated the rendering of `index.html`. The associated URL route, `urls.py`, specified the view handling this page:
`path("", views.index, name="index"),`

The corresponding view handler, `views.py`, rendered the `index.html` template, enabling me to visualize and test its functionality.

### Infusing Front-End Vitality

I embarked on creating the basic structure of the page, featuring a form where users could input work duration, break duration, and the desired number of pomodoro intervals. Submitting the form would trigger the timer. To implement this functionality, I crafted a `script.js` file, placing it within the `static` folder and referencing it in `layout.html`.

The `script.js` initialized several variables populated by the form data:

```
const `workDuration` = formData.`workDuration`;
const `breakDuration` = formData.`breakDuration`;
const intervals = formData.intervals;
let `isWorkTime` = true;
let `currentInterval` = 1;
```

The `index.html` was divided into two primary sections: the aforementioned `timerForm` and the `timerRunning` section. Submitting the form resulted in the form disappearing (`display: "none"`), while the `timerRunning` section emerged (`display: "inline"`). Simultaneously, the `startTimer` function was triggered, commencing the countdown based on the specified time values from the form.

#### Timer Function

The timer gracefully transitions from one interval to another, seamlessly managing work and break periods. It employs a `setInterval` function to consistently decrement the `timeLeft` variable every 1000 milliseconds. As the countdown progresses, the `updateDisplay` function updates the timer's display with the current time remaining.

When `timeLeft` reaches zero, indicating the end of the current interval, the timer takes action. If the `isWorkTime` flag is true, indicating a work interval, the timer checks if the current interval count `currentInterval` is less than the total number of intervals intervals. If so, it increments `currentInterval`, signaling the start of a break interval. Otherwise, if `currentInterval` reaches `intervals`, signifying the completion of all intervals, an alert message congratulates the user.

To initiate a new interval, the timer calls the `startTimer` function, passing the appropriate duration, either `workDuration` for work intervals or `breakDuration` for break intervals. It then toggles the `isWorkTime` flag to false for the next interval.

#### Update Display

The `updateDisplay` function serves as a clear and concise mechanism to update the timer's display with the remaining duration. It extracts the minutes and seconds from the `timeLeft` variable and constructs a proper time format, ensuring both minutes and seconds are displayed, with leading zeros for single-digit seconds.

```
function  updateDisplay(timeLeft) {
	let  minutes  =  Math.floor(timeLeft  /  60);
	let  seconds  =  timeLeft  %  60;
	document.querySelector("#currentDuration").innerHTML  =
	`${minutes}:${seconds  <  10  ?  "0"  :  ""}${seconds}`;
}
```

#### Additional Functions

The `timerRunning` section enhances user control by incorporating four buttons:

- Start/Pause: This button halts or resumes the timer's countdown. If the timer is paused and resumes, the last second may not be counted in full, ensuring accurate timekeeping.

- Skip: This button allows users to skip the current interval and move directly to the corresponding work or break interval, depending on whether the current interval was a work or break period.

- Reset: This button immediately stops the timer, resets all variables to their initial values, and hides the `timerRunning` section, revealing the `timerForm` once again.

- Mute Audio: This button toggles the audio mute state, enabling or disabling the soothing Tibetan Singing Bowl sound that plays at the end of each interval.

#### Audio Integration

To provide an auditory signal marking the end of each interval, a soothing Tibetan Singing Bowl sound is integrated. The sound file, `timerSound.mp3`, is sourced from Alexander on OrangeFreeSounds and is licensed under the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. The sound is loaded in the `script.js` file and incorporated into the timer function as follows:

```
timer = setInterval(function () {
  timeLeft--;
  updateDisplay(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(timer);
    if (audioMuted === false) {
      audio.play();
      setTimeout(fadeOut, fadeDuration);
    }
    // ...
  }
}, 1000);
```

The audio object is created with `new Audio("/static/assets/timerSound.mp3")`, and the `audio.volume` property is set to 0.7 to ensure a pleasant and non-jarring sound level. Upon reaching the end of an interval, the `audio.play()` method triggers the sound playback, and a `fadeOut` function is scheduled to fade out the sound after a brief duration. This ensures a graceful transition between intervals, maintaining a focused and productive workflow.

### Functionality of the Backend

#### Timer

To ensure consistent and customizable timer settings, a Timer model was implemented in `models.py`:

```
class Timer(models.Model):
    work_duration = models.IntegerField(default=25)
    break_duration = models.IntegerField(default=5)
    intervals = models.IntegerField(default=4)
```

The `index.html` template utilizes this model by passing the timer values to the front-end through Django's templating system.

#### Overall Intervals

To track the total number of completed intervals, a Intervals model was added in `models.py`:

```
class Intervals(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)  # Timestamp indicating interval completion
```

The `script.js` invokes the `intervalComplete` URL via an API request upon interval completion:

```
...
if (isWorkTime) {
  if (currentInterval < intervals) {
    fetch('/intervalComplete')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('#overallIntervalsDoneCount').innerHTML = data.count;
      });
    currentInterval++;
    startTimer(breakDuration);
  ...
```

A corresponding endpoint, `intervalComplete`, was added to `urls.py`:
`path('intervalComplete', views.intervalComplete, name='intervalComplete')`

The `intervalComplete` view in `views.py` handles interval completion by creating a new Intervals object and incrementing the overall interval count:

```
def intervalComplete(request):
    new_interval = Intervals.objects.create(timestamp=timezone.now())
    intervalCount = Intervals.objects.count()
    return JsonResponse({'count': intervalCount})
```

This ensures that the total number of completed intervals is accurately tracked and displayed in the `index.html` template.

## File Structure

- `models.py`: Contains the `Timer` and `Intervals` models. The `Timer` model represents a timer with work duration, break duration, and intervals. The `Intervals` model represents a completed interval with a timestamp.

- `views.py`: Contains the `index` and `intervalComplete` views. The `index` view renders the timer form and the `intervalComplete` view is called when an interval is completed.

- `layout.html`: Serves as the base template for the overall application structure and layouts.

- `index.html`: Contains the HTML for the timer form and the timer display. It uses Django's templating system to insert the default values for the timer and the total number of intervals completed.

- `script.js`: Contains the JavaScript for the timer. It updates the timer display, handles the timer form submission, and makes AJAX requests to the `intervalComplete` view when an interval is completed.

- `styles.css`: This is the stylesheet for the Pomodoro Timer application. It contains CSS rules that make the application visually appealing and user-friendly. The file includes styles for both light and dark modes, providing a comfortable viewing experience for users regardless of their lighting preferences. The styles are also responsive, ensuring that the application looks good and functions well on both mobile and desktop devices.

- `timerSound.mp3`: This is a sound file used in the Pomodoro Timer application. The sound, provided by Alexander from OrangeFreeSounds, plays at the end of each interval to alert the user. The sound is a soothing Tibetan Singing Bowl sound, which is pleasant and not jarring to the user. This sound file is used under the CC BY-NC 4.0 license.

- `urls.py`: This file defines the URL patterns for the Pomodoro Timer application. It includes two paths: the root path ("") and the "intervalComplete" path. The root path is associated with the `index` view, which renders the timer form. The "intervalComplete" path is associated with the `intervalComplete` view, which is called when an interval is completed.

## Models

The application has two models:

1. `Timer`: This model has three fields - `work_duration`, `break_duration`, and `intervals`. These represent the duration of work, the duration of the break, and the number of intervals respectively.

2. `Intervals`: This model has a single field - `timestamp`. This represents the time at which an interval was completed.

## Views

The application has two views:

1. `index`: This view renders the timer form with the default values for work duration, break duration, and intervals. It also displays the total number of intervals completed.

2. `intervalComplete`: This view is called when an interval is completed. It creates a new `Intervals` object and returns the total number of intervals completed.

## Templates

The application uses Django's templating system. The main template is `layout.html`, and the `index.html` template extends this layout. The `index.html` template contains the form for the timer, the display for the timer when it's running, and the display for the total number of intervals completed.

## JavaScript

The application uses JavaScript to update the timer display, handle the timer form submission, and make AJAX requests to the `intervalComplete` view when an interval is completed.

## Running the Application

To run the application, you'll need to have Django installed. You can then run the application using Django's built-in server:

```bash
python manage.py runserver
```
