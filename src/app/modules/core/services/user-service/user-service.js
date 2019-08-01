"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_parent_service_1 = require("../../services/http-parent/http-parent.service");
require("rxjs/add/operator/map");
const http_1 = require("@angular/common/http");
let UserService = class UserService {
    constructor(httpParent) {
        this.httpParent = httpParent;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        this.restoreUserFromLocalStorage();
    }
    registerUser(user) {
        if (core_1.isDevMode()) {
            return this.httpParent.postRequest("users/register", user, this.headers).map(res => res);
        }
        else {
            return this.httpParent.postRequest("users/register", user, this.headers).map(res => res);
        }
    }
    storeUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    }
    restoreUserFromLocalStorage() {
        let storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            this.user = storedUser;
        }
    }
    getUserProfile(credentials) {
        let authToken = this.httpParent.getToken();
        let headers = new http_1.HttpHeaders({ 'Authorization': authToken });
        let body = {
            username: credentials.username,
            password: credentials.password
        };
        return this.httpParent.getRequest("users/profile", headers).map(res => res.user);
    }
    getUserByPostId(postId) {
        return this.httpParent.getRequest("users/byPostId/" + postId).map(res => res.user);
    }
    setProfileImageUrl(imageUrl) {
        let authToken = this.httpParent.getToken();
        let headers = new http_1.HttpHeaders({ 'Authorization': authToken });
        let body = {
            "profileImageUrl": imageUrl
        };
        return this.httpParent.postRequest("users/uploadProfileImageUrl", body, headers);
    }
    uploadProfileImage(file) {
        let authToken = this.httpParent.getToken();
        let headers = new http_1.HttpHeaders({ 'Authorization': authToken });
        let formData = new FormData();
        formData.append('userFile', file, file.name);
        return this.httpParent.postRequest("users/uploadImage", formData, headers);
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_parent_service_1.HttpParentService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map