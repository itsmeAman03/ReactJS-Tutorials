"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var directoryPath = "component"; // Current directory
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        console.error('Error reading the directory:', err);
        return;
    }
    files.forEach(function (file) {
        var filePath = path.join(directoryPath, file);
        var fileExtension = path.extname(file);
        // Skip directories and files that already have a .ts extension
        if (fs.lstatSync(filePath).isFile() && fileExtension !== '.ts') {
            var newFilePath_1 = path.join(directoryPath, path.basename(file, fileExtension) + '.ts');
            fs.rename(filePath, newFilePath_1, function (renameErr) {
                if (renameErr) {
                    console.error("Error renaming file ".concat(file, ":"), renameErr);
                }
                else {
                    console.log("Renamed: ".concat(file, " -> ").concat(path.basename(newFilePath_1)));
                }
            });
        }
    });
});
