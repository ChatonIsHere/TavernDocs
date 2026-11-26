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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleInput()"}</code> | <span className="api-desc">Creates a `ConsoleInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentcursorposition" /><code>{"private int currentCursorPosition"}</code> | <span className="api-desc">Backing field for `CurrentCursorPosition`.</span> |
| <Link id="m-currenthistoryindex" /><code>{"private int currentHistoryIndex"}</code> | <span className="api-desc">Position in the history list for the up and down arrows.</span> |
| <Link id="m-currentline" /><code>{"private int currentLine"}</code> | <span className="api-desc">Console row the input line is on.</span> |
| <Link id="m-inputhistory" /><code>{"private List<string> inputHistory"}</code> | <span className="api-desc">Lines entered so far.</span> |
| <Link id="m-inputstring" /><code>{"private string inputString"}</code> | <span className="api-desc">Backing field for `InputString`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentcursorposition-2" /><code>{"int CurrentCursorPosition { get; }"}</code> | <span className="api-desc">Cursor position within the typed text.</span> |
| <Link id="m-inputstring-2" /><code>{"string InputString { get; }"}</code> | <span className="api-desc">The text typed so far.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-oninputtext" /><code>{"event Action<string> OnInputText"}</code> | <span className="api-desc">Raised with each line the user enters.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcurrentline" /><code>{"void ClearCurrentLine()"}</code> | <span className="api-desc">Empties the typed text and blanks the input line.</span> |
| <Link id="m-redrawinputline" /><code>{"void RedrawInputLine()"}</code> | <span className="api-desc">Redraws the typed text in green and puts the cursor back.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Reads one key if available, handles editing keys or inserts the character, then redraws.</span> |
| <Link id="m-writeline" /><code>{"void WriteLine(string message)"}</code> | <span className="api-desc">Prints a message above the input line and redraws the typed text under it.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtexttohistory" /><code>{"private void AddTextToHistory(string enteredText)"}</code> | <span className="api-desc">Adds a non-empty entered line to history unless it repeats the last one.</span> |
| <Link id="m-clearinputline" /><code>{"private void ClearInputLine()"}</code> | <span className="api-desc">Blanks the console's input line on screen without touching the text.</span> |
| <Link id="m-getnextwordstart" /><code>{"private int GetNextWordStart(int indexToCheckFrom)"}</code> | <span className="api-desc">Index where the next word starts after the given index, or the end of the text.</span> |
| <Link id="m-getwordstart" /><code>{"private int GetWordStart(int indexToCheckFrom)"}</code> | <span className="api-desc">Index where the word at or before the given index starts.</span> |
| <Link id="m-onbackspace" /><code>{"private void OnBackspace(ConsoleKeyInfo key)"}</code> | <span className="api-desc">Deletes the character before the cursor, or the whole word with Ctrl.</span> |
| <Link id="m-ondelete" /><code>{"private void OnDelete(ConsoleKeyInfo key)"}</code> | <span className="api-desc">Deletes the character after the cursor, the next word with Ctrl, or the whole line with Shift.</span> |
| <Link id="m-ondownarrow" /><code>{"private void OnDownArrow()"}</code> | <span className="api-desc">Steps forward in history.</span> |
| <Link id="m-onend" /><code>{"private void OnEnd()"}</code> | <span className="api-desc">Moves the cursor to the end of the text.</span> |
| <Link id="m-onenter" /><code>{"private void OnEnter()"}</code> | <span className="api-desc">Echoes the line with a `>` prefix, raises `OnInputText` with it and adds it to history.</span> |
| <Link id="m-onescape" /><code>{"private void OnEscape()"}</code> | <span className="api-desc">Clears the typed text.</span> |
| <Link id="m-onhome" /><code>{"private void OnHome()"}</code> | <span className="api-desc">Moves the cursor to the start of the text.</span> |
| <Link id="m-onleftarrow" /><code>{"private void OnLeftArrow(ConsoleKeyInfo key)"}</code> | <span className="api-desc">Moves the cursor left one character, or to the word start with Ctrl.</span> |
| <Link id="m-onrightarrow" /><code>{"private void OnRightArrow(ConsoleKeyInfo key)"}</code> | <span className="api-desc">Moves the cursor right one character, or to the next word with Ctrl.</span> |
| <Link id="m-onuparrow" /><code>{"private void OnUpArrow()"}</code> | <span className="api-desc">Steps back in history.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleInput`:

<div className="api-used-in">

[`WindowsServerConsole.input`](/mod/game-api/types/global-t-x/windowsserverconsole#m-input).

</div>
