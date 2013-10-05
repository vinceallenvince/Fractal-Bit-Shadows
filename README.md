Fractal Bit Shadows
======

Create fractal patterns using JavaScript. This library uses [BitShadowMachine](https://github.com/foldi/Bit-Shadow-Machine) to render all objects as CSS box shadows. All formulas are based on [Keith Peters](http://www.bit-101.com/blog/) book ['Playing With Chaos'](http://www.amazon.com/Playing-Chaos-Programming-Attractors-ebook/dp/B00FA9CX2Y/ref=sr_1_1?ie=UTF8&qid=1381004423&sr=8-1&keywords=playing+with+chaos).

Find examples in the 'public' folder.

Examples
======

To render the classic Sierpinski Gasket pattern, simply create a new chaos space with no options.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fractal Bit Shadows</title>
    <link rel="stylesheet" href="css/BitShadowMachine.min.css" />
    <script src='scripts/BitShadowMachine.min.js' type="text/javascript"></script>
    <script src='scripts/FractalBitShadows.min.js' type="text/javascript"></script>
  </head>
  <body>
    <script type="text/javascript">
      var chaos = new FractalBitShadows.Chaos();
      chaos.render();
    </script>
  </body>
</html>
```

For something more interesting, create an array of random angles to generate your iterations. You can also change the color mode
to 'hsla' (hue, saturation, lightness, opacity) for a monochromatic rendering.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Fractal Bit Shadows</title>
    <link rel="stylesheet" href="css/BitShadowMachine.min.css" />
    <script src='scripts/BitShadowMachine.min.js' type="text/javascript"></script>
    <script src='scripts/FractalBitShadows.min.js' type="text/javascript"></script>
  </head>
  <body>
    <script type="text/javascript">

      var angles = [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      ];

      var chaos = new FractalBitShadows.Chaos({
        depth: 9,
        colorMode: 'hsla',
        getAngles: function() {
          return angles;
        }
      });
      chaos.render();
    </script>
  </body>
</html>
```

For more variation, add create a color palette and randomly set the distance of your iterations.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Fractal Bit Shadows</title>
    <link rel="stylesheet" href="css/BitShadowMachine.min.css" />
    <script src='scripts/BitShadowMachine.min.js' type="text/javascript"></script>
    <script src='scripts/FractalBitShadows.min.js' type="text/javascript"></script>
  </head>
  <body>
    <script type="text/javascript">

      var palette = new BitShadowMachine.ColorPalette();
      palette.addColor({
        min: 12,
        max: 24,
        startColor: [248, 215, 173],
        endColor: [230, 186, 131]
      }).addColor({
        min: 12,
        max: 24,
        startColor: [244, 192, 157],
        endColor: [218, 149, 103]
      }).addColor({
        min: 12,
        max: 24,
        startColor: [255, 243, 216],
        endColor: [230, 210, 167]
      }).addColor({
        min: 12,
        max: 24,
        startColor: [250, 219, 142],
        endColor: [222, 182, 84]
      }).addColor({
        min: 12,
        max: 24,
        startColor: [252, 221, 205],
        endColor: [219, 164, 134]
      });

      var offset = 0.3;

      var angles = [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      ];

      var chaos = new FractalBitShadows.Chaos({
        depth: 9,
        getAngles: function() {
          return angles;
        },
        blur: 0,
        colorMode: 'hsla',
        getDist: function(pt) {
          return pt.scale * Math.random() * 6 + 1;
        },
        palette: palette
      });
      chaos.render();
    </script>
  </body>
</html>
```

For a list of options, check out the 'Chaos' class in the documentation in the 'docs' folder.

Building this project
======

This project uses [Grunt](http://gruntjs.com). To build the project first install the node modules.

```
npm install
```

Next, run grunt.

```
grunt
```

A pre-commit hook is defined in /pre-commit that runs jshint. To use the hook, run the following:

```
ln -s ../../pre-commit .git/hooks/pre-commit
```

A post-commit hook is defined in /post-commit that runs the Plato complexity analysis tools. To use the hook, run the following:

```
ln -s ../../post-commit .git/hooks/post-commit
```
