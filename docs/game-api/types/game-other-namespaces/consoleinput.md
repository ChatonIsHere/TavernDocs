---
title: "ConsoleInput"
description: "class ConsoleInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleInput

A **class** in `Root.Township`, `WindowsConsole`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleInput()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentcursorposition" /><code>{"private int currentCursorPosition"}</code> |
| <Link id="m-currenthistoryindex" /><code>{"private int currentHistoryIndex"}</code> |
| <Link id="m-currentline" /><code>{"private int currentLine"}</code> |
| <Link id="m-inputhistory" /><code>{"private List<string> inputHistory"}</code> |
| <Link id="m-inputstring" /><code>{"private string inputString"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentcursorposition-2" /><code>{"int CurrentCursorPosition { get; }"}</code> |
| <Link id="m-inputstring-2" /><code>{"string InputString { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-oninputtext" /><code>{"event Action<string> OnInputText"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clearcurrentline" /><code>{"void ClearCurrentLine()"}</code> |
| <Link id="m-redrawinputline" /><code>{"void RedrawInputLine()"}</code> |
| <Link id="m-update" /><code>{"void Update()"}</code> |
| <Link id="m-writeline" /><code>{"void WriteLine(string message)"}</code> |

<details>
<summary>14 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtexttohistory" /><code>{"private void AddTextToHistory(string enteredText)"}</code> |
| <Link id="m-clearinputline" /><code>{"private void ClearInputLine()"}</code> |
| <Link id="m-getnextwordstart" /><code>{"private int GetNextWordStart(int indexToCheckFrom)"}</code> |
| <Link id="m-getwordstart" /><code>{"private int GetWordStart(int indexToCheckFrom)"}</code> |
| <Link id="m-onbackspace" /><code>{"private void OnBackspace(ConsoleKeyInfo key)"}</code> |
| <Link id="m-ondelete" /><code>{"private void OnDelete(ConsoleKeyInfo key)"}</code> |
| <Link id="m-ondownarrow" /><code>{"private void OnDownArrow()"}</code> |
| <Link id="m-onend" /><code>{"private void OnEnd()"}</code> |
| <Link id="m-onenter" /><code>{"private void OnEnter()"}</code> |
| <Link id="m-onescape" /><code>{"private void OnEscape()"}</code> |
| <Link id="m-onhome" /><code>{"private void OnHome()"}</code> |
| <Link id="m-onleftarrow" /><code>{"private void OnLeftArrow(ConsoleKeyInfo key)"}</code> |
| <Link id="m-onrightarrow" /><code>{"private void OnRightArrow(ConsoleKeyInfo key)"}</code> |
| <Link id="m-onuparrow" /><code>{"private void OnUpArrow()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ConsoleInput`:

[`WindowsServerConsole.input`](/game-api/types/global-t-x/windowsserverconsole#m-input).
