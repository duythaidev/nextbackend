"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnResponse = void 0;
const returnResponse = (res, status, EM, EC, DT) => {
    if (DT) {
        return res.status(status).json({
            EM,
            EC,
            DT
        });
    }
    return res.status(status).json({
        EM,
        EC,
    });
};
exports.returnResponse = returnResponse;
//# sourceMappingURL=response.js.map