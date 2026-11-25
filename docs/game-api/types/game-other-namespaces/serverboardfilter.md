---
title: "ServerBoardFilter"
description: "class ServerBoardFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerBoardFilter

A **class** in `Root.Township`, `Features`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerBoardFilter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputfield" /><code>{"private "}<Link to="/game-api/types/alta-menus/inputfieldwithkeyboard">{"InputFieldWithKeyboard"}</Link>{" inputField"}</code> |  |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfilterchanged" /><code>{"event Action OnFilterChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearfilter" /><code>{"void ClearFilter()"}</code> |  |
| <Link id="m-filter" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> Filter(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> servers)"}</code> |  |
| <Link id="m-doescurrentfiltermatch" /><code>{"private bool DoesCurrentFilterMatch(string serverName)"}</code> |  |
| <Link id="m-refreshserverlist" /><code>{"private void RefreshServerList(string _)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ServerBoardFilter`:

[`ServerBoard.filter`](/game-api/types/global-s/serverboard#m-filter).
