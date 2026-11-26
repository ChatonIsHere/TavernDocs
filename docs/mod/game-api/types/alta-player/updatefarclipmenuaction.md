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
| <Link id="m-ctor" /><code>{"UpdateFarClipMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincrease" /><code>{"private bool isIncrease"}</code> | <span className="api-desc">True to raise the far clip, false to lower it.</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Time until which another press counts as quick and doubles the step.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Raise: while far clip is under 800. Lower: while it is more than 10 past the near clip.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Changes the far clip plane and shows the new value as a message.</span> |
