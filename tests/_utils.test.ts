import { Utils } from "../src/_utils";

describe('Utils.returnHuge', () => {
    test('hugeが帰ってくること', () => {
        const util = new Utils();
        expect(util.returnHuge()).toBe('huge');
    })
})
