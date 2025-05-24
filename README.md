# Gemini 2.0 Clone

A modern, responsive Gemini AI web app clone built with React and Vite. This project demonstrates a clean UI, sidebar navigation, animated gradients, and Google Gemini API integration for AI-powered responses.

## Features
- Sidebar with expandable/collapsible menu
- Recent chats and quick actions
- Animated gradient greeting text
- Responsive card-based suggestions
- Search bar with icon actions
- Context API for state management
- Google Gemini API integration (streaming responses)
- Modern CSS styling

## Tech Stack
- React 19
- Vite
- CSS (custom, no frameworks)
- Google Gemini API (@google/genai)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn
- Google Gemini API key ([get one here](https://ai.google.dev/))

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/gemini-2.0-clone.git
   cd gemini-2.0-clone
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the project root:
     ```env
     VITE_GEMINI_API_KEY=your_gemini_api_key_here
     ```
   - **Never share or commit your API key!**

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## Project Structure
```
├── public/
├── src/
│   ├── assets/         # Images and icons
│   ├── components/
│   │   └── Main/
│   │       ├── Main.jsx
│   │       ├── Main.css
│   │       └── Sidebar/
│   │           ├── Sidebar.jsx
│   │           └── sidebar.css
│   ├── config/
│   │   └── gemini.js   # Gemini API integration
│   ├── context/
│   │   └── Context.jsx # React Context API
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                # Your Gemini API key (not committed)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Usage
- Click the menu icon to expand/collapse the sidebar.
- Start a new chat or select recent entries.
- Enter prompts in the search bar to interact with Gemini AI.
- The greeting text features a stylish animated gradient.

## Environment Variables
- `VITE_GEMINI_API_KEY`: Your Google Gemini API key. Required for AI features.

## Security
- **Never commit your .env file or API keys to version control.**
- The `.gitignore` is set up to exclude `.env`.

## License
This project is for educational/demo purposes. See [LICENSE](LICENSE) if provided.

## Credits
- [Google Gemini API](https://ai.google.dev/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

Feel free to fork, modify, and use this project as a starting point for your own Gemini-powered apps!
