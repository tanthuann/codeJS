/**
 * 1. Require module `path` (built-in sẵn trong node)
 * 2. Sử dụng method extname để tìm extension (đuôi) của một đường dẫn (path) tới file nào đó.
 * Tra cứu: ://nodejs.org/dist/latest-v8.x/docs/api/path.htmhttpsl#path_path_extname_path
 */

var path = require('path');

var test = path.extname('./text.txt');

console.log(test);
