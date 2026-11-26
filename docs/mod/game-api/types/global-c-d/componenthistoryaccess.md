---
title: "ComponentHistoryAccess"
description: "A HistoryAccess that takes its history from an IHasHistory component on the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentHistoryAccess

A **class** in `Root.Township`, the global namespace.

A `HistoryAccess` that takes its history from an `IHasHistory` component on the same object.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`HistoryAccess`](/mod/game-api/types/global-e-h/historyaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentHistoryAccess()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" history"}</code> | <span className="api-desc">Backing field for `History`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history-2" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | <span className="api-desc">History manager from the `IHasHistory` component.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Gets the history from the `IHasHistory` component before the base setup.</span> |
