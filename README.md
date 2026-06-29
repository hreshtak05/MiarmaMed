# MIARMA·MED — Training Center Website

Landing page for the MIARMA·MED training center (obstetrics / prenatal ultrasound education),
styled in the brand's gold + baby-pink palette.

## Structure

```
index.html      # the page
styles.css      # gold / blush / cream theme
script.js       # scroll reveals, mobile menu, contact form
assets/
  logo.png      # full official logo (emblem + wordmark)
  emblem.png    # circular emblem only (used in header / hero / footer)
  marianna.png  # instructor photo
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

- [x] Official logo wired in (`logo.png` / `emblem.png`)
- [x] Real instructor: Marianna Adamyan (photo + bio)
- [x] Email + Facebook + Instagram links
- [ ] Real course names, durations, prices
- [ ] Confirm phone number (`+374 94 66 06 06` is still a placeholder)
- [ ] Wire the enrollment form to a real destination (email / Telegram / sheet)

## Language

Armenian. Field defaults to obstetrics / prenatal ultrasound.
