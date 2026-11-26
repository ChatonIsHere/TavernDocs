// Error codes shown to users (privately), so a report can be matched to the log. Add new ones at the end.
export const ERRORS = {
    NOT_READY: { code: 'TD-001', message: "The docs index is still loading. Try again in a minute." },
    NOT_FOUND: { code: 'TD-002', message: 'Nothing found for that. Try `/search`, or check the spelling.' },
    COOLDOWN: { code: 'TD-003', message: 'Slow down a little: you can post again in {seconds}s.' },
    NOT_YOURS: { code: 'TD-004', message: "Only the person who ran the command (or a moderator) can do that." },
    STEPS_GONE: { code: 'TD-005', message: 'That guide changed since this was posted. Run `/guide` again.' },
    OWNER_ONLY: { code: 'TD-006', message: 'You need the Manage Server permission for this.' },
    MODS_UNAVAILABLE: { code: 'TD-007', message: "The TavernMods list couldn't be loaded. Try again later." },
    UNKNOWN_TABLE: { code: 'TD-008', message: 'No table with that name. Pick one from the list.' },
    FAILED: { code: 'TD-009', message: 'Something went wrong on our side.' },
} as const;

export type ErrorKey = keyof typeof ERRORS;

export function errorText(key: ErrorKey, vars: Record<string, string | number> = {}): string {
    const { code, message } = ERRORS[key];
    return message.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? '')) + ` (${code})`;
}
