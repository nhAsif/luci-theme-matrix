
> Theme Style: **Cyberpunk • CRT Terminal • Neon • Hacker Console**

---

# 🎨 Core Brand Colors

| Token | Hex | RGB | Usage |
|--------|-----|-----|------|
| Background | `#020B1A` | `2,11,26` | Main page background |
| Primary | `#00EAFF` | `0,234,255` | Text, icons, borders |
| Primary Bright | `#00F2FF` | `0,242,255` | Hover, animations |
| Secondary | `#00FF41` | `0,255,65` | CTA button, success |
| Danger | `#FF005D` | `255,0,93` | Errors |
| Black | `#000000` | `0,0,0` | Button background |
| White | `#FFFFFF` | `255,255,255` | Fallback text |

---

# 🌌 Background Palette

| Name | Hex |
|------|-----|
| Midnight | `#020B1A` |
| Deep Navy | `#071726` |
| Surface | `#0D2133` |
| Glass Overlay | `rgba(0,10,0,0.15)` |

---

# 💡 Neon Colors

| Name | Hex |
|------|-----|
| Neon Cyan | `#00EAFF` |
| Electric Cyan | `#00F2FF` |
| Matrix Green | `#00FF41` |
| Hot Pink | `#FF005D` |

---

# ✨ Glow Colors

## Cyan Glow

```css
rgba(0,234,255,.70)
```

## Soft Cyan Glow

```css
rgba(0,234,255,.35)
```

## Scanline

```css
rgba(0,234,255,.10)
```

## Vignette

```css
rgba(0,0,0,.60)
```

---

# 🎛 CSS Variables

```css
:root{
    --background: #020B1A;
    --surface: #071726;
    --surface-light: #0D2133;

    --primary: #00EAFF;
    --primary-hover: #00F2FF;

    --secondary: #00FF41;

    --danger: #FF005D;

    --text: #00EAFF;
    --text-muted: #79EFFF;

    --border: rgba(0,234,255,.45);

    --glow: rgba(0,234,255,.70);
    --shadow: rgba(0,234,255,.35);

    --scanline: rgba(0,234,255,.10);
    --overlay: rgba(0,10,0,.15);

    --black: #000000;
    --white: #FFFFFF;
}
```

---

# 🌈 Recommended Gradients

## Primary

```css
linear-gradient(
135deg,
#00FF41 0%,
#00EAFF 100%
)
```

---

## Background

```css
radial-gradient(
circle at top,
#071726 0%,
#020B1A 70%
)
```

---

## Glow

```css
box-shadow:
0 0 8px rgba(0,234,255,.35),
0 0 20px rgba(0,234,255,.45),
0 0 40px rgba(0,234,255,.25);
```

---

# 🎯 Semantic Colors

```text
Primary        #00EAFF
Secondary      #00FF41
Accent         #00F2FF
Success        #00FF41
Warning        #FFC857
Danger         #FF005D
Info           #00EAFF

Background     #020B1A
Surface        #071726
Card           #0D2133

Text           #00EAFF
Muted Text     #79EFFF

Border         rgba(0,234,255,.45)
Glow           rgba(0,234,255,.70)
Overlay        rgba(0,10,0,.15)
```

---

# 🎨 Tailwind Config

```js
colors: {
  background: "#020B1A",
  surface: "#071726",
  card: "#0D2133",

  primary: "#00EAFF",
  secondary: "#00FF41",
  accent: "#00F2FF",

  success: "#00FF41",
  danger: "#FF005D",

  text: "#00EAFF",
  muted: "#79EFFF",

  black: "#000000",
  white: "#FFFFFF",
}
```

---

# 🖥 Theme Keywords

- CRT Terminal
- Hacker Console
- Cyberpunk
- Neon Cyan
- Matrix Green
- Retro Computer
- Synthwave Terminal
- Dark Navy
- Glass Neon
- Scanline Effect
- Glowing UI
```