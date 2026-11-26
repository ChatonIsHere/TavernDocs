---
title: "PlayerModeOverride"
description: "Debug asset for overriding the player mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerModeOverride

A **class** in `Root.Township`, the global namespace.

Debug asset for overriding the player mode. In this build the override is fixed to fly mode.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PlayerModeOverride.Create`](/mod/game-api/types/global-p/playermodeoverride-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/playermodeoverride-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerModeOverride()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-playermodeforempty" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerModeForEmpty"}</code> | Serialized mode that nothing reads. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-override" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Override { get; }"}</code> | Always returns `PlayerMode.Fly`. Nothing in this build reads it. |
