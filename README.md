# CS50web Capstone Project

# Pomodoro Timer

This is a simple Pomodoro Timer web application built with Django. It uses Python for the backend, HTML for the frontend, and JavaScript for interactivity.

## Distinctiveness and Complexity

This project is distinctive and complex for several reasons:

1. **Interactivity**: The application uses JavaScript to provide a real-time, interactive timer. This requires careful management of state and time.

2. **Database Integration**: The application uses Django's ORM to interact with the database. It creates and retrieves records in response to user actions.

3. **AJAX**: The application uses AJAX to update the number of intervals completed without requiring a page refresh.

## File Structure

- `models.py`: Contains the `Timer` and `Intervals` models. The `Timer` model represents a timer with work duration, break duration, and intervals. The `Intervals` model represents a completed interval with a timestamp.

- `views.py`: Contains the `index` and `intervalComplete` views. The `index` view renders the timer form and the `intervalComplete` view is called when an interval is completed.

- `index.html`: Contains the HTML for the timer form and the timer display. It uses Django's templating system to insert the default values for the timer and the total number of intervals completed.

- `script.js`: Contains the JavaScript for the timer. It updates the timer display, handles the timer form submission, and makes AJAX requests to the `intervalComplete` view when an interval is completed.

- `styles.css`: This is the stylesheet for the Pomodoro Timer application. It contains CSS rules that make the application visually appealing and user-friendly. The file includes styles for both light and dark modes, providing a comfortable viewing experience for users regardless of their lighting preferences. The styles are also responsive, ensuring that the application looks good and functions well on both mobile and desktop devices.

- `timerSound.mp3`: This is a sound file used in the Pomodoro Timer application. The sound, provided by Alexander from OrangeFreeSounds, plays at the end of each interval to alert the user. The sound is a soothing Tibetan Singing Bowl sound, which is pleasant and not jarring to the user. This sound file is used under the CC BY-NC 4.0 license. More details can be found here.

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
