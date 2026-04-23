# Chuck Norris Jokes 

The main purpose of this web application is to display Chuck Norris jokes and allow users to add them to their favorites list. The web app contains several buttons, each representing a different feature.

## Features 

- **Receiving jokes**
  - Receiving one joke at a time
  - Receiving a new joke every 3 seconds
  - Stop receiving jokes
- **Favourite jokes**
  - Jokes can be saved in the favourites 
  - If the save button is pressed again, the joke is removed from the list
  - If the number of jokes in the list exceeds 10, the oldest joke is automatically removed
  - Jokes are persisted across page reloads using local storage
  - The entire list can be cleared at once

## UI and layout 

#### Design
The design aims to be modern yet simple, clear, and easy to navigate. The interface prioritizes readability and quick access to all 
features without unnecessary complexity.

#### Responsiveness
The application is fully responsive and adapts its layout to the user's device - whether desktop, tablet, or mobile.

#### Buttons & Controls
Because the app contains multiple buttons, each action type is visually distinguished by both color and an icon, making it easy to identify its purpose at a glance.

#### Loading State
An overlay loading indicator is displayed during data fetching to provide smooth and informative user feedback.

## Tech Stack 
- ReactJS + Vite 
- TypeScript 
- Tailwind CSS
- Axios 
- Lucide React

## Project structure 

- `src`
  - `components`
    - `core` - core application components (layout, structure)
    - `ui` - reusable UI elements
  - `contexts` - context providers for global state
  - `hooks` - custom hooks
  - `pages` - page level components
  - `types` - type definitions and interfaces 
  - `utils` - utility and helper functions
 
## Running the project
1. Clone the repository: `git clone`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open the browser and navigate to: `http://localhost:5173/`

