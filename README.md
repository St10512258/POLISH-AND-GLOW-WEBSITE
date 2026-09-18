# Polish-and-Glow-website

---

-Student Name: Sibahle Jacob
-Student Number: ST10512258
-Module: Web Development
- Due Date: 18 September 2026

---

# Polish and Glow - Part 1 README.

## 1. Project Overview
Polish and Glow is a nail salon website. For Part 1, the task was to create the basic structure and layout of the website using only HTML5 and CSS3. No JavaScript, no forms, and no responsiveness were required yet.

The goal of Part 1 was to show the business idea, brand, and basic content.

## 2. Layout and Structure for Part 1

### Overall Page Layout
For Part 1 I used a very simple 3-part layout:
**Header -> Main Content -> Footer**

**a. Header:**
- Contains the business name/logo "Polish and Glow" on the left.
- Contains a simple navigation menu on the right with links: Home, About Us, Services, Gallery, Contact.
- For Part 1, the navigation was just plain text links, no hamburger menu yet.
- Background color was light pink (#f8bbd0) to match nail salon theme.
- Used `display: flex` and `justify-content: space-between` to put logo and links on opposite sides.

**b.Main Content:**
- This is the only section with content for Part 1.
- It includes:
    - An H1 heading: "WELCOME TO POLISH AND GLOW" - made big and centered
    - One main image of nails from Assets folder - this is the image that was not centering
    - Two paragraphs explaining what Polish and Glow does (e.g., "We offer professional manicures, pedicures...")
- I gave the main section a light background (#fff8f9) and centered all text with `text-align: center`.
- The image was added with `<img src="./Assets/nails.jpeg" alt="nail art">` but styling was minimal in Part 1.

**c.Footer:**
- Simple footer with only copyright text: "&copy; 2025 Polish and Glow Nail Salon"
- No social media icons yet in Part 1, just plain text.
- Light pink background.

---
## 3. Mistakes Fixed from Part 1 to Part 2

For Part 1, my Polish and Glow website had several errors and was very basic and I made a few changes:
For Part 2, I fixed the following mistakes:

### 1. CSS File Not Linking / Website Running from Temp Folder.
- **Mistake in Part 1:** I opened the project directly from the ZIP file in
  AppData/Local/Temp. Because of this, the CSS path./css/styles.css did not load,
  so the picture was not centered and words were small.
- **Fixed in Part 2:** I extracted the project properly to Desktop and corrected
  the link in the head to <link rel="stylesheet" href="css/styles.css"> and used
  Ctrl + F5 hard refresh.

### 2. Image Not Center Aligned and Too Small
- **Mistake in Part 1:** I used width="100%" height="100%" directly inside the HTML
  <img> tag. This stretched the image and it stayed on the left side.
- **Fixed in Part 2:** I removed width/height from HTML and added proper CSS:
  img { display: block; margin: 0 auto; width: 400px; max-width: 90%; border-radius: 15px; }
  display: block and margin: 0 auto is the correct way to center an image.

### 3. Words / Headings Not Big Enough
- **Mistake in Part 1:** I did not set font-size in CSS, so H1 and paragraphs used
  default browser size (16px), making the site look unprofessional.
- **Fixed in Part 2:** I added:
  h1 { font-size: 42px; color: #c2185b; text-align: center; }
  p { font-size: 18px; line-height: 1.6; }

### 4. No Semantic Structure and No Layout System .
- **Mistake in Part 1:** I did not use Flexbox, all elements were stacked vertically.
- **Fixed in Part 2:** I used Flexbox for header, navigation, and service cards:
  header { display: flex; justify-content: space-between; align-items: center; }

### 5. Website Not Responsive / No Mobile View
- **Mistake in Part 1:** The website looked bad on phone, navigation overflowed.
- **Fixed in Part 2:** I added media queries and a hamburger menu with JavaScript:
  @media (max-width: 768px) {.nav-links { display: none; }.hamburger { display: block; } }

### 6. Video Not Working
- **Mistake in Part 1:** I used <video src="https://youtu.be/..."> which does not work
  for YouTube links.
- **Fixed in Part 2:** I changed to <iframe> embed for YouTube with correct embed URL
  https://www.youtube.com/embed/...

### 7. No Accessibility
- **Mistake in Part 1:** Images had no proper alt text and no hover effects.
- **Fixed in Part 2:** Added alt="Pink gel manicure design" for all images and added
  hover effects on buttons and links.

### 8. Single Page Only
- **Mistake in Part 1:** Only had index.html.
- **Fixed in Part 2:** Created full site structure: about.html, services.html,
  gallery.html, contact.html, enquiry.html with consistent header/footer.

### 9. No Form or Validation
- **Mistake in Part 1:** No way for customers to contact the business.
- **Fixed in Part 2:** Added enquiry.html with form and JavaScript validation for
  required fields, email format, and phone number.

---
## 1. Project Overview - PART 1 AND 2
Polish and Glow is a responsive website for a nail salon business. The purpose of 
the website is to showcase the salon's services, allow customers to learn more about
the business, view nail art and make enquiries or bookings online, The website was 
using HTML5, CSS and basic JavaScript.
---
## 2. Website Layout and Structure - PART 2 

###Overall Layout
The website follows a standard, clean layout used for business websites:
**Hearder - Navigation - Main Content - Footer**
This layout is consistent on all pages for easy navigation.

**a. Hearder:**
-Contains the business logo (polish & glow) on the left
-Contains the navigation menu on the right with likns: HOME, ABOUT US, SERVICES, ENQUIRY AND CONTACT US.
-The hearder has a deep purple color to match the brand.
-I used display: flex and justify-content: space between to place logo and nav side by side.

**b. Main Content:** -
- Each page has a central main section that holds the page-specific content.
- On the Home page, it includes:
    - A large welcome heading (H1) - "WELCOME TO POLISH AND GLOW"
    - A centered main image of nail art (to attract customers)
    - A short introductory paragraph about the salon
    - A video section showing nail procedures
- I used `text-align: center` to center all text and images.
- I used responsive classes like `.responsive-text` to make text adapt to mobile screens.

**c.Footer:**
- Contains copyright information: "&copy; 2025 Polish and Glow Nail Salon"
- Contains social media icons linking to Facebook and Instagram (using Font Awesome)
- Contains contact details and business disclaimer
- The footer has a darker pink background for contrast.

---

### 3. File and Folder Structure

Polish-and-Glow-website/

- index.html              # Home page
-about.html              # About Us page
-services.html           # Services offered (Manicure, Pedicure, Gel, Acrylic)
-gallery.html            # Image gallery of nail designs
-contact.html            # Contact details and map
- enquiry.html            # Enquiry/Booking form
-css/
---  /styles.css          # Main stylesheet for all pages

-Assets/
  /images/
    /-logo.png
    /-main-nails.jpeg
   /-gallery1-6.jpeg
  videos/
      /- nail-process

---
## 4. Pages Explained

1.  **index.html (Home):** This is the landing page. It has a large centered hero image, welcome message, and brief introduction. This is the page you saw where the picture was not centered.

2.  **about.html:** Describes the story of Polish and Glow, mission, and values. Includes team photos.

3.  **services.html:** Lists all services with prices. Uses cards/boxes layout for each service (e.g., Gel Nails - R250).

4.  **contact.html:** Shows phone number, email, address, operating hours, and an embedded Google Map.

5.  **enquiry.html:** Contains a form where customers can request appointments. Fields include Name, Email, Phone, Service, Date, Message. Includes form validation using JavaScript .

---

## 5. What I Added / Features Implemented

### Design and Styling (CSS):
- **Color Scheme:** I chose a feminine palette: light pink (#fff8f9), hot pink (#c2185b), and white for elegance.
- **Typography:** Used clean sans-serif fonts (Arial) for readability. Made headings big (42px) using `font-size` to solve the "words not big" problem.
- **Image Styling:** Fixed the image centering issue by using:
  ```css
  img { display: block; margin: 0 auto; width: 400px; }

---

## References

Mozilla Developer Network, 2024. CSS: Cascading Style Sheets - display. [online]
Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/display
[Accessed 14 September 2026].

Mozilla Developer Network, 2024. HTML: HyperText Markup Language - <img> tag. [online]
Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
[Accessed 14 September 2026].

W3Schools, 2024. How To Center an Image. [online] Available at:
https://www.w3schools.com/howto/howto_css_image_center.asp
[Accessed 14 September 2026].

W3Schools, 2024. CSS Flexbox. [online] Available at:
https://www.w3schools.com/css/css3_flexbox.asp
[Accessed 14 September 2026].

Google Fonts, 2024. Sofia Font Family. [online] Available at:
https://fonts.google.com/specimen/Sofia
[Accessed 14 September 2026].

Font Awesome, 2024. Get Started with Font Awesome. [online] Available at:
https://fontawesome.com/docs
[Accessed 14 September 2026].

GeeksforGeeks, 2023. How to fix CSS not linking to HTML. [online] Available at:
https://www.geeksforgeeks.org/how-to-fix-css-not-linking-to-html/
[Accessed 14 September 2026].

YouTube Developers, 2024. Embed a YouTube Player. [online] Available at:
https://developers.google.com/youtube/player_parameters
[Accessed 14 September 2026].

---

Updated my whole website as I was having errors and I could not run my website.

---

I rechanged a lot that I had to re commit to have a minimum of 30 commits.

---

Uploaded my Asssets and Pages folder individually.
---

## Technologies Used
-HTML5.
-CSS3/ style.css.
-A little bit of JavaScript/ Main.js.
-Github Pages for hosting.

---

## Folders Structure
-/Assets/css - styling.
-/Assets/images - all salon images.
-/Assets/js - JavaScript.
-/Pages - other HTML pages.
-indez.html -main homepage.

---

## Live Website
https://St10512258.github.io/POLISH-AND-GLOW-WEBSITE/ .

## Created By
Student Number: St10512258.

## How to Run .
Just open index.html in browser, or visit live link above.

---



