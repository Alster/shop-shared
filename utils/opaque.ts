// export type Opaque<K, T> = T & { __TYPE__: K };

export type Opaque<K, T> = T & { _opaque: K };
