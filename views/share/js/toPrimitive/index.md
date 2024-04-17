<!--
 * @Descripttion:
 * @Author: jiahui.qin
 * @LastEditors: jiahui.qin
 * @LastEditTime: 2024-04-16 15:36:07
-->

# toPrimitive

```js
class CalcObj {
  constructor(value) {
    this.value = value;
  }
  [Symbol.toPrimitive] = function (hint) {
    // 自定义对象运算的值
    // hint number default string
    if (hint === "number" || hint === "default") {
      return this.value;
    }
    return this;
  };
  get [Symbol.toStringTag]() {
    // 自定义对象类型
    return "Calc";
  }
}

function createCalcObject(value) {
  return new CalcObj(value);
}

const a = createCalcObject(20);
const b = createCalcObject(30);

console.log(a + b); // 50
console.log(Object.prototype.toString.call(a)); // [object Calc]
```
