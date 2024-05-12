type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty_(obj: Obj): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
    return false;
};