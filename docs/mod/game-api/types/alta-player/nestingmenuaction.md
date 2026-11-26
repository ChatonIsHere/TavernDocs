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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NestingMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bubbledefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" bubbleDefinition"}</code> | <span className="api-desc">Pool definition for the sub-bubbles.</span> |
| <Link id="m-currentbubble" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" currentBubble"}</code> | <span className="api-desc">The bubble this action is shown in while open.</span> |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> | <span className="api-desc">True while the sub-bubbles are out.</span> |
| <Link id="m-nestedactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] nestedActions"}</code> | <span className="api-desc">The actions inside.</span> |
| <Link id="m-overrideselectedscale" /><code>{"private float overrideSelectedScale"}</code> | <span className="api-desc">Backing field for `OverrideSelectedScale`.</span> |
| <Link id="m-radialspaceindegrees" /><code>{"private const float RadialSpaceInDegrees"}</code> | <span className="api-desc">Arc the sub-bubbles are spread over (180 degrees).</span> |
| <Link id="m-spawnedbubbles" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> spawnedBubbles"}</code> | <span className="api-desc">Sub-bubbles currently out.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haseffectonrun" /><code>{"override bool HasEffectOnRun { get; }"}</code> | <span className="api-desc">False; choosing it does nothing itself.</span> |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True if any nested action is active.</span> |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> | <span className="api-desc">Hidden if every nested action is ignored.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">True if any nested action is valid.</span> |
| <Link id="m-overrideselectedscale-2" /><code>{"override float OverrideSelectedScale { get; }"}</code> | <span className="api-desc">Scale of this bubble when selected.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | <span className="api-desc">Collapses the sub-bubbles when the menu closes.</span> |
| <Link id="m-initializeforplayer" /><code>{"override void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> | <span className="api-desc">Also sets up every nested action for the player.</span> |
| <Link id="m-markselected" /><code>{"override void MarkSelected("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | <span className="api-desc">On first selection, spawns the nested bubbles in a half circle around this bubble.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkclose" /><code>{"private void CheckClose("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" markedBubble)"}</code> | <span className="api-desc">When another bubble is marked, collapses unless it is this bubble or one of its children.</span> |
| <Link id="m-collapse" /><code>{"private void Collapse()"}</code> | <span className="api-desc">Releases the sub-bubbles and removes them from the controller.</span> |
| <Link id="m-spawnnestedbubbles" /><code>{"private void SpawnNestedBubbles(Vector3 origin, Vector3 offsetDirection, Quaternion step)"}</code> | <span className="api-desc">Spawns a pooled bubble for each non-ignored nested action along the arc.</span> |

</details>
