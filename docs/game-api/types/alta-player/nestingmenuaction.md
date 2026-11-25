---
title: "NestingMenuAction"
description: "class NestingMenuAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NestingMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NestingMenuAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bubbledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" bubbleDefinition"}</code> |  |
| <Link id="m-currentbubble" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" currentBubble"}</code> |  |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> |  |
| <Link id="m-nestedactions" /><code>{"private "}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{"[] nestedActions"}</code> |  |
| <Link id="m-overrideselectedscale" /><code>{"private float overrideSelectedScale"}</code> |  |
| <Link id="m-radialspaceindegrees" /><code>{"private const float RadialSpaceInDegrees"}</code> |  |
| <Link id="m-spawnedbubbles" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{"> spawnedBubbles"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haseffectonrun" /><code>{"override bool HasEffectOnRun { get; }"}</code> |  |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> |  |
| <Link id="m-isignored" /><code>{"override bool IsIgnored { get; }"}</code> |  |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> |  |
| <Link id="m-overrideselectedscale-2" /><code>{"override float OverrideSelectedScale { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> |  |
| <Link id="m-initializeforplayer" /><code>{"override void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isDev)"}</code> |  |
| <Link id="m-markselected" /><code>{"override void MarkSelected("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> |  |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-checkclose" /><code>{"private void CheckClose("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" markedBubble)"}</code> |  |
| <Link id="m-collapse" /><code>{"private void Collapse()"}</code> |  |
| <Link id="m-spawnnestedbubbles" /><code>{"private void SpawnNestedBubbles(Vector3 origin, Vector3 offsetDirection, Quaternion step)"}</code> |  |
