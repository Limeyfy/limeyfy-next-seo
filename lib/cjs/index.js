"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSeo = exports.CheckSeo = exports.BetterHead = void 0;
var BetterHead_1 = require("./BetterHead");
Object.defineProperty(exports, "BetterHead", { enumerable: true, get: function () { return BetterHead_1.BetterHead; } });
var CheckSeo_1 = require("./CheckSeo");
Object.defineProperty(exports, "CheckSeo", { enumerable: true, get: function () { return CheckSeo_1.CheckSeo; } });
var useSeo_1 = __importDefault(require("./useSeo"));
exports.useSeo = useSeo_1.default;
