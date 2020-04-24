"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpyObject {
    constructor(type) {
        if (type) {
            Object.keys(type.prototype).forEach(prop => {
                let m = null;
                try {
                    m = type.prototype[prop];
                }
                catch (e) {
                    // As we are creating spys for abstract classes,
                    // these classes might have getters that throw when they are accessed.
                    // As we are only auto creating spys for methods, this
                    // should not matter.
                }
                if (typeof m === 'function') {
                    this.spy(prop);
                }
            });
        }
    }
    spy(name) {
        if (!this[name]) {
            this[name] = this.createGuinnessCompatibleSpy(name);
        }
        return this[name];
    }
    createGuinnessCompatibleSpy(name) {
        const newSpy = jasmine.createSpy(name);
        newSpy.andCallFake = newSpy.and.callFake;
        newSpy.andReturn = newSpy.and.returnValue;
        newSpy.reset = newSpy.calls.reset;
        // revisit return null here (previously needed for rtts_assert).
        newSpy.and.returnValue(null);
        return newSpy;
    }
}
exports.SpyObject = SpyObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvaGVscGVycy9zcHlvYmplY3QudHMiLCJtYXBwaW5ncyI6Ijs7QUFXQSxNQUFhLFNBQVM7SUFDcEIsWUFBWSxJQUFVO1FBQ3BCLElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ2IsSUFBSTtvQkFDRixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsZ0RBQWdEO29CQUNoRCxzRUFBc0U7b0JBQ3RFLHNEQUFzRDtvQkFDdEQscUJBQXFCO2lCQUN0QjtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU8sMkJBQTJCLENBQUMsSUFBWTtRQUM5QyxNQUFNLE1BQU0sR0FBeUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQVEsQ0FBQztRQUNwRSxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBZSxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFrQixDQUFDO1FBQ2pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFZLENBQUM7UUFDekMsZ0VBQWdFO1FBQ2hFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQXBDRCw4QkFvQ0MiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvaGVscGVycy9zcHlvYmplY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBHdWluZXNzQ29tcGF0aWJsZVNweSBleHRlbmRzIGphc21pbmUuU3B5IHtcbiAgLyoqIEJ5IGNoYWluaW5nIHRoZSBzcHkgd2l0aCBhbmQucmV0dXJuVmFsdWUsIGFsbCBjYWxscyB0byB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gYSBzcGVjaWZpY1xuICAgKiB2YWx1ZS4gKi9cbiAgYW5kUmV0dXJuKHZhbDogYW55KTogR3VpbmVzc0NvbXBhdGlibGVTcHk7XG4gIC8qKiBCeSBjaGFpbmluZyB0aGUgc3B5IHdpdGggYW5kLmNhbGxGYWtlLCBhbGwgY2FsbHMgdG8gdGhlIHNweSB3aWxsIGRlbGVnYXRlIHRvIHRoZSBzdXBwbGllZFxuICAgKiBmdW5jdGlvbi4gKi9cbiAgYW5kQ2FsbEZha2UoZm46IEZ1bmN0aW9uKTogR3VpbmVzc0NvbXBhdGlibGVTcHk7XG4gIC8qKiByZW1vdmVzIGFsbCByZWNvcmRlZCBjYWxscyAqL1xuICByZXNldCgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgU3B5T2JqZWN0IHtcbiAgY29uc3RydWN0b3IodHlwZT86IGFueSkge1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBPYmplY3Qua2V5cyh0eXBlLnByb3RvdHlwZSkuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgbGV0IG0gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG0gPSB0eXBlLnByb3RvdHlwZVtwcm9wXTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIEFzIHdlIGFyZSBjcmVhdGluZyBzcHlzIGZvciBhYnN0cmFjdCBjbGFzc2VzLFxuICAgICAgICAgIC8vIHRoZXNlIGNsYXNzZXMgbWlnaHQgaGF2ZSBnZXR0ZXJzIHRoYXQgdGhyb3cgd2hlbiB0aGV5IGFyZSBhY2Nlc3NlZC5cbiAgICAgICAgICAvLyBBcyB3ZSBhcmUgb25seSBhdXRvIGNyZWF0aW5nIHNweXMgZm9yIG1ldGhvZHMsIHRoaXNcbiAgICAgICAgICAvLyBzaG91bGQgbm90IG1hdHRlci5cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnNweShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3B5KG5hbWU6IHN0cmluZyk6IEd1aW5lc3NDb21wYXRpYmxlU3B5IHtcbiAgICBpZiAoIXRoaXNbbmFtZV0pIHtcbiAgICAgIHRoaXNbbmFtZV0gPSB0aGlzLmNyZWF0ZUd1aW5uZXNzQ29tcGF0aWJsZVNweShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUd1aW5uZXNzQ29tcGF0aWJsZVNweShuYW1lOiBzdHJpbmcpOiBHdWluZXNzQ29tcGF0aWJsZVNweSB7XG4gICAgY29uc3QgbmV3U3B5OiBHdWluZXNzQ29tcGF0aWJsZVNweSA9IGphc21pbmUuY3JlYXRlU3B5KG5hbWUpIGFzIGFueTtcbiAgICBuZXdTcHkuYW5kQ2FsbEZha2UgPSBuZXdTcHkuYW5kLmNhbGxGYWtlIGFzIGFueTtcbiAgICBuZXdTcHkuYW5kUmV0dXJuID0gbmV3U3B5LmFuZC5yZXR1cm5WYWx1ZSBhcyBhbnk7XG4gICAgbmV3U3B5LnJlc2V0ID0gbmV3U3B5LmNhbGxzLnJlc2V0IGFzIGFueTtcbiAgICAvLyByZXZpc2l0IHJldHVybiBudWxsIGhlcmUgKHByZXZpb3VzbHkgbmVlZGVkIGZvciBydHRzX2Fzc2VydCkuXG4gICAgbmV3U3B5LmFuZC5yZXR1cm5WYWx1ZShudWxsKTtcbiAgICByZXR1cm4gbmV3U3B5O1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=