"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName) {
        this.login = '';
        this.fullName = '';
        this.repoCount = 0;
        this.followerCount = 0;
        this.login = userName;
        this.fullName = 'Koushik Kothagal';
        this.repoCount = 30;
        this.followerCount = 230;
    }
    return User;
}());
exports.User = User;
