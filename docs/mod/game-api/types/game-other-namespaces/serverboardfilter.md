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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerBoardFilter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" inputField"}</code> | <span className="api-desc">The search input field with its on-screen keyboard.</span> |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | <span className="api-desc">The touch screen keyboard whose `Input` is the search text.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfilterchanged" /><code>{"event Action OnFilterChanged"}</code> | <span className="api-desc">Raised whenever the search text changes, so the board can refresh its list.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfilter" /><code>{"void ClearFilter()"}</code> | <span className="api-desc">Clears the search text.</span> |
| <Link id="m-filter" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> Filter(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> servers)"}</code> | <span className="api-desc">Returns only the servers whose name matches the current search text.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doescurrentfiltermatch" /><code>{"private bool DoesCurrentFilterMatch(string serverName)"}</code> | <span className="api-desc">True when the server name contains the search text, ignoring case and spaces. Empty text matches everything.</span> |
| <Link id="m-refreshserverlist" /><code>{"private void RefreshServerList(string _)"}</code> | <span className="api-desc">Keyboard input handler that raises `OnFilterChanged`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Grabs the input field's keyboard and subscribes to its input changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerBoardFilter`:

<div className="api-used-in">

[`ServerBoard.filter`](/mod/game-api/types/global-s/serverboard#m-filter).

</div>
