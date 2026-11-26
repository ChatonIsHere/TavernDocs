---
title: "QuickAccessMenuSettings"
description: "Global settings for the quick access (wrist) menu: where its bubbles spawn, how it follows the hand and how titles show."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuSettings

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Global settings for the quick access (wrist) menu: where its bubbles spawn, how it follows the hand and how titles show.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`GlobalSettings<QuickAccessMenuSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`QuickAccessMenuSettings`](/mod/game-api/types/alta-player/quickaccessmenusettings)
- **Nested types** [`QuickAccessMenuBubbleSelectEvent`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessMenuSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-centertitlebackgrounddiameter" /><code>{"private float centerTitleBackgroundDiameter"}</code> | Backing field for `CenterTitleBackgroundDiameter`, the size of the background behind the center title. |
| <Link id="m-centertitlebackgroundprefab" /><code>{"private GameObject centerTitleBackgroundPrefab"}</code> | Backing field for `CenterTitleBackgroundPrefab`, the background shown behind the center title. |
| <Link id="m-centertitlemaxcharacters" /><code>{"private int centerTitleMaxCharacters"}</code> | Backing field for `CenterTitleMaxCharacters`, the character limit for the center title (default 24). |
| <Link id="m-centertitlemaxlines" /><code>{"private int centerTitleMaxLines"}</code> | Backing field for `CenterTitleMaxLines`, the line limit for the center title (default 2). |
| <Link id="m-displaytitlesincenter" /><code>{"private bool displayTitlesInCenter"}</code> | Backing field for `DisplayTitlesInCenter`, whether the selected bubble's title shows in the middle of the menu. |
| <Link id="m-islerpingtowardshandposition" /><code>{"private bool isLerpingTowardsHandPosition"}</code> | Backing field for `IsLerpingTowardsHandPosition`. When true the menu follows the hand once it gets far enough away. |
| <Link id="m-maxanglebeforelerp" /><code>{"private float maxAngleBeforeLerp"}</code> | Backing field for `MaxAngleBeforeLerp`, degrees the menu can lag behind its target rotation before it starts turning to face the player. |
| <Link id="m-maxbubbledistancesquared" /><code>{"private float maxBubbleDistanceSquared"}</code> | Backing field for `MaxBubbleDistanceSquared`, how close (squared) the controller must be to a bubble to select it. |
| <Link id="m-maxdistancebeforelerp" /><code>{"private float maxDistanceBeforeLerp"}</code> | Base distance the hand can move from the menu before it starts following. Used by `MaxDistanceBeforeLerp`. |
| <Link id="m-menuprefabdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" menuPrefabDefinition"}</code> | Backing field for `MenuPrefabDefinition`, the pooled bubble prefab. |
| <Link id="m-nestedmaxdistancebeforelerp" /><code>{"private float nestedMaxDistanceBeforeLerp"}</code> | Extra follow distance added per nesting level in `MaxDistanceBeforeLerp`. |
| <Link id="m-onselectbubbleevents" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent"}</Link>{" onSelectBubbleEvents"}</code> | Sound and visual effects played when a bubble is selected, split by whether the bubble is active. |
| <Link id="m-positionlerpspeedoverdistance" /><code>{"private AnimationCurve positionLerpSpeedOverDistance"}</code> | Backing field for `PositionLerpSpeedOverDistance`, follow speed by how far the hand is from the menu. |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | Backing field for `RotationLerpSpeed`, how fast the menu turns towards the player. |
| <Link id="m-spawnnestedradius" /><code>{"private float spawnNestedRadius"}</code> | Backing field for `SpawnNestedRadius`, the radius nested bubbles spawn at. |
| <Link id="m-spawnradius" /><code>{"private float spawnRadius"}</code> | Backing field for `SpawnRadius`, the radius top level bubbles spawn at around the hand. |
| <Link id="m-targetdistancebeforelerpsquared" /><code>{"private float targetDistanceBeforeLerpSquared"}</code> | Backing field for `TargetDistanceBeforeLerpSquared`, extra squared distance where following stops. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centertitlebackgrounddiameter-2" /><code>{"float CenterTitleBackgroundDiameter { get; }"}</code> | Size of the centre title background. |
| <Link id="m-centertitlebackgroundprefab-2" /><code>{"GameObject CenterTitleBackgroundPrefab { get; }"}</code> | Background shown behind the centre title. |
| <Link id="m-centertitlemaxcharacters-2" /><code>{"int CenterTitleMaxCharacters { get; }"}</code> | Most characters in a centre title. |
| <Link id="m-centertitlemaxlines-2" /><code>{"int CenterTitleMaxLines { get; }"}</code> | Most lines in a centre title. |
| <Link id="m-displaytitlesincenter-2" /><code>{"bool DisplayTitlesInCenter { get; }"}</code> | Whether bubble titles show in the middle of the menu. |
| <Link id="m-islerpingtowardshandposition-2" /><code>{"bool IsLerpingTowardsHandPosition { get; }"}</code> | Whether the menu moves to follow the hand. |
| <Link id="m-maxanglebeforelerp-2" /><code>{"float MaxAngleBeforeLerp { get; }"}</code> | Angle the controller can turn before the menu starts following. |
| <Link id="m-maxbubbledistancesquared-2" /><code>{"float MaxBubbleDistanceSquared { get; }"}</code> | Squared distance a hand must be within to pick a bubble, probably. |
| <Link id="m-menuprefabdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" MenuPrefabDefinition { get; }"}</code> | Pooled prefab for the menu. |
| <Link id="m-positionlerpspeedoverdistance-2" /><code>{"AnimationCurve PositionLerpSpeedOverDistance { get; }"}</code> | Follow speed by distance from the hand. |
| <Link id="m-rotationlerpspeed-2" /><code>{"float RotationLerpSpeed { get; }"}</code> | How fast the menu turns to follow the controller. |
| <Link id="m-spawnnestedradius-2" /><code>{"float SpawnNestedRadius { get; }"}</code> | Radius for bubbles of a nested menu. |
| <Link id="m-spawnradius-2" /><code>{"float SpawnRadius { get; }"}</code> | Radius bubbles are placed at around the menu centre. |
| <Link id="m-targetdistancebeforelerpsquared-2" /><code>{"float TargetDistanceBeforeLerpSquared { get; }"}</code> | Squared distance at which the menu stops following, probably. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-maxdistancebeforelerp-2" /><code>{"float MaxDistanceBeforeLerp(int nestedLevel)"}</code> | Squared distance the hand can move before the menu follows; grows with nesting level. |
| <Link id="m-playselectmenueffects" /><code>{"void PlaySelectMenuEffects("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | Plays the active or inactive select sound and effect for a bubble. |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuSettings`:

[`QuickAccessMenuController.Settings`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-settings).
