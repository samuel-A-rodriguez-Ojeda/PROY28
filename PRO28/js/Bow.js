class Bow
{
    constructor(x, y, width, heihgt, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heihgt = heihgt;
        this.angle = angle;
    }
    display() {
        fill("black");
        Push();
        translate(this.x, this.y);
    }
}