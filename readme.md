# Pranav Katiyar Portfolio Web UI

A modern, responsive personal portfolio built with React.  
Showcases professional experience, social profiles, and dynamic GitHub information.

## Features

- **Professional Section:** Timeline and cards for work experience and skills.
- **Social Section:** Modern cards linking to social networks (GitHub, LinkedIn, Instagram, etc.).
- **GitHub Section:** Dynamically fetches and displays public profile and recent repositories.
- **Site Map:** Transparent navigation at top-left, visible on hover.
- **Responsive Design:** Works well on desktop and mobile.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/pranav-katiyar/portfolio-web-ui.git
cd portfolio-web-ui
npm install
```

### Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/        # Shared UI components
  features/          # Main sections (Professional, Social, Github)
  App.tsx            # Main app entry
  index.tsx          # React DOM entry
  ...
```

## Customization

- Update your social links in `src/features/Social.tsx`.
- Add/edit professional experience in `src/features/Professional.tsx`.
- GitHub info is fetched automatically from your public profile.

## License

MIT

---

Made by [Pranav Katiyar](https://github.com/pranav-katiyar)