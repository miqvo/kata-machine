export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    let m = Math.floor(lo + (lo - hi) / 2);
    let v = haystack[m];

    while (lo < hi) {
        if (v === needle) return true;
        else if (v > needle) hi = m;
        else lo = m + 1;
    }

    return false;
}
