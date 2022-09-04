import GmailMessage = GoogleAppsScript.Gmail.GmailMessage;
import { DateMock } from "./date-mock";

export class GmailMessageMock implements GmailMessage {
    constructor(
        private from: string,
        private subject: string,
        private body: string,
    ) {
    }
    getDate(): DateMock {
        return new DateMock();
    }
    getFrom(): string {
        return this.from;
    }
    getSubject(): string {
        return this.subject;
    }
    getBody(): string {
        return this.body;
    }

    //使ってない
    createDraftReply(body: string): GoogleAppsScript.Gmail.GmailDraft;
    createDraftReply(body: string, options: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailDraft;
    createDraftReply(body: string, options?: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailDraft {
        return undefined;
    }

    createDraftReplyAll(body: string): GoogleAppsScript.Gmail.GmailDraft;
    createDraftReplyAll(body: string, options: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailDraft;
    createDraftReplyAll(body: string, options?: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailDraft {
        return undefined;
    }

    forward(recipient: string): GoogleAppsScript.Gmail.GmailMessage;
    forward(recipient: string, options: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage;
    forward(recipient: string, options?: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    getAttachments(): GoogleAppsScript.Gmail.GmailAttachment[];
    getAttachments(options: GoogleAppsScript.Gmail.GmailAttachmentOptions): GoogleAppsScript.Gmail.GmailAttachment[];
    getAttachments(options?: GoogleAppsScript.Gmail.GmailAttachmentOptions): GoogleAppsScript.Gmail.GmailAttachment[] {
        return [];
    }

    getBcc(): string {
        return "";
    }

    getCc(): string {
        return "";
    }

    getHeader(name: string): string {
        return "";
    }

    getId(): string {
        return "";
    }

    getPlainBody(): string {
        return "";
    }

    getRawContent(): string {
        return "";
    }

    getReplyTo(): string {
        return "";
    }

    getThread(): GoogleAppsScript.Gmail.GmailThread {
        return undefined;
    }

    getTo(): string {
        return "";
    }

    isDraft(): boolean {
        return false;
    }

    isInChats(): boolean {
        return false;
    }

    isInInbox(): boolean {
        return false;
    }

    isInPriorityInbox(): boolean {
        return false;
    }

    isInTrash(): boolean {
        return false;
    }

    isStarred(): boolean {
        return false;
    }

    isUnread(): boolean {
        return false;
    }

    markRead(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    markUnread(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    moveToTrash(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    refresh(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    reply(body: string): GoogleAppsScript.Gmail.GmailMessage;
    reply(body: string, options: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage;
    reply(body: string, options?: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    replyAll(body: string): GoogleAppsScript.Gmail.GmailMessage;
    replyAll(body: string, options: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage;
    replyAll(body: string, options?: GoogleAppsScript.Gmail.GmailAdvancedOptions): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    star(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }

    unstar(): GoogleAppsScript.Gmail.GmailMessage {
        return undefined;
    }
}
