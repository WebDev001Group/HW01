- [Project Navigation](#project-navigation)
- [Installation guide](#installation-guide)
- [Locust Results](#locust-results)
  - [Initial Conditions](#initial-conditions)
  - [CPU/RAM Conditions](#cpuram-conditions)
  - [Charts](#charts)
- [The big brains behind this](#the-big-brains-behind-this)

# Project Navigation
- [go](golang)/[nodejs](nodejs)
- [nginx](nginx)
- [locust](locust)
- [the pretty stuff(frontend)](frontend)

# Installation guide
1. Open Terminal and Change Directory to the folder you want to download the project to.\
```cd <download directory>```

2. Clone the Repository\
   ```git clone https://github.com/WebDev001Group/HW01.git```

3. run docker-compose\
   ```docker-compose up --build```

# Locust Results
## Initial Conditions
![](locust/locust-screenshots/1/1.PNG?raw=true)

## CPU/RAM Conditions
| No. of nodejs Servers | No. of go Servers | Result with 120 users | Result with 280 users |
| :-: | :-: | :-: | :-: |
| 1 | 1 | ![](locust/locust-screenshots/1/2.PNG?raw=true) |  ![](locust/locust-screenshots/1/3.PNG?raw=true) |
| 2 | 2 | ![](locust/locust-screenshots/2/2.PNG?raw=true) |  ![](locust/locust-screenshots/2/3.PNG?raw=true) |
| 2 | 1 | ![](locust/locust-screenshots/3/2.PNG?raw=true) |  ![](locust/locust-screenshots/3/3.PNG?raw=true) |

## Charts
| No. of nodejs Servers | No. of go Servers | Requests Per Second | Response Time (ms) | Number of Users |
| :-: | :-: | :-: | :-: | :-: |
| 1 | 1 | ![](locust/locust-screenshots/1/4.PNG?raw=true) | ![](locust/locust-screenshots/1/5.PNG?raw=true) | ![](locust/locust-screenshots/1/6.PNG?raw=true) |
| 2 | 2 | ![](locust/locust-screenshots/2/4.PNG?raw=true) | ![](locust/locust-screenshots/2/5.PNG?raw=true) | ![](locust/locust-screenshots/2/6.PNG?raw=true) |
| 2 | 1 | ![](locust/locust-screenshots/3/5.PNG?raw=true) | ![](locust/locust-screenshots/3/6.PNG?raw=true) | ![](locust/locust-screenshots/3/7.PNG?raw=true) |

# The big brains behind this

| Name             | Student ID |
| :--------------: | :--------: |
| Reza Eiji        | 98101193   |
| Yasin Mousavi    | 98110351   |
| Dorrin Sotoudeh  | 98170851   |
