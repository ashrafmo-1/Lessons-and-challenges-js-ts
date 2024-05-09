type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength_(...args: JSONValue[]): number {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */