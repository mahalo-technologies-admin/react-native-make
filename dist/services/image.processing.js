"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkImageIsSquare = exports.generateResizedAssetsWithoutAlpha = exports.generateResizedAssets = void 0;
const path_1 = require("path");
const sharp_1 = __importDefault(require("sharp"));
const file_processing_1 = require("./file.processing");
const generateResizedAssets = async (sourcePath, destinationPath, width, height = width, options = {
    fit: 'contain',
}) => {
    (0, file_processing_1.createDirectoryIfNotExists)(destinationPath);
    return (0, sharp_1.default)((0, path_1.normalize)(sourcePath))
        .resize(width, height, options)
        .toFile(destinationPath);
};
exports.generateResizedAssets = generateResizedAssets;
const generateResizedAssetsWithoutAlpha = async (sourcePath, destinationPath, width, height = width, options = {
    fit: 'contain',
}) => {
    (0, file_processing_1.createDirectoryIfNotExists)(destinationPath);
    return (0, sharp_1.default)((0, path_1.normalize)(sourcePath))
        .resize(width, height, options)
        .removeAlpha()
        .toFile(destinationPath);
};
exports.generateResizedAssetsWithoutAlpha = generateResizedAssetsWithoutAlpha;
const checkImageIsSquare = async (sourcePath) => {
    const { width, height } = await (0, sharp_1.default)((0, path_1.normalize)(sourcePath)).metadata();
    if (width !== height) {
        throw new Error('Image is not squared');
    }
};
exports.checkImageIsSquare = checkImageIsSquare;
