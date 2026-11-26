---
title: "CustomizationHistoryAccess"
description: "History access component for the customization room (undo and redo)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationHistoryAccess

A **class** in `Root.Township`, `Alta.Customization`.

History access component for the customization room (undo and redo). In this build its history is never assigned.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`HistoryAccess`](/mod/game-api/types/global-e-h/historyaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationHistoryAccess()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" history"}</code> | <span className="api-desc">Backing field for `History`; never assigned in this build.</span> |
| <Link id="m-historysize" /><code>{"private int historySize"}</code> | <span className="api-desc">Serialized history length (default 50). Not read in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history-2" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | <span className="api-desc">Returns the `history` field, which nothing sets here, so it is null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Only calls the base `Awake`.</span> |
