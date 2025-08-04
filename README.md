# Tamil Uyir Ezhuthukkal Learning Game 🎮

A beautiful, interactive learning game for toddlers (age 2+) to learn Tamil vowels (உயிர் எழுத்துக்கள்) through engaging animations, sounds, and touch interactions.

## Features ✨

- **12 Tamil Vowels**: Interactive cards for அ to ஔ
- **Touch-First Design**: Optimized for toddlers with large, colorful buttons
- **Animations**: Smooth Framer Motion animations with bounce, glow, and sparkle effects
- **Audio Feedback**: Speech synthesis for letter pronunciation
- **Animated Background**: Floating clouds, sun, butterflies, and decorative elements
- **Progress Tracking**: Visual progress indicator
- **Parent Gate**: Math problem verification for navigation
- **Mobile Responsive**: Works perfectly on tablets and phones
- **Modular Components**: Reusable architecture for future chapters

## Tech Stack 🛠️

- **React 18** - Modern React with hooks
- **Vite** - Fast development and build tool
- **Tailwind CSS** - Utility-first styling with custom baby-friendly colors
- **Framer Motion** - Smooth animations and interactions
- **Lottie React** - Vector animations (ready for character companions)
- **Howler.js** - Audio management (with Speech Synthesis fallback)

## Getting Started 🚀

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure 📁

```
src/
├── components/
│   ├── AnimatedBackground.jsx  # Floating animations
│   ├── AudioManager.jsx        # Sound management
│   ├── Header.jsx              # Chapter title
│   ├── LetterCard.jsx          # Interactive vowel cards
│   └── NextButton.jsx          # Parent-gated navigation
├── data/
│   └── tamilVowels.js          # Vowel data with colors and words
├── App.jsx                     # Main application
├── main.jsx                    # React entry point
└── index.css                   # Global styles
```

## Customization 🎨

### Adding New Vowels
Edit `src/data/tamilVowels.js` to add or modify vowel data:

```javascript
{
  id: 13,
  letter: 'ஃ',
  romanized: 'ah',
  word: 'ஃபோன்',
  wordMeaning: 'Phone',
  color: '#FF6B6B',
  bgColor: '#FFE5E5',
  audioFile: '/audio/ah.mp3'
}
```

### Custom Colors
Modify `tailwind.config.js` to add new baby-friendly colors:

```javascript
colors: {
  'baby-mint': '#98FB98',
  'baby-coral': '#FF7F7F',
  // Add more colors...
}
```

### Audio Files
Replace speech synthesis with actual audio files by:
1. Adding MP3 files to `public/audio/`
2. Updating `AudioManager.jsx` to use Howler.js
3. Setting proper file paths in `tamilVowels.js`

## Features for Parents 👨‍👩‍👧‍👦

- **Safe Navigation**: Math problem gate prevents accidental progression
- **Audio Controls**: Toggle background music and sound effects
- **Progress Tracking**: Visual indicators show learning progress
- **Touch-Safe**: No accidental exits or unwanted interactions

## Browser Support 🌐

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements 🔮

- [ ] Consonant chapters (மெய் எழுத்துக்கள்)
- [ ] Combined letters (உயிர்மெய் எழுத்துக்கள்)
- [ ] Character companions with Lottie animations
- [ ] Voice recording for custom pronunciation
- [ ] Offline mode with service workers
- [ ] Achievement system and rewards
- [ ] Multiple difficulty levels

## Contributing 🤝

This is a learning project designed for Tamil-speaking toddlers. Contributions for educational improvements, accessibility features, and additional Tamil content are welcome!

## License 📄

MIT License - Feel free to use this for educational purposes.

---

**Made with ❤️ for Tamil learning** 🇮🇳
