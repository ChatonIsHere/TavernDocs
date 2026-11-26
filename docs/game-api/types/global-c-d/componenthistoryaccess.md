---
title: "ComponentHistoryAccess"
description: "A HistoryAccess that takes its history from an IHasHistory component on the same object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ComponentHistoryAccess

A **class** in `Root.Township`, no namespace.

A `HistoryAccess` that takes its history from an `IHasHistory` component on the same object.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`HistoryAccess`](/game-api/types/global-e-h/historyaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ComponentHistoryAccess()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" history"}</code> | Backing field for `History`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history-2" /><code>{"override "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | History manager from the `IHasHistory` component. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Gets the history from the `IHasHistory` component before the base setup. |
