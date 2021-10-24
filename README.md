# HW01

- [HW01](#hw01)
  - [Project Navigation](#project-navigation)
  - [Locust Results](#locust-results)
    - [Initial Conditions](#initial-conditions)
    - [CPU/RAM Conditions](#cpuram-conditions)
    - [Charts](#charts)
  - [The big brains behind this:](#the-big-brains-behind-this)

## Project Navigation
- [go](https://github.com/WebDev001Group/HW01/tree/main/golang)/[nodejs](https://github.com/WebDev001Group/HW01/tree/main/nodejs)
- [nginx](https://github.com/WebDev001Group/HW01/tree/main/nginx)
- [locust](https://github.com/WebDev001Group/HW01/tree/main/locust)
- [the pretty stuff(frontend)](https://github.com/WebDev001Group/HW01/tree/main/frontend)

## Locust Results
### Initial Conditions
![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/1.PNG?raw=true)

### CPU/RAM Conditions
| No. of nodejs Servers | No. of go Servers | Result with 120 users | Result with 280 users |
| :-: | :-: | :-: | :-: |
| 1 | 1 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/2.PNG?raw=true) |  ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/3.PNG?raw=true) |
| 2 | 2 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/2/2.PNG?raw=true) |  ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/2/3.PNG?raw=true) |
| 2 | 1 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/3/2.PNG?raw=true) |  ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/3/3.PNG?raw=true) |

### Charts
| No. of nodejs Servers | No. of go Servers | Requests Per Second | Response Time (ms) | Number of Users |
| :-: | :-: | :-: | :-: | :-: |
| 1 | 1 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/4.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/5.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/1/6.PNG?raw=true) |
| 2 | 2 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/2/4.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/2/5.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/2/6.PNG?raw=true) |
| 2 | 1 | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/3/5.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/3/6.PNG?raw=true) | ![](https://github.com/WebDev001Group/HW01/blob/main/locust/locust-screenshots/3/7.PNG?raw=true) |


## The big brains behind this:

| Name             | Student ID |
| :--------------: | :--------: |
| Reza Eiji        | 98101193   |
| Yasin Mousavi    | 98110351   |
| Dorrin Sotoudeh  | 98170851   |
