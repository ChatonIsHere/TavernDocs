---
title: "UpdateFarClipMenuAction"
description: "Debug quick access action that raises or lowers the player camera's far clip plane by 10 (20 if pressed again within a second)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateFarClipMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Debug quick access action that raises or lowers the player camera's far clip plane by 10 (20 if pressed again within a second). Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateFarClipMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincrease" /><code>{"private bool isIncrease"}</code> | True to raise the far clip, false to lower it. |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Time until which another press counts as quick and doubles the step. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Raise: while far clip is under 800. Lower: while it is more than 10 past the near clip. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Changes the far clip plane and shows the new value as a message. |
