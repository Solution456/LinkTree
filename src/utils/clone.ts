import { toRaw } from 'vue';

export const clone = <T>(obj: T) => {
    return structuredClone(toRaw(obj));
}