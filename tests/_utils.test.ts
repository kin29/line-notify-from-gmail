import { Utils } from "../src/_utils";
import { GmailMessageMock } from "./gmail-message-mock";

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

describe('Utils.createMessageListForLINE', () => {
    test('LINE用のメッセージを生成できること', () => {
        const inputGmailMessageMultiList = [
            [
                new GmailMessageMock('from1-1@localhost', 'dummy-subject1-1', 'dummy-body1-1'),
                new GmailMessageMock('from1-2@localhost', 'dummy-subject1-2', 'dummy-body1-2')
            ],
            [
                new GmailMessageMock('from2@localhost', 'dummy-subject2', 'dummy-body2')
            ]
        ];

        const util = new Utils();
        const actual = util.createMessageListForLINE(inputGmailMessageMultiList);
        expect(actual.length).toBe(2);
        expect(actual[0]).toBe(` 10/4 8:41
[from]from1-2@localhost

[subject]dummy-subject1-2

[body]dummy-body1-2`);
        expect(actual[1]).toBe(` 10/4 8:41
[from]from2@localhost

[subject]dummy-subject2

[body]dummy-body2`);
    })
})
