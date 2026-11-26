---
title: "NestingMenuAction"
description: "Quick access action that opens a fan of sub-bubbles for its nested actions when selected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NestingMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access action that opens a fan of sub-bubbles for its nested actions when selected. Client only.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NestingMenuAction()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bubbledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" bubbleDefinition"}</code> | Pool definition for the sub-bubbles. |
| <Link id="m-currentbubble" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" currentBubble"}</code> | The bubble this action is shown in while open. |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> | True while the sub-bubbles are out. |
| <Link id="m-nestedactions" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] nestedActions"}</code> | The actions inside. |
| <Link id="m-overrideselectedscale" /><code>{"private float overrideSelectedScale"}</code> | Backing field for `OverrideSelectedScale`. |
| <Link id="m-radialspaceindegrees" /><code>{"private const float RadialSpaceInDegrees"}</code> | Arc the sub-bubbles are spread over (180 degrees). |
| <Link id="m-spawnedbubbles" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> spawnedBubbles"}</code> | Sub-bubbles currently out. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haseffectonrun" /><code>{"override bool HasEffectOnRun { get; }"}</code> | False; choosing it does nothing itself. |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True if any nested action is active. |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | Hidden if every nested action is ignored. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | True if any nested action is valid. |
| <Link id="m-overrideselectedscale-2" /><code>{"override float OverrideSelectedScale { get; }"}</code> | Scale of this bubble when selected. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | Collapses the sub-bubbles when the menu closes. |
| <Link id="m-initializeforplayer" /><code>{"override void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | Also sets up every nested action for the player. |
| <Link id="m-markselected" /><code>{"override void MarkSelected("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | On first selection, spawns the nested bubbles in a half circle around this bubble. |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Does nothing. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkclose" /><code>{"private void CheckClose("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" markedBubble)"}</code> | When another bubble is marked, collapses unless it is this bubble or one of its children. |
| <Link id="m-collapse" /><code>{"private void Collapse()"}</code> | Releases the sub-bubbles and removes them from the controller. |
| <Link id="m-spawnnestedbubbles" /><code>{"private void SpawnNestedBubbles(Vector3 origin, Vector3 offsetDirection, Quaternion step)"}</code> | Spawns a pooled bubble for each non-ignored nested action along the arc. |

</details>
