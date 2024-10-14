# Neighbourly | Bridging Residents and Reliable Service Providers

<img src="./neighbourly-client/public/logo.png" align="right" width="110" height="110" />

Effortlessly connect residents with trusted home service providers. Our E-Society Management platform ensures easy access to local experts for plumbing, electrical work, cleaning, and more within the community.




#### Live URL -> https://neighbourly-beta.web.app

#### Server APIs -> https://neighbourly-server.vercel.app

#### Repository -> https://github.com/rockyhaque/Neighbourly


<hr>

### Admin Credentials



Email: 
```
admin@neighbourly.com
```

Pass: 
```
shasdfJKL:1@
```
<hr>

### Technologies Used in the Project:

Dependencies:
- React
- React-DOM 
- React-Router-DOM 
- React-Helmet 
- React-Hook-Form 
- React-Icons 
- React-Hot-Toast 
- React-Spinners 
- React-Time-Picker 
- React-Multi-Date-Picker 
- @tanstack/react-query 
- Axios
- Firebase 
- Moment 
- Moment-Timezone 
- Date-Fns 
- Query-String 
- AOS (Animate On Scroll)
- Sweetalert2 
- Prop-Types 

### How It Works:

`For Workers:` They can sign up, create a profile showcasing their skills and will be hired by residents.

`For Residents:` They can post service requests—like needing a plumber or a gardener—and then choose from the workers who apply.

`For Admin:` The admin plays a crucial role in managing everything on the platform. They can approve worker registrations, oversee service requests, and ensure the platform runs smoothly.

### Authentication:

- Users can register as residents.

- Profile creation with email, password, name, and photo upload.

- Login functionality for registered users.

- Google Sign-In feature.

- Secure authentication using JWT (token stored in browser cookies).

### Admin features:

- Manage users 

    - Update

    - Delete User



### Resident features:

- Worker booking.

- Timer-based status update for worker upon booking confirmation.

- Payment via hand cash.



### Worker features:

- Accept work requests.

- Add Service

- View added service

- Manage service

    - View who booked

    - Cancle/reject booking

- Timer for current work with end button to calculate and send work duration data to the resident's history (optional).


### Worker Details Page:

- Redirect to job details with worker information (Name, Image, Rating, Phone, Address, Description, Experience, etc.) and a "Book Now" form.

- Modal popup on booking with resident's email, non-editable price, and a confirm booking button.


### Conclusion:

This project effectively combines a comprehensive set of functionalities to manage service requests between residents and workers within a community. The system is designed with user-friendly features such as conditional navigation, secure authentication, and seamless booking processes. By integrating a timer system for workers and detailed booking histories for residents, the project ensures transparency and efficiency in managing service interactions. With a strong focus on usability and security, this system is well-suited to streamline service management and enhance the overall experience for both residents and workers.