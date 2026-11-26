---
title: "ServerBoardFilter"
description: "Client: filters the main menu server board by the text typed into its search keyboard."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoardFilter

A **class** in `Root.Township`, `Features`.

Client: filters the main menu server board by the text typed into its search keyboard. Matching ignores case and spaces.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerBoardFilter()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" inputField"}</code> | The search input field with its on-screen keyboard. |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | The touch screen keyboard whose `Input` is the search text. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfilterchanged" /><code>{"event Action OnFilterChanged"}</code> | Raised whenever the search text changes, so the board can refresh its list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfilter" /><code>{"void ClearFilter()"}</code> | Clears the search text. |
| <Link id="m-filter" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> Filter(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> servers)"}</code> | Returns only the servers whose name matches the current search text. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doescurrentfiltermatch" /><code>{"private bool DoesCurrentFilterMatch(string serverName)"}</code> | True when the server name contains the search text, ignoring case and spaces. Empty text matches everything. |
| <Link id="m-refreshserverlist" /><code>{"private void RefreshServerList(string _)"}</code> | Keyboard input handler that raises `OnFilterChanged`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Grabs the input field's keyboard and subscribes to its input changes. |

</details>

## Used in

Members of other types that take, return or hold a `ServerBoardFilter`:

[`ServerBoard.filter`](/game-api/types/global-s/serverboard#m-filter).
