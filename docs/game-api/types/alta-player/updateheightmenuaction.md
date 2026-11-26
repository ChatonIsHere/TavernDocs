---
title: "UpdateHeightMenuAction"
description: "Accessibility quick access action that raises or lowers the player's adjusted height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateHeightMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Accessibility quick access action that raises or lowers the player's adjusted height. Client only.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateHeightMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isincrease" /><code>{"private bool isIncrease"}</code> | True to raise, false to lower. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playeradjustableheightfixersettings">{"PlayerAdjustableHeightFixerSettings"}</Link>{" settings"}</code> | The adjustable height settings it changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden unless accessibility features are on and the height can change in this direction. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True while the height can change in this direction. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Raises or lowers the height one step. |
