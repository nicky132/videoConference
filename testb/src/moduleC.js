export * from './moduleA';

// 模块A - 子模块1
export const foo = 'Foo';

// 模块A - 子模块2
export const bar = 'Bar';

// 模块A - index.js（命名空间）
export * as SubModule from './subModule';

// 模块A - 功能1
export function func1() {
    // ...
}

// 模块A - 功能2
export function func2() {
    // ...
}

// 模块A - 统一导出接口
export * from './moduleA';

// 模块A - 版本1
export function func1() {
    // ...
}

// 模块A - 版本2
export function func1() {
    // ...
}

// 模块A - 版本控制
const version = 2; // 根据具体条件选择版本

if (version === 1) {
    export * from './moduleA_v1';
} else if (version === 2) {
    export * from './moduleA_v2';
}

// 第三方库 - 模块1
export function func1() {
    // ...
}

// 第三方库 - 模块2
export function func2() {
    // ...
}

// 重新导出所需的功能
export { func1 } from 'third-party-library/module1';
export { func2 } from 'third-party-library/module2';
