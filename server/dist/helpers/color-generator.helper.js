"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = void 0;
const getColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
exports.getColor = getColor;
//# sourceMappingURL=color-generator.helper.js.map