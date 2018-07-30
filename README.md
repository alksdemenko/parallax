# Parallax

### Usage
```javascript
   new Parallax({
          elementsOffset : 150,
          screenDivider: 2.5,
          parallaxSection : '.parallax',
          elementsToMove : '.percent-block',
   });
```

### Use attribute "data-speed" to control parallax speed. HTML structure example:

        <div class="parallax">
            <div data-speed="4" class="percent-block">
                ...content
            </div>
            <div data-speed="5" class="percent-block">
                ...content
            </div>
            <div data-speed="6" class="percent-block">
                ...content
            </div>
        </div>
