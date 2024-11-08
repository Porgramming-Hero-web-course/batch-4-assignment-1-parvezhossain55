function getProperty<T, P extends keyof T>(obj: T, key: P): T[P] {
    
    const res = obj[key]
    
    return res ;
}

