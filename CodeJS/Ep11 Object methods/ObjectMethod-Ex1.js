/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
  width: 3,
  height: 4,
  getWidth: function() {
    return this.width;
  },
  getHeight: function() {
    return this.height;
  },
  getArea: function() {
    return this.width * this.height;
  }
}

console.log(rectangle.getWidth());
console.log(rectangle.getArea());
console.log(rectangle.getHeight());

