
### isEmpty

判断字符串是否为空

```shell
import { isEmpty } from '@/utils/verify.js';

let strIsblank = isEmpty('  Hello '); // false
```

### isPhone | isMobile | isEmail

- 是否为手机号码
- 是否为电话
- 是否为邮箱号

```shell
import { isPhone, isMobile, isEmail } from '@/utils/verify.js';
```


### isNumber | isPositiveInteger | isInteger | isDouble

- isNumber 判断数值类型，包括整数和浮点数
- isPositiveInteger 判断是否为正整数(只能输入数字[0-9])
- 匹配integer
- 匹配double或float

```shell
import { isNumber, isPositiveInteger, isInteger, isDouble } from '@/utils/verify.js';
```


# uView

uView内置了一些校验规则，如是否手机号，邮箱号，URL等
这些规则方法，挂载在$u.test下面，如验证是否手机号：$u.test.mobile('13888889999')，如果验证通过，返回true，否则返回false

### 是否验证码 

校验是否验证码(要求为数字)，返回true或者false。


```shell
value <String> 验证码字符串
len <Number> 验证码长度，默认为6

console.log(this.$u.test.code('4567', 4));
```


[https://v1.uviewui.com/js/test.html](https://v1.uviewui.com/js/test.html)