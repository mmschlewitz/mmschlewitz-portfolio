# Social Media Preview Image

This directory contains the Open Graph (OG) image template and instructions for generating the final preview image.

## Files

- `og-image-generator.html` - HTML template that displays the OG image design
- `og-image.png` - The final 1200x630px image used for social media previews (to be created)

## How to Create the OG Image

The `og-image-generator.html` file is designed to be exactly 1200x630px (the optimal size for Open Graph images). To create the final `og-image.png` file, you need to take a screenshot of this HTML file.

### Method 1: Using Browser DevTools (Recommended)

1. Open `og-image-generator.html` in Chrome or Edge
2. Open DevTools (F12 or right-click > Inspect)
3. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac) to open the Command Palette
4. Type "screenshot" and select **"Capture node screenshot"**
5. Click on the `.og-image` div element in the Elements panel
6. The screenshot will be saved to your Downloads folder
7. Rename it to `og-image.png` and move it to this directory (`assets/images/`)

### Method 2: Using Browser Screenshot Extension

1. Install a screenshot extension like "GoFullPage" or "Awesome Screenshot"
2. Open `og-image-generator.html` in your browser
3. Use the extension to capture the visible area
4. Crop if needed to ensure it's exactly 1200x630px
5. Save as `og-image.png` in this directory

### Method 3: Using Snipping Tool (Windows)

1. Open `og-image-generator.html` in your browser
2. Set your browser zoom to 100%
3. Open Snipping Tool or Snip & Sketch
4. Capture the OG image area
5. Save as `og-image.png` in this directory
6. Verify dimensions are 1200x630px (resize if needed)

### Method 4: Using Screenshot Tool (Mac)

1. Open `og-image-generator.html` in your browser
2. Press `Cmd+Shift+4`
3. Drag to select the OG image area
4. The screenshot will be saved to your Desktop
5. Rename to `og-image.png` and move to this directory
6. Verify dimensions are 1200x630px

## Verifying the Image

After creating `og-image.png`, verify:

- Dimensions are exactly 1200x630 pixels
- File size is reasonable (typically 50-200 KB for a PNG)
- Text is crisp and readable
- Colors match the design (navy to burgundy gradient background, emerald green accents)

## Using the OG Image

Once created, reference the image in your HTML `<head>` section:

```html
<meta property="og:image" content="https://your-domain.com/assets/images/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://your-domain.com/assets/images/og-image.png">
```

## Design Specifications

- **Dimensions**: 1200x630px
- **Background**: Linear gradient from navy (#003049) to burgundy (#780000)
- **Primary Color**: Emerald Green (#00A878)
- **Text Color**: White (#FFFFFF)
- **Font**: Segoe UI (or system sans-serif)
- **Key Stat**: 94% Support Reduction

## Updating the Image

To update the OG image:

1. Edit `og-image-generator.html` with your changes
2. Follow the screenshot instructions above to create a new `og-image.png`
3. Replace the existing file
4. Clear your browser cache and test the new image with [Open Graph Debugger](https://developers.facebook.com/tools/debug/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator)
