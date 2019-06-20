class Shape {
    constructor(shapeName, a, b) {
        this.shapeName = shapeName;
        this.a = a;
        this.b = b;
    }
    getArea() {
        switch (this.shapeName) {
            case "rectangle":
                return Math.round(this.a * this.b)
                break;
            case "circle":
                return Math.round(this.a * this.a * Math.PI)
                break;
            case "square":
                return Math.round(Math.pow(this.a, 2))
                break;
            case "ellipse":
                return Math.round(this.a * this.b * Math.PI)
                break;
            default:
                return '"' + this.shapeName + '"' + " is not a Shape"
                break;
        }
    }
}

var app = new Vue({
    el: '#app',
    data: {
        step: 1,
        nextCount: 1,
        area: null,
        errors: [],
        inputs: {
            selectedShape: null,
            recLength: null,
            recWidth: null,
            cirRadius: null,
            squSide: null,
            xaxis: null,
            yaxis: null
        },
    },
    methods: {
        next: function() {
            this.errors = [];
            if (this.step == 1) {

                if (!this.inputs.selectedShape) {this.errors.push('*Please select a shape')}
                if(this.errors.length>0){return false}
                  
            }
            if (this.step == 2) {

                if (this.inputs.selectedShape == 'rectangle') {
                    if(!this.inputs.recLength){this.errors.push('*Length field required')}
                    if(!this.inputs.recWidth) {this.errors.push('*Width field required')}
                    if (this.errors.length>0){return false}

                    var rectangle = new Shape('rectangle', this.inputs.recLength, this.inputs.recWidth);
                    this.area = rectangle.getArea();
                }
                if (this.inputs.selectedShape == 'circle') {
                    if(!this.inputs.cirRadius){this.errors.push('*Radius field required')}
                    if (this.errors.length>0){return false}

                    var circle = new Shape('circle', this.inputs.cirRadius);
                    this.area = circle.getArea();
                }

                if (this.inputs.selectedShape == 'square') {

                    if (!this.inputs.squSide){this.errors.push('*Side field required')}
                    if (this.errors.length>0){return false}

                    var square = new Shape('square', this.inputs.squSide);
                    this.area = square.getArea();
                }

                if (this.inputs.selectedShape == 'ellipse') {

                    if (!this.inputs.xaxis) {this.errors.push('*x-asix field required')}
                    if (!this.inputs.yaxis) {this.errors.push('*y-axis field required')}
                    if (this.errors.length > 0) {return false}

                    var ellipse = new Shape('ellipse', this.inputs.xaxis, this.inputs.yaxis);
                    this.area = ellipse.getArea();
                }
            }

            this.nextCount++;
            this.step = this.nextCount;
        },
        prev: function() {
            this.errors = [];
            this.step = 1;
            this.nextCount = 1;

            this.inputs.selectedShape = null;
            this.inputs.recLength = null;
            this.inputs.recWidth = null;
            this.inputs.cirRadius = null;
            this.inputs.squSide = null;
            this.inputs.xaxis = null;
            this.inputs.yaxis = null;
        }
    }
})