# Theme Preference Manager

A JavaScript DOM project that allows users to switch between light and dark themes while automatically detecting the system's preferred color scheme. The selected theme is stored using Local Storage, ensuring the user's preference is preserved even after refreshing or reopening the application.


## 🚀 Features

- Toggle between Light and Dark themes
- Detect the system's preferred color scheme
- Save theme preference using Local Storage
- Automatically apply the saved theme on page load
- Listen for operating system theme changes
- Smooth and minimal user interface
- Persistent user experience across browser sessions


## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation)
- Local Storage API
- Window MatchMedia API


## 📚 JavaScript Concepts Practiced

- DOM Selection
- Event Handling
- Class Manipulation
- Local Storage
- Browser APIs
- `window.matchMedia()`
- Conditional Statements
- Theme Persistence
- Dynamic UI Updates


## ⚙️ How It Works

1. On page load, the application checks whether a theme preference exists in Local Storage.
2. If a saved preference is found, that theme is applied.
3. Otherwise, the application detects the user's operating system theme using the `prefers-color-scheme` media query.
4. Clicking the **Toggle Theme** button switches between Light and Dark mode.
5. The selected theme is saved in Local Storage for future visits.
6. If no manual preference has been saved, the application automatically updates when the operating system theme changes.


## 📂 Project Structure
```
Theme Preference Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ How to Run

1. Clone or download the repository.
2. Open the project folder.
3. Launch `index.html` in your browser.
4. Click the **Toggle Theme** button to switch themes.
5. Refresh the page to see that your selected theme is remembered.


## 🎯 Learning Outcomes

This project helped me improve my understanding of:

- Managing application themes with JavaScript
- Persisting user preferences using Local Storage
- Using the `matchMedia()` API
- Working with browser events
- Building a better user experience through preference persistence
- Dynamically updating styles using CSS classes


## 🔮 Future Improvements

- Add animated theme transitions
- Include multiple color themes
- Display the current active theme
- Add theme icons (🌞 / 🌙)
- Create a settings panel for theme customization
- Allow users to reset to the system default theme


## 📸 Preview

<img width="1906" height="900" alt="Screenshot 2026-07-14 223000" src="https://github.com/user-attachments/assets/8cb3bf0f-f94b-45df-9aad-5e63ba68f56d" />

<img width="1900" height="896" alt="Screenshot 2026-07-14 223018" src="https://github.com/user-attachments/assets/7ce40440-939d-4339-84ab-3374369933da" />


## 👩‍💻 Author

**Sehajpal Singh**

Built as part of my JavaScript DOM practice projects to strengthen my understanding of browser APIs, Local Storage, and dynamic theme management.
