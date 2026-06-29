# MIARMA·MED — Training Center Website

Landing page for the MIARMA·MED training center (obstetrics / prenatal ultrasound education),
styled in the brand's gold + baby-pink palette.

## Structure

```
index.html      # the page
styles.css      # gold / blush / cream theme
script.js       # scroll reveals, animated stat counters, mobile menu, contact form
assets/
  logo.svg      # gold emblem (pregnant-woman silhouette + sound waves)
```

## Run locally

It's a static site — no build step. Either open `index.html` directly, or serve it:

```bash
python3 -m http.server 5577
# then open http://localhost:5577
```

## Sections

Sticky header + nav → hero → stats bar → about → courses (6 cards) →
why-us → instructors → testimonial → enrollment form + contact → footer.

## TODO / to customize

- [ ] Replace `assets/logo.svg` with the official logo (`assets/logo.png`)
- [ ] Real course names, durations, prices
- [ ] Real instructor names & photos
- [ ] Correct phone / email / address (currently placeholders)
- [ ] Wire the enrollment form to a real destination (email / Telegram / sheet)

## Language

Armenian. Field defaults to obstetrics / prenatal ultrasound.
