export default function isDate(value: string): boolean {
    if (/^([0,1,2]\d|[3][0,1])[.]([0]\d|[1][0,1,2])[.]\d{4}/.test(value)) return true;

    return false;
}