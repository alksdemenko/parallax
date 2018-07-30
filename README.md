# Parallax

### Usage
```javascript
    var b = 0;

    function test(){

    }
```

    ```javascript
    new Parallax({
        elementsOffset : 150,
        screenDivider: 2.5,
        parallaxSection : '.parallax',
        elementsToMove : '.percent-block',
    });
    ```

    use attribute "data-speed" to control parallax speed. Example:

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
