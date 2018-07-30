export default class Parallax {

    /**
     *
     * @param options(Object)
     */
    constructor(options) {
        this.parallaxSection = $(options.parallaxSection);
        this.elementsToMove = $(options.elementsToMove);
        this.speedAttrName = 'data-speed';
        this.mobileWidth = options.breakpoint || 1200;
        this.elementsOffset = options.elementsOffset || 0;
        this.screenDivider = options.screenDivider || 2.5;
        this.windowHeight = $(window).innerHeight();

        this.scrollEvent = this._scrollEvent.bind(this);
        this.parallaxInit = this._parallaxInit.bind(this);

        this._init();
    }

    _scrollEvent() {
        const scrollTop = $(window).scrollTop();
        const sectionOffsetTop = this.parallaxSection.offset().top;
        const sectionIsVisible = scrollTop + this.windowHeight / this.screenDivider > sectionOffsetTop;

        if (sectionIsVisible) {
            this.elementsToMove.each((index, elem) => {
                const elemSpeed = $(elem).attr(this.speedAttrName) ? Number($(elem).attr(this.speedAttrName)) : 8;
                let transformPosition;

                if(this.elementsOffset !== 0 ){
                    transformPosition = this.elementsOffset + -((scrollTop + this.windowHeight / this.screenDivider - sectionOffsetTop) / 10 * elemSpeed);
                }
                else{
                    transformPosition = -((scrollTop / this.screenDivider) / 10 * elemSpeed)
                }

                $(elem).css({
                    transform: `translateY(${transformPosition}px)`
                })
            })
        }
    }

    _parallaxInit() {
        const mobile = $(window).innerWidth() < this.mobileWidth;

        if (mobile) {
            $(window).on('scroll', function () {
                return false
            });
            $(window).off('scroll');
        } else {
            this.elementsToMove.each((index, elem) => {
                $(elem).css({
                    transform: `translateY(${this.elementsOffset}px)`
                })
            });
            $(window).on('scroll', this.scrollEvent);
        }
    }

    _init() {
        $(window).on('load resize orientationchange', this.parallaxInit);
    }
}