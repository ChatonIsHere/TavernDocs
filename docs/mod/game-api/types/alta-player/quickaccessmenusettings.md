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
| <Link id="m-ctor" /><code>{"QuickAccessMenuSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-centertitlebackgrounddiameter" /><code>{"private float centerTitleBackgroundDiameter"}</code> | <span className="api-desc">Backing field for `CenterTitleBackgroundDiameter`, the size of the background behind the center title.</span> |
| <Link id="m-centertitlebackgroundprefab" /><code>{"private GameObject centerTitleBackgroundPrefab"}</code> | <span className="api-desc">Backing field for `CenterTitleBackgroundPrefab`, the background shown behind the center title.</span> |
| <Link id="m-centertitlemaxcharacters" /><code>{"private int centerTitleMaxCharacters"}</code> | <span className="api-desc">Backing field for `CenterTitleMaxCharacters`, the character limit for the center title (default 24).</span> |
| <Link id="m-centertitlemaxlines" /><code>{"private int centerTitleMaxLines"}</code> | <span className="api-desc">Backing field for `CenterTitleMaxLines`, the line limit for the center title (default 2).</span> |
| <Link id="m-displaytitlesincenter" /><code>{"private bool displayTitlesInCenter"}</code> | <span className="api-desc">Backing field for `DisplayTitlesInCenter`, whether the selected bubble's title shows in the middle of the menu.</span> |
| <Link id="m-islerpingtowardshandposition" /><code>{"private bool isLerpingTowardsHandPosition"}</code> | <span className="api-desc">Backing field for `IsLerpingTowardsHandPosition`. When true the menu follows the hand once it gets far enough away.</span> |
| <Link id="m-maxanglebeforelerp" /><code>{"private float maxAngleBeforeLerp"}</code> | <span className="api-desc">Backing field for `MaxAngleBeforeLerp`, degrees the menu can lag behind its target rotation before it starts turning to face the player.</span> |
| <Link id="m-maxbubbledistancesquared" /><code>{"private float maxBubbleDistanceSquared"}</code> | <span className="api-desc">Backing field for `MaxBubbleDistanceSquared`, how close (squared) the controller must be to a bubble to select it.</span> |
| <Link id="m-maxdistancebeforelerp" /><code>{"private float maxDistanceBeforeLerp"}</code> | <span className="api-desc">Base distance the hand can move from the menu before it starts following. Used by `MaxDistanceBeforeLerp`.</span> |
| <Link id="m-menuprefabdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" menuPrefabDefinition"}</code> | <span className="api-desc">Backing field for `MenuPrefabDefinition`, the pooled bubble prefab.</span> |
| <Link id="m-nestedmaxdistancebeforelerp" /><code>{"private float nestedMaxDistanceBeforeLerp"}</code> | <span className="api-desc">Extra follow distance added per nesting level in `MaxDistanceBeforeLerp`.</span> |
| <Link id="m-onselectbubbleevents" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent"}</Link>{" onSelectBubbleEvents"}</code> | <span className="api-desc">Sound and visual effects played when a bubble is selected, split by whether the bubble is active.</span> |
| <Link id="m-positionlerpspeedoverdistance" /><code>{"private AnimationCurve positionLerpSpeedOverDistance"}</code> | <span className="api-desc">Backing field for `PositionLerpSpeedOverDistance`, follow speed by how far the hand is from the menu.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">Backing field for `RotationLerpSpeed`, how fast the menu turns towards the player.</span> |
| <Link id="m-spawnnestedradius" /><code>{"private float spawnNestedRadius"}</code> | <span className="api-desc">Backing field for `SpawnNestedRadius`, the radius nested bubbles spawn at.</span> |
| <Link id="m-spawnradius" /><code>{"private float spawnRadius"}</code> | <span className="api-desc">Backing field for `SpawnRadius`, the radius top level bubbles spawn at around the hand.</span> |
| <Link id="m-targetdistancebeforelerpsquared" /><code>{"private float targetDistanceBeforeLerpSquared"}</code> | <span className="api-desc">Backing field for `TargetDistanceBeforeLerpSquared`, extra squared distance where following stops.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-centertitlebackgrounddiameter-2" /><code>{"float CenterTitleBackgroundDiameter { get; }"}</code> | <span className="api-desc">Size of the centre title background.</span> |
| <Link id="m-centertitlebackgroundprefab-2" /><code>{"GameObject CenterTitleBackgroundPrefab { get; }"}</code> | <span className="api-desc">Background shown behind the centre title.</span> |
| <Link id="m-centertitlemaxcharacters-2" /><code>{"int CenterTitleMaxCharacters { get; }"}</code> | <span className="api-desc">Most characters in a centre title.</span> |
| <Link id="m-centertitlemaxlines-2" /><code>{"int CenterTitleMaxLines { get; }"}</code> | <span className="api-desc">Most lines in a centre title.</span> |
| <Link id="m-displaytitlesincenter-2" /><code>{"bool DisplayTitlesInCenter { get; }"}</code> | <span className="api-desc">Whether bubble titles show in the middle of the menu.</span> |
| <Link id="m-islerpingtowardshandposition-2" /><code>{"bool IsLerpingTowardsHandPosition { get; }"}</code> | <span className="api-desc">Whether the menu moves to follow the hand.</span> |
| <Link id="m-maxanglebeforelerp-2" /><code>{"float MaxAngleBeforeLerp { get; }"}</code> | <span className="api-desc">Angle the controller can turn before the menu starts following.</span> |
| <Link id="m-maxbubbledistancesquared-2" /><code>{"float MaxBubbleDistanceSquared { get; }"}</code> | <span className="api-desc">Squared distance a hand must be within to pick a bubble, probably.</span> |
| <Link id="m-menuprefabdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" MenuPrefabDefinition { get; }"}</code> | <span className="api-desc">Pooled prefab for the menu.</span> |
| <Link id="m-positionlerpspeedoverdistance-2" /><code>{"AnimationCurve PositionLerpSpeedOverDistance { get; }"}</code> | <span className="api-desc">Follow speed by distance from the hand.</span> |
| <Link id="m-rotationlerpspeed-2" /><code>{"float RotationLerpSpeed { get; }"}</code> | <span className="api-desc">How fast the menu turns to follow the controller.</span> |
| <Link id="m-spawnnestedradius-2" /><code>{"float SpawnNestedRadius { get; }"}</code> | <span className="api-desc">Radius for bubbles of a nested menu.</span> |
| <Link id="m-spawnradius-2" /><code>{"float SpawnRadius { get; }"}</code> | <span className="api-desc">Radius bubbles are placed at around the menu centre.</span> |
| <Link id="m-targetdistancebeforelerpsquared-2" /><code>{"float TargetDistanceBeforeLerpSquared { get; }"}</code> | <span className="api-desc">Squared distance at which the menu stops following, probably.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-maxdistancebeforelerp-2" /><code>{"float MaxDistanceBeforeLerp(int nestedLevel)"}</code> | <span className="api-desc">Squared distance the hand can move before the menu follows; grows with nesting level.</span> |
| <Link id="m-playselectmenueffects" /><code>{"void PlaySelectMenuEffects("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | <span className="api-desc">Plays the active or inactive select sound and effect for a bubble.</span> |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuSettings`:

<div className="api-used-in">

[`QuickAccessMenuController.Settings`](/mod/game-api/types/alta-player/quickaccessmenucontroller#m-settings).

</div>
