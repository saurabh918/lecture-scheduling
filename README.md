# Lecture Scheduling Module Readme

## Overview

The Lecture Scheduling Module is designed to facilitate scheduling and management of courses and lectures for administrators and instructors. It is built using React-Redux Toolkit and stores user credentials in the Redux store for authentication purposes.

## User Roles

- **Admin**: Admins have the authority to manage courses, add lectures under courses, schedule lectures, and assign them to instructors.

- **Instructor**: Instructors can view lectures assigned to them along with the dates.

## Pages

The project consists of three main pages:

1. ### Login Page ("/"):
- Initial page where users can authenticate.
- Users are redirected to their respective panels based on their roles after successful authentication.

2. ### Admin Panel ("/admin"):
- Admins can manage courses, add lectures, schedule lectures, and assign them to instructors.

2. ### Instructor Panel ("/instructor/(instructor name)"):
- Instructors can view lectures assigned to them along with the dates.
- The instructor's name is automatically set as a route parameter.

## Redirects

- Users attempting to access panels unrelated to their roles are automatically redirected to their respective panels.
- For example, if an admin tries to access the instructor panel ("/instructor"), they will be redirected back to the admin panel ("/admin").

## Route List

- **"/"**: Login page.
- **"/admin"**: Admin panel.
- **"/instructor/(instructor name)"**: Instructor panel (automatically sets the current logged-in instructor's name as a route parameter).

## Note

- User credentials are stored in the Redux store instead of being stored in an encrypted format in a database.
- The project utilizes React-Redux Toolkit for state management and authentication.
- Instructors cannot access panels of other instructors. Attempting to do so will automatically redirect to the current logged-in instructor's panel.