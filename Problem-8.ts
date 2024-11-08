function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {

    let iskeythere = true;
    keys.forEach(key => {
        if (!(key in obj)) {
            iskeythere = false;
        }
    });
    return iskeythere; 
}


