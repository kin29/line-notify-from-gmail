import Base = GoogleAppsScript.Base;

export class DateMock implements Base.Date {
    getMonth(): number {
        return 9;
    }
    getDate(): number {
        return 4;
    }
    getHours(): number {
        return 8;
    }
    getMinutes(): number {
        return 41;
    }

    //使ってない
    toString(): string {
        throw new Error("Method not implemented.");
    }
    toLocaleString(): string {
        throw new Error("Method not implemented.");
    }
    valueOf(): number {
        throw new Error("Method not implemented.");
    }
    getDay(): number {
        return 0;
    }
    getFullYear(): number {
        return 0;
    }
    getMilliseconds(): number {
        return 0;
    }
    getSeconds(): number {
        return 0;
    }
    getTime(): number {
        return 0;
    }
    getTimezoneOffset(): number {
        return 0;
    }
    getUTCDate(): number {
        return 0;
    }
    getUTCDay(): number {
        return 0;
    }
    getUTCFullYear(): number {
        return 0;
    }
    getUTCHours(): number {
        return 0;
    }
    getUTCMilliseconds(): number {
        return 0;
    }
    getUTCMinutes(): number {
        return 0;
    }
    getUTCMonth(): number {
        return 0;
    }
    getUTCSeconds(): number {
        return 0;
    }
    setDate(date: number): number {
        return 0;
    }
    setFullYear(year: number, month?: number, date?: number): number {
        return 0;
    }
    setHours(hours: number, min?: number, sec?: number, ms?: number): number {
        return 0;
    }
    setMilliseconds(ms: number): number {
        return 0;
    }
    setMinutes(min: number, sec?: number, ms?: number): number {
        return 0;
    }
    setMonth(month: number, date?: number): number {
        return 0;
    }
    setSeconds(sec: number, ms?: number): number {
        return 0;
    }
    setTime(time: number): number {
        return 0;
    }
    setUTCDate(date: number): number {
        return 0;
    }
    setUTCFullYear(year: number, month?: number, date?: number): number {
        return 0;
    }
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
        return 0;
    }
    setUTCMilliseconds(ms: number): number {
        return 0;
    }
    setUTCMinutes(min: number, sec?: number, ms?: number): number {
        return 0;
    }
    setUTCMonth(month: number, date?: number): number {
        return 0;
    }
    setUTCSeconds(sec: number, ms?: number): number {
        return 0;
    }
    toDateString(): string {
        return "";
    }
    toISOString(): string {
        return "";
    }
    toJSON(key?: any): string {
        return "";
    }
    toLocaleDateString(): string {
        return "";
    }
    toLocaleTimeString(): string {
        return "";
    }
    toTimeString(): string {
        return "";
    }
    toUTCString(): string {
        return "";
    }
}
