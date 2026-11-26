---
title: "ConsoleInput"
description: "Line editor for the Windows server console: keeps a typed line at the bottom while log lines print above it, with cursor keys, word jumps and history."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleInput

A **class** in `Root.Township`, `WindowsConsole`.

Line editor for the Windows server console: keeps a typed line at the bottom while log lines print above it, with cursor keys, word jumps and history. Runs on the console thread.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleInput()"}</code> | Creates a `ConsoleInput` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcursorposition" /><code>{"private int currentCursorPosition"}</code> | Backing field for `CurrentCursorPosition`. |
| <Link id="m-currenthistoryindex" /><code>{"private int currentHistoryIndex"}</code> | Position in the history list for the up and down arrows. |
| <Link id="m-currentline" /><code>{"private int currentLine"}</code> | Console row the input line is on. |
| <Link id="m-inputhistory" /><code>{"private List<string> inputHistory"}</code> | Lines entered so far. |
| <Link id="m-inputstring" /><code>{"private string inputString"}</code> | Backing field for `InputString`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcursorposition-2" /><code>{"int CurrentCursorPosition { get; }"}</code> | Cursor position within the typed text. |
| <Link id="m-inputstring-2" /><code>{"string InputString { get; }"}</code> | The text typed so far. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oninputtext" /><code>{"event Action<string> OnInputText"}</code> | Raised with each line the user enters. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcurrentline" /><code>{"void ClearCurrentLine()"}</code> | Empties the typed text and blanks the input line. |
| <Link id="m-redrawinputline" /><code>{"void RedrawInputLine()"}</code> | Redraws the typed text in green and puts the cursor back. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Reads one key if available, handles editing keys or inserts the character, then redraws. |
| <Link id="m-writeline" /><code>{"void WriteLine(string message)"}</code> | Prints a message above the input line and redraws the typed text under it. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtexttohistory" /><code>{"private void AddTextToHistory(string enteredText)"}</code> | Adds a non-empty entered line to history unless it repeats the last one. |
| <Link id="m-clearinputline" /><code>{"private void ClearInputLine()"}</code> | Blanks the console's input line on screen without touching the text. |
| <Link id="m-getnextwordstart" /><code>{"private int GetNextWordStart(int indexToCheckFrom)"}</code> | Index where the next word starts after the given index, or the end of the text. |
| <Link id="m-getwordstart" /><code>{"private int GetWordStart(int indexToCheckFrom)"}</code> | Index where the word at or before the given index starts. |
| <Link id="m-onbackspace" /><code>{"private void OnBackspace(ConsoleKeyInfo key)"}</code> | Deletes the character before the cursor, or the whole word with Ctrl. |
| <Link id="m-ondelete" /><code>{"private void OnDelete(ConsoleKeyInfo key)"}</code> | Deletes the character after the cursor, the next word with Ctrl, or the whole line with Shift. |
| <Link id="m-ondownarrow" /><code>{"private void OnDownArrow()"}</code> | Steps forward in history. |
| <Link id="m-onend" /><code>{"private void OnEnd()"}</code> | Moves the cursor to the end of the text. |
| <Link id="m-onenter" /><code>{"private void OnEnter()"}</code> | Echoes the line with a `>` prefix, raises `OnInputText` with it and adds it to history. |
| <Link id="m-onescape" /><code>{"private void OnEscape()"}</code> | Clears the typed text. |
| <Link id="m-onhome" /><code>{"private void OnHome()"}</code> | Moves the cursor to the start of the text. |
| <Link id="m-onleftarrow" /><code>{"private void OnLeftArrow(ConsoleKeyInfo key)"}</code> | Moves the cursor left one character, or to the word start with Ctrl. |
| <Link id="m-onrightarrow" /><code>{"private void OnRightArrow(ConsoleKeyInfo key)"}</code> | Moves the cursor right one character, or to the next word with Ctrl. |
| <Link id="m-onuparrow" /><code>{"private void OnUpArrow()"}</code> | Steps back in history. |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleInput`:

[`WindowsServerConsole.input`](/game-api/types/global-t-x/windowsserverconsole#m-input).
