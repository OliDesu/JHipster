"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id;
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.activated = activated;
        this.langKey = langKey;
        this.authorities = authorities;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
        this.password = password;
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2NvcmUvdXNlci91c2VyLm1vZGVsLnRzIiwibWFwcGluZ3MiOiI7O0FBZ0JBLE1BQWEsSUFBSTtJQUNmLFlBQ1MsRUFBUSxFQUNSLEtBQWMsRUFDZCxTQUFrQixFQUNsQixRQUFpQixFQUNqQixLQUFjLEVBQ2QsU0FBbUIsRUFDbkIsT0FBZ0IsRUFDaEIsV0FBc0IsRUFDdEIsU0FBa0IsRUFDbEIsV0FBa0IsRUFDbEIsY0FBdUIsRUFDdkIsZ0JBQXVCLEVBQ3ZCLFFBQWlCO1FBWmpCLE9BQUUsR0FBRixFQUFFLENBQU07UUFDUixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBTztRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQU87UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBUztJQUN2QixDQUFDO0NBQ0w7QUFoQkQsb0JBZ0JDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9jb3JlL3VzZXIvdXNlci5tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElVc2VyIHtcbiAgaWQ/OiBhbnk7XG4gIGxvZ2luPzogc3RyaW5nO1xuICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gIGxhc3ROYW1lPzogc3RyaW5nO1xuICBlbWFpbD86IHN0cmluZztcbiAgYWN0aXZhdGVkPzogYm9vbGVhbjtcbiAgbGFuZ0tleT86IHN0cmluZztcbiAgYXV0aG9yaXRpZXM/OiBzdHJpbmdbXTtcbiAgY3JlYXRlZEJ5Pzogc3RyaW5nO1xuICBjcmVhdGVkRGF0ZT86IERhdGU7XG4gIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nO1xuICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZTtcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyIGltcGxlbWVudHMgSVVzZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ/OiBhbnksXG4gICAgcHVibGljIGxvZ2luPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmaXJzdE5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGxhc3ROYW1lPzogc3RyaW5nLFxuICAgIHB1YmxpYyBlbWFpbD86IHN0cmluZyxcbiAgICBwdWJsaWMgYWN0aXZhdGVkPzogYm9vbGVhbixcbiAgICBwdWJsaWMgbGFuZ0tleT86IHN0cmluZyxcbiAgICBwdWJsaWMgYXV0aG9yaXRpZXM/OiBzdHJpbmdbXSxcbiAgICBwdWJsaWMgY3JlYXRlZEJ5Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBjcmVhdGVkRGF0ZT86IERhdGUsXG4gICAgcHVibGljIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZSxcbiAgICBwdWJsaWMgcGFzc3dvcmQ/OiBzdHJpbmdcbiAgKSB7fVxufVxuIl0sInZlcnNpb24iOjN9