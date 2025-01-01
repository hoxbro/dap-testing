# Set up

## Typescript

### Installation

```bash
npm ci
tsc
```

### Launch

Run `Launch: File` inside nvim either `inspect.js` or `dist/inspect.js`.

### Inspect

Run this in other terminal.

```bash
node --inpsect inspect.js      # Javascript
node --inspect dist/inspect.js # Typescript
```

Run `Attach: Process (server)` inside nvim.

### CHROME

Run this in other terminal.

```bash
python -m http.server
```

Run `Launch: Chrome (client)` inside nvim.

## Rust
