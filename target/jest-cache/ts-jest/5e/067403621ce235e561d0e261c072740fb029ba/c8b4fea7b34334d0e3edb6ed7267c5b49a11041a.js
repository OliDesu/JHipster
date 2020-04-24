"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/common/http");
exports.createRequestOption = (req) => {
    let options = new http_1.HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91dGlsL3JlcXVlc3QtdXRpbC50cyIsIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFrRDtBQWNyQyxRQUFBLG1CQUFtQixHQUFHLENBQUMsR0FBUyxFQUFjLEVBQUU7SUFDM0QsSUFBSSxPQUFPLEdBQWUsSUFBSSxpQkFBVSxFQUFFLENBQUM7SUFFM0MsSUFBSSxHQUFHLEVBQUU7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7Z0JBQ2xCLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ1osR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3V0aWwvcmVxdWVzdC11dGlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbiB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBzb3J0OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2gge1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFdpdGhQYWdpbmF0aW9uIGV4dGVuZHMgU2VhcmNoLCBQYWdpbmF0aW9uIHt9XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXF1ZXN0T3B0aW9uID0gKHJlcT86IGFueSk6IEh0dHBQYXJhbXMgPT4ge1xuICBsZXQgb3B0aW9uczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG5cbiAgaWYgKHJlcSkge1xuICAgIE9iamVjdC5rZXlzKHJlcSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSAhPT0gJ3NvcnQnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLnNldChrZXksIHJlcVtrZXldKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChyZXEuc29ydCkge1xuICAgICAgcmVxLnNvcnQuZm9yRWFjaCgodmFsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuYXBwZW5kKCdzb3J0JywgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufTtcbiJdLCJ2ZXJzaW9uIjozfQ==