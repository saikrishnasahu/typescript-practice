"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.description = '';
        this.url = '';
        this.size = 0;
        this.forkCount = 0;
        if (repo === 0) {
            this.name = 'Name0';
            this.description = 'Description0';
            this.url = 'http://00';
            this.size = 100;
            this.forkCount = 5;
        }
        else if (repo === 1) {
            this.name = 'Name1';
            this.description = 'Description1';
            this.url = 'http://11';
            this.size = 101;
            this.forkCount = 55;
        }
        else {
            this.name = 'Name2';
            this.description = 'Description2';
            this.url = 'http://22';
            this.size = 102;
            this.forkCount = 35;
        }
    }
    return Repo;
}());
exports.Repo = Repo;
