export default function isDistance(value: string): boolean {
    if (/[1-9]+[0]*/.test(value)) return true;

    return false;
}