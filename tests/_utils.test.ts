import { Utils } from "../src/_utils";

describe('Utils.getTargetFromEmailList', () => {
    test('ターゲットのメアドリストを取得できること', () => {
        const util = new Utils();
        expect(util.getTargetFromEmailList().length).toBe(1);
        expect(util.getTargetFromEmailList()[0]).toBe('hoict@hoict.jp');
    })
})

describe('Utils.createGmailSearchString', () => {
    test('Gmail検索用の検索文字を生成できること_ターゲットメアドリストなし', () => {
        const util = new Utils();
        expect(util.createGmailSearchString([]))
            .toBe('(newer_than:1h)');
    })

    test('Gmail検索用の検索文字を生成できること_ターゲットメアドリスト1つ', () => {
        const util = new Utils();
        expect(util.createGmailSearchString(['test@localhost']))
            .toBe('(newer_than:1h from:test@localhost)');
    })

    test('Gmail検索用の検索文字を生成できること_ターゲットメアドリスト複数', () => {
        const util = new Utils();
        expect(util.createGmailSearchString(['test1@localhost', 'test2@localhost']))
            .toBe('(newer_than:1h from:test1@localhost OR from:test2@localhost)');
    })
})

describe('Utils.getTargetGmailMessages', () => {
    test('ターゲットのGmailメッセージリストを取得できること', () => {
        const util = new Utils();
        //todo
    })
})

describe('Utils.createOutputMessages', () => {
    test('LINE用のメッセージを生成できること', () => {
        const util = new Utils();
        //todo
    })
})
