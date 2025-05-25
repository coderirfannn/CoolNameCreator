import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Sparkles, ArrowRight } from "lucide-react"
import Header from './Header';
import Feature from './Feature';

function Main() {

    const [name, setName] = useState(""); // for input
    const [styledNames, setStyledNames] = useState([]); // for output list



    const generateStylishNames = () => {
        if (!name.trim()) return;

        const formatted = [
            // Modern & Minimalist (1-20)
            `<span style="font-family: 'Montserrat', sans-serif; font-weight: 300; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Helvetica Neue', sans-serif; font-weight: 100; font-size: 1.5em;">${name}</span>`,
            `<span style="font-family: 'Futura', sans-serif; text-transform: uppercase; letter-spacing: 3px;">${name}</span>`,
            `<span style="font-family: 'Avenir Next', sans-serif; font-weight: 500; color: #333;">${name}</span>`,
            `<span style="font-family: 'Roboto', sans-serif; font-weight: 300; font-style: italic;">${name}</span>`,
            `<span style="font-family: 'Circular', sans-serif; font-size: 1.2em; color: #000;">${name}</span>`,
            `<span style="font-family: 'Proxima Nova', sans-serif; font-weight: 600; letter-spacing: 1px;">${name}</span>`,
            `<span style="font-family: 'Gotham', sans-serif; text-transform: uppercase; font-weight: 700;">${name}</span>`,
            `<span style="font-family: 'Neue Haas Grotesk', sans-serif; font-size: 1.3em;">${name}</span>`,
            `<span style="font-family: 'SF Pro Display', sans-serif; font-weight: 400;">${name}</span>`,


            `⎯፝֟፝֟⎯᪵🌺⎯꯭᪵${name}꯭ ⃪𝆺꯭𝅥⎯꯭🌸`,
            `⎯••⎯°☘️°⎯••⎯ ${name} ⎯••⎯°🍃°⎯••⎯`,
            `꧁𓊈𒆜🦢𒆜𓊉꧂ ${name} ꧁𓊈𒆜🌿𒆜𓊉꧂`,
            `⋆˚🐇⋆｡˚⋆ ${name} ⋆˚🦊⋆｡˚⋆`,
            `⎯⟡♡⟡⎯ ${name} ⎯⟡♡⟡⎯`,
            `◌⑅⃝●⋆⋆⃟⊹⋆${name}⋆⊹⃟⋆⋆●⑅⃝◌`,
            `𓆩♡𓆪 ${name} 𓆩♡𓆪`,
            `ꕤ ${name} ꕤ`,
            `✿҉ ${name} ҉✿`,
            `°•∘ ${name} ∘•°`,

            `⋆⁺₊⋆ ☾⋆⁺₊⋆ ${name} ⋆⁺₊⋆ ☽⋆⁺₊⋆`,
            `＊*•̩̩͙✩•̩̩͙*˚ ${name} ˚*•̩̩͙✩•̩̩͙*˚＊`,
            `°。°。°。° ${name} °。°。°。°`,
            `･ﾟ✧ ${name} ✧･ﾟ`,
            `✧･ﾟ: *✧･ﾟ:* ${name} *:･ﾟ✧*:･ﾟ✧`,
            `⭒☆⭒ ${name} ⭒☆⭒`,
            `⋆｡ﾟ☁︎｡⋆ ${name} ⋆｡☁︎ﾟ｡⋆`,
            `☄. *.⋆ ${name} ⋆.* ☄.`,
            `✦⋆˙ ${name} ˙⋆✦`,
            `⭑⚝⭑ ${name} ⭑⚝⭑`,




            // Modern & Minimalist (1-10)
            `<span style="font-family: 'Montserrat', sans-serif; font-weight: 300; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Helvetica Neue', sans-serif; font-weight: 100; font-size: 1.5em;">${name}</span>`,
            `<span style="font-family: 'Futura', sans-serif; text-transform: uppercase; letter-spacing: 3px;">${name}</span>`,
            `<span style="font-family: 'Avenir Next', sans-serif; font-weight: 500; color: #333;">${name}</span>`,
            `<span style="font-family: 'Roboto', sans-serif; font-weight: 300; font-style: italic;">${name}</span>`,
            `<span style="font-family: 'Circular', sans-serif; font-size: 1.2em; color: #000;">${name}</span>`,
            `<span style="font-family: 'Proxima Nova', sans-serif; font-weight: 600; letter-spacing: 1px;">${name}</span>`,
            `<span style="font-family: 'Gotham', sans-serif; text-transform: uppercase; font-weight: 700;">${name}</span>`,
            `<span style="font-family: 'Neue Haas Grotesk', sans-serif; font-size: 1.3em;">${name}</span>`,
            `<span style="font-family: 'SF Pro Display', sans-serif; font-weight: 400;">${name}</span>`,

            // Enhanced Decorative Styles (11-30)
            `<span style="font-family: 'Dancing Script', cursive; font-size: 1.5em; color: #ff6b9d; text-shadow: 0 0 5px #ffb6c1;">⎯፝֟⎯🌺⎯꯭᪵ ${name} ⃪𝆺꯭𝅥⎯🌸⎯፝֟⎯</span>`,
            `<span style="font-family: 'Zeyada', cursive; font-size: 1.8em; color: #4CAF50; letter-spacing: 2px;">⎯••⎯°☘️°⎯••⎯ ${name} ⎯••⎯°🍃°⎯••⎯</span>`,
            `<span style="font-family: 'Cinzel Decorative', cursive; font-weight: bold; color: #D4AF37; text-shadow: 1px 1px 2px #000;">꧁𓊈𒆜🦢𒆜𓊉꧂ ${name} ꧁𓊈𒆜🌿𒆜𓊉꧂</span>`,
            `<span style="font-family: 'Cookie', cursive; font-size: 2em; color: #795548; background: linear-gradient(to right, #FFEB3B, #FF9800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">⋆˚🐇⋆｡˚⋆ ${name} ⋆˚🦊⋆｡˚⋆</span>`,
            `<span style="font-family: 'Great Vibes', cursive; font-size: 1.8em; color: #E91E63; letter-spacing: 3px;">⎯⟡♡⟡⎯ ${name} ⎯⟡♡⟡⎯</span>`,
            `<span style="font-family: 'Satisfy', cursive; font-size: 1.6em; color: #9C27B0; text-shadow: 0 0 8px #E1BEE7;">◌⑅⃝●⋆⋆⃟⊹⋆ ${name} ⋆⊹⃟⋆⋆●⑅⃝◌</span>`,
            `<span style="font-family: 'Parisienne', cursive; font-size: 1.9em; color: #FF5722; background-color: #FFF9C4; padding: 0 10px; border-radius: 15px;">𓆩♡𓆪 ${name} 𓆩♡𓆪</span>`,
            `<span style="font-family: 'Alex Brush', cursive; font-size: 2em; color: #3F51B5; letter-spacing: 2px;">ꕤ ${name} ꕤ</span>`,
            `<span style="font-family: 'Tangerine', cursive; font-size: 2.2em; color: #FF9800; text-shadow: 1px 1px 2px #FFE0B2;">✿҉ ${name} ҉✿</span>`,
            `<span style="font-family: 'Rouge Script', cursive; font-size: 1.9em; color: #009688; transform: rotate(-2deg); display: inline-block;">°•∘ ${name} ∘•°</span>`,

            // Celestial & Magical Styles (31-40)
            `<span style="font-family: 'Amita', cursive; font-size: 1.6em; color: #9C27B0; text-shadow: 0 0 10px #E1BEE7;">⋆⁺₊⋆ ☾⋆⁺₊⋆ ${name} ⋆⁺₊⋆ ☽⋆⁺₊⋆</span>`,
            `<span style="font-family: 'La Belle Aurore', cursive; font-size: 1.8em; color: #FFC107; background: linear-gradient(to right, #FF5722, #FF9800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">＊*•̩̩͙✩•̩̩͙*˚ ${name} ˚*•̩̩͙✩•̩̩͙*˚＊</span>`,
            `<span style="font-family: 'Mrs Saint Delafield', cursive; font-size: 2em; color: #8BC34A; letter-spacing: 3px;">°。°。°。° ${name} °。°。°。°</span>`,
            `<span style="font-family: 'Sacramento', cursive; font-size: 2em; color: #E91E63; text-shadow: 0 0 5px #F8BBD0;">･ﾟ✧ ${name} ✧･ﾟ</span>`,
            `<span style="font-family: 'Kaushan Script', cursive; color: #00BCD4; background-color: #E0F7FA; padding: 0 10px; border-radius: 20px;">✧･ﾟ: *✧･ﾟ:* ${name} *:･ﾟ✧*:･ﾟ✧</span>`,
            `<span style="font-family: 'Meddon', cursive; font-size: 1.7em; color: #673AB7; text-shadow: 1px 1px 2px #D1C4E9;">⭒☆⭒ ${name} ⭒☆⭒</span>`,
            `<span style="font-family: 'Merienda', cursive; font-size: 1.5em; color: #607D8B; background-color: #ECEFF1; padding: 0 10px;">⋆｡ﾟ☁︎｡⋆ ${name} ⋆｡☁︎ﾟ｡⋆</span>`,
            `<span style="font-family: 'Montez', cursive; font-size: 1.8em; color: #F44336; transform: rotate(2deg); display: inline-block;">☄. *.⋆ ${name} ⋆.* ☄.</span>`,
            `<span style="font-family: 'Norican', cursive; font-size: 1.6em; color: #4CAF50; letter-spacing: 2px;">✦⋆˙ ${name} ˙⋆✦</span>`,
            `<span style="font-family: 'Petit Formal Script', cursive; font-size: 1.7em; color: #795548; text-shadow: 0 0 5px #D7CCC8;">⭑⚝⭑ ${name} ⭑⚝⭑</span>`,


            `<span style="font-family: 'Cinzel Decorative', cursive; font-weight: 900; text-shadow: 1px 1px 2px gold;">⋆⁺₊⋆ ☾⋆⁺₊⋆ ${name} ⋆⁺₊⋆ ☽⋆⁺₊⋆ </span>`,
            `<span style="font-family: 'UnifrakturMaguntia', cursive; font-size: 1.8em; color: #8B4513;">⚔️ ${name} ⚔️</span>`,
            `<span style="font-family: 'MedievalSharp', cursive; text-shadow: 2px 2px 4px #000; color: #D4AF37;">KING ${name.toUpperCase()}</span>`,
            `<span style="font-family: 'Old English Text MT', serif; letter-spacing: 3px; background: linear-gradient(to right, #D4AF37, #F9D423); -webkit-background-clip: text; color: transparent;">${name}</span>`,
            `<span style="font-family: 'Cardo', serif; border: 2px solid gold; padding: 5px; background: #1A1A1A; color: #FFF;">🏰 ${name} 🏰</span>`,
            `<span style="font-family: 'Trajan Pro', serif; color: #C0C0C0; text-shadow: 0 0 5px #000;">𓋴 ${name} 𓋴</span>`,
            `<span style="font-family: 'Blackadder ITC', cursive; font-size: 1.7em; color: #8B0000;">⚜️ ${name} ⚜️</span>`,
            `<span style="font-family: 'Goudy Old Style', serif; border-bottom: 3px double #D4AF37;">${name}</span>`,
            `<span style="font-family: 'Papyrus', fantasy; font-weight: bold; color: #5D4037; letter-spacing: 2px;">𓃭 ${name} 𓃭</span>`,
            `<span style="font-family: 'Book Antiqua', serif; background: url('https://i.imgur.com/JQlq5Yp.png'); -webkit-background-clip: text; color: transparent; font-size: 1.5em;">${name}</span>`,

            // Royal & Elegant (21-40)
            `<span style="font-family: 'Playfair Display', serif; font-weight: 700; font-size: 1.4em;">${name}</span>`,
            `<span style="font-family: 'Cormorant Garamond', serif; font-weight: 500; font-style: italic;">${name}</span>`,
            `<span style="font-family: 'EB Garamond', serif; font-size: 1.3em; letter-spacing: 1px;">${name}</span>`,
            `<span style="font-family: 'Bodoni Moda', serif; font-weight: 600; text-transform: uppercase;">${name}</span>`,
            `<span style="font-family: 'Didot', serif; font-weight: 400; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Marcellus', serif; font-size: 1.5em; color: #222;">${name}</span>`,
            `<span style="font-family: 'Arapey', serif; font-style: italic; font-size: 1.3em;">${name}</span>`,
            `<span style="font-family: 'Prata', serif; font-weight: 400;">${name}</span>`,
            `<span style="font-family: 'Cinzel', serif; font-weight: 700; letter-spacing: 3px;">${name}</span>`,
            `<span style="font-family: 'Unna', serif; font-size: 1.4em; font-weight: 400;">${name}</span>`,

            // Attractive & Stylish (41-60)
            `<span style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #ff6b6b;">${name}</span>`,
            `<span style="font-family: 'Satisfy', cursive; font-size: 1.6em; color: #333;">${name}</span>`,
            `<span style="font-family: 'Dancing Script', cursive; font-size: 1.7em; font-weight: 700;">${name}</span>`,
            `<span style="font-family: 'Great Vibes', cursive; font-size: 1.8em; color: #555;">${name}</span>`,
            `<span style="font-family: 'Parisienne', cursive; font-size: 1.6em;">${name}</span>`,
            `<span style="font-family: 'Alex Brush', cursive; font-size: 1.9em; color: #222;">${name}</span>`,
            `<span style="font-family: 'Tangerine', cursive; font-size: 2em; font-weight: 700;">${name}</span>`,
            `<span style="font-family: 'Sacramento', cursive; font-size: 1.8em;">${name}</span>`,
            `<span style="font-family: 'Cookie', cursive; font-size: 2em; color: #333;">${name}</span>`,
            `<span style="font-family: 'Rouge Script', cursive; font-size: 1.9em;">${name}</span>`,

            // Decorative & Fun (61-80)
            `<span style="font-family: 'Rubik Doodle Shadow', cursive; font-size: 1.5em;">★ ${name} ★</span>`,
            `<span style="font-family: 'Bungee', cursive; color: #ff4757;">${name.split("").join(" • ")}</span>`,
            `<span style="font-family: 'Modak', cursive; font-size: 1.8em; color: #ff6b6b;">${name}</span>`,
            `<span style="font-family: 'Fredoka One', cursive; color: #2ed573;">${name}</span>`,
            `<span style="font-family: 'Lilita One', cursive; color: #3742fa;">${name}</span>`,
            `<span style="font-family: 'Luckiest Guy', cursive; font-size: 1.6em; color: #ffa502;">${name}</span>`,
            `<span style="font-family: 'Chewy', cursive; font-size: 1.5em; color: #5352ed;">${name}</span>`,
            `<span style="font-family: 'Bangers', cursive; font-size: 1.7em; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Creepster', cursive; font-size: 1.8em; color: #ff6348;">${name}</span>`,
            `<span style="font-family: 'Frijole', cursive; font-size: 1.5em;">${name}</span>`,

            `<span style="font-family: 'Satisfy', cursive; color: #FF69B4; text-shadow: 0 0 5px #FFB6C1;">🌸 ${name.split("").join(" ✿ ")} 🌸</span>`,
            `<span style="font-family: 'Dancing Script', cursive; background: linear-gradient(to right, #FF1493, #FF8C00); -webkit-background-clip: text; color: transparent;">🌺 ${name} 🌺</span>`,
            `<span style="font-family: 'Parisienne', cursive; color: #4B0082; border: 1px dashed #BA55D3; padding: 0 10px;">${name}</span>`,
            `<span style="font-family: 'Zeyada', cursive; font-size: 2em; color: #8FBC8F;">🌿 ${name} 🌿</span>`,
            `<span style="font-family: 'La Belle Aurore', cursive; color: #FF6347; text-decoration: underline wavy #32CD32;">${name}</span>`,
            `<span style="font-family: 'Mrs Saint Delafield', cursive; font-size: 1.8em; background: url('https://i.imgur.com/XKQZQYt.png'); -webkit-background-clip: text; color: transparent;">${name}</span>`,
            `<span style="font-family: 'Rouge Script', cursive; color: #DA70D6; text-shadow: 2px 2px 4px #FFB6C1;">🌼 ${name.split("").join(" 🍃 ")} 🌼</span>`,
            `<span style="font-family: 'Alex Brush', cursive; font-size: 2em; color: #FF4500;">🌹 ${name} 🌹</span>`,
            `<span style="font-family: 'Great Vibes', cursive; color: #9932CC; letter-spacing: 3px;">✿ ${name} ✿</span>`,
            `<span style="font-family: 'Tangerine', cursive; font-size: 2.2em; color: #228B22;">🍀 ${name} 🍀</span>`,

            // Special Effects (81-100)
            `<span style="font-family: 'Arial', sans-serif; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); font-size: 1.3em;">${name}</span>`,
            `<span style="font-family: 'Verdana', sans-serif; background: linear-gradient(to right, #ff8a00, #e52e71); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold;">${name}</span>`,
            `<span style="font-family: 'Courier New', monospace; border: 2px solid #333; padding: 5px 10px; letter-spacing: 3px;">${name}</span>`,
            `<span style="font-family: 'Times New Roman', serif; text-decoration: underline wavy #ff4757; font-size: 1.4em;">${name}</span>`,
            `<span style="font-family: 'Georgia', serif; border-bottom: 3px double #333; padding-bottom: 3px;">${name}</span>`,
            `<span style="font-family: 'Palatino', serif; background-color: #f1f2f6; padding: 5px 15px; border-radius: 20px;">${name}</span>`,
            `<span style="font-family: 'Trebuchet MS', sans-serif; box-shadow: 0 4px 8px rgba(0,0,0,0.1); padding: 5px 10px;">${name}</span>`,
            `<span style="font-family: 'Impact', sans-serif; color: white; text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;">${name}</span>`,
            `<span style="font-family: 'Comic Sans MS', cursive; background: #fffacd; padding: 5px 10px; border-radius: 5px;">${name}</span>`,
            `<span style="font-family: 'Brush Script MT', cursive; transform: rotate(-5deg); display: inline-block; font-size: 1.6em;">${name}</span>`,

            `<span style="font-family: 'Playfair Display', serif; font-weight: 900; background: linear-gradient(to right, #FFD700, #E5E4E2); -webkit-background-clip: text; color: transparent;">💎 ${name} 💎</span>`,
            `<span style="font-family: 'Cormorant Garamond', serif; font-style: italic; color: #C0C0C0; text-shadow: 0 0 10px #FFFFFF;">✨ ${name.split("").join(" ✨ ")} ✨</span>`,
            `<span style="font-family: 'Bodoni MT', serif; font-weight: bold; letter-spacing: 5px; color: #000; background-color: #FFF; padding: 0 10px;">🖤 ${name} 🖤</span>`,
            `<span style="font-family: 'Didot', serif; font-size: 1.5em; color: #333; border-bottom: 1px solid #999;">${name}</span>`,
            `<span style="font-family: 'Marcellus SC', serif; text-transform: uppercase; color: #FFF; background-color: #000; padding: 5px 15px;">${name}</span>`,
            `<span style="font-family: 'Arapey', serif; font-style: italic; color: #555; letter-spacing: 2px;">✧ ${name} ✧</span>`,
            `<span style="font-family: 'Prata', serif; color: #8B0000; text-shadow: 1px 1px 2px #000;">🍷 ${name} 🍷</span>`,
            `<span style="font-family: 'Gilda Display', serif; font-size: 1.6em; color: #000; border-left: 3px solid #D4AF37; padding-left: 10px;">${name}</span>`,
            `<span style="font-family: 'Forum', cursive; text-transform: uppercase; letter-spacing: 4px; color: #FFF; background-color: #8B4513; padding: 5px;">${name}</span>`,
            `<span style="font-family: 'Quattrocento', serif; font-weight: bold; color: #000; text-shadow: 1px 1px 2px #FFF;">★ ${name} ★</span>`,


            `<span style="font-family: 'Rubik Maze', cursive; color: #FF0000; letter-spacing: 3px;">🖌️ ${name} 🖌️</span>`,
            `<span style="font-family: 'Finger Paint', cursive; color: #000; background-color: #FFD700; padding: 0 10px;">🎨 ${name} 🎨</span>`,
            `<span style="font-family: 'Sedgwick Ave Display', cursive; font-size: 1.8em; color: #FF00FF;">✏️ ${name} ✏️</span>`,
            `<span style="font-family: 'Permanent Marker', cursive; color: #000; transform: rotate(-5deg); display: inline-block;">${name}</span>`,
            `<span style="font-family: 'Rock Salt', cursive; color: #FFF; text-shadow: 2px 2px 4px #000;">✒️ ${name} ✒️</span>`,
            `<span style="font-family: 'Homemade Apple', cursive; color: #8B4513; font-size: 1.5em;">📝 ${name} 📝</span>`,
            `<span style="font-family: 'Nanum Pen Script', cursive; font-size: 2em; color: #0000FF;">🖋️ ${name} 🖋️</span>`,
            `<span style="font-family: 'Covered By Your Grace', cursive; color: #FF6347; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Kaushan Script', cursive; background: linear-gradient(to right, #FF0000, #0000FF); -webkit-background-clip: text; color: transparent;">${name}</span>`,
            `<span style="font-family: 'Nothing You Could Do', cursive; color: #000; border: 1px solid #000; padding: 0 10px;">${name}</span>`,


            `<span style="font-family: 'Poppins', sans-serif; font-weight: 800; letter-spacing: 3px; color: #000; background-color: #FFD700; padding: 0 10px;">${name}</span>`,
            `<span style="font-family: 'Montserrat', sans-serif; font-weight: 900; text-transform: uppercase; color: #FFF; background-color: #000; padding: 5px 15px;">${name}</span>`,
            `<span style="font-family: 'Raleway', sans-serif; font-weight: 300; letter-spacing: 5px; color: #333;">${name}</span>`,
            `<span style="font-family: 'Oswald', sans-serif; text-transform: uppercase; color: #FF0000; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Lato', sans-serif; font-weight: 700; color: #FFF; text-shadow: 2px 2px 4px #000;">${name}</span>`,
            `<span style="font-family: 'Open Sans', sans-serif; font-weight: 600; color: #000; border-bottom: 2px solid #FF0000;">${name}</span>`,
            `<span style="font-family: 'Roboto Condensed', sans-serif; font-weight: 700; letter-spacing: 3px; color: #333;">${name}</span>`,
            `<span style="font-family: 'Source Sans Pro', sans-serif; font-weight: 900; color: #FFF; background-color: #0000FF; padding: 0 10px;">${name}</span>`,
            `<span style="font-family: 'Ubuntu', sans-serif; font-weight: 500; color: #FF4500; letter-spacing: 2px;">${name}</span>`,
            `<span style="font-family: 'Nunito', sans-serif; font-weight: 800; color: #000; text-shadow: 1px 1px 2px #FFD700;">${name}</span>`
        ];

        setStyledNames(formatted);
    };






    return (
        <div className="flex flex-col min-h-screen">
          <Header></Header>
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div variant="secondary" className="mb-4">
                                    <Sparkles className="w-3 h-3 mr-1" />
                                    AI-Powered Name Generation
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Generate <span className="text-purple-600">Stylish Names</span> in Seconds
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                                    Create unique, memorable names for your business, brand, product, or project. Our AI-powered generator
                                    crafts stylish names that stand out and make an impact.
                                </p>
                            </div>
                            <div className="w-full max-w-sm mx-auto space-y-6">
                                {/* Input + Button */}
                                <div className="space-y-2">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter keywords (e.g., tech, creative, modern)"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="flex-1 border border-gray-300 rounded px-3 py-2"
                                        />
                                        <button
                                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 flex items-center rounded"
                                            onClick={generateStylishNames}
                                        >
                                            Generate
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </button>

                                        {/* <button onClick={generateName}>Ai Generate</button>
                                        <pre>{results}</pre> */}
                                    </div>
                                    <p className="text-xs text-gray-500">No signup required • Generate unlimited names</p>
                                </div>

                                {/* Result List */}
                                {styledNames.length > 0 && (
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">Generated name</h2>
                                        <ul className="space-y-2">
                                            {styledNames.map((styledName, index) => (
                                                // <li 
                                                //     key={index} 
                                                //     className="bg-gray-100 p-2 rounded"
                                                //     dangerouslySetInnerHTML={{ __html: styledName }}
                                                // />


                                                <div key={index} dangerouslySetInnerHTML={{ __html: styledName }} />
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>
              <Feature></Feature>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                                    Ready to Find Your Perfect Name?
                                </h2>
                                <p className="max-w-[600px] text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of entrepreneurs, creators, and businesses who trust StyleGen for their naming needs.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <button className="w-full bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 text-lg font-semibold flex items-center justify-center rounded-md shadow">
                                    Start Generating Names
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </button>
                                <p className="text-xs text-purple-200">
                                    No credit card required • Start free today
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500">© 2024 CoolNameCreator. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="http://coderirfan.me" className="text-xs hover:underline underline-offset-4 text-gray-500">
                        Developer - (Coder Irfan)
                    </Link>
                    <Link href="/Privacy Policy" className="text-xs hover:underline underline-offset-4 text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-gray-500">
                        Contact
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

export default Main