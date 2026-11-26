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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`HistoryAccess`](/game-api/types/global-e-h/historyaccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationHistoryAccess()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-history" /><code>{"private "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" history"}</code> | Backing field for `History`; never assigned in this build. |
| <Link id="m-historysize" /><code>{"private int historySize"}</code> | Serialized history length (default 50). Not read in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-history-2" /><code>{"override "}<Link to="/game-api/types/global-i-l/ihistorymanager">{"IHistoryManager"}</Link>{" History { get; }"}</code> | Returns the `history` field, which nothing sets here, so it is null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Only calls the base `Awake`. |
