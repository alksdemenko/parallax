export default class Parallax {

    /**
     *
     * @param options(Object)
     */
    constructor(options) {
        this.parallaxSection = document.querySelector(options.parallaxSection);
        this.elementsToMove = [...document.querySelectorAll(options.elementsToMove)];
        this.speedAttrName = "data-speed";
        this.mobileWidth = options.breakpoint || 1200;
        this.elementsOffset = options.elementsOffset || 0;
        this.screenDivider = options.screenDivider || 2.5;
        this.window = window;
        this.windowHeight = this.window.innerHeight;

        this.scrollEvent = this._scrollEvent.bind(this);
        this.parallaxInit = this._parallaxInit.bind(this);

        this._init();
    }

    _scrollEvent() {
        const scrollTop = this.window.pageYOffset;
        const sectionOffsetTop = this.parallaxSection.offsetTop;
        const sectionIsVisible = scrollTop + this.windowHeight / this.screenDivider > sectionOffsetTop;

        if (sectionIsVisible) {
            this.elementsToMove.forEach(elem => {

                const elemSpeed = elem.getAttribute(this.speedAttrName) ? Number(elem.getAttribute(this.speedAttrName)) : 8;
                let transformPosition;

                if(this.elementsOffset !== 0 ){
                    transformPosition = this.elementsOffset + -((scrollTop + this.windowHeight / this.screenDivider - sectionOffsetTop) / 10 * elemSpeed);
                }
                else{
                    transformPosition = -((scrollTop / this.screenDivider) / 10 * elemSpeed);
                }

                elem.style.transform = `translateY(${transformPosition}px)`;
            });
        }
    }

    _parallaxInit() {
        const mobile = document.documentElement.clientWidth < this.mobileWidth;

        if (mobile) {
            this.window.addEventListener("scroll", function () {
                return false;
            });
            this.window.removeEventListener("scroll", this.scrollEvent);
        } else {
            this.elementsToMove.forEach(elem => {
                elem.style.transform = `translateY(${this.elementsOffset}px)`;
            });
            this.window.addEventListener("scroll", this.scrollEvent);
        }
    }

    addEventsListener(element, eventsNames, listener) {
        for (
            let  i = 0,
                events = eventsNames.split(" "),
                length = events.length;
            i < length;
            i++
        ) {
            element.addEventListener(events[i], listener, false);
        }
    }
    _init() {
        this.addEventsListener(this.window, "load resize orientationchange", this.parallaxInit);
    }
}