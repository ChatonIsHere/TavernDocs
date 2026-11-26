---
title: "CustomizationStateSettings"
description: "Settings for the character customization player state: the room prefab to spawn, where, and what happens when the player finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationStateSettings

A **class** in `Root.Township`, `ATT.PlayerStates`.

Settings for the character customization player state: the room prefab to spawn, where, and what happens when the player finishes.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`CustomizationStateSettings.Create`](/mod/game-api/types/game-other-namespaces/customizationstatesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/game-other-namespaces/customizationstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroomprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationRoomPrefab"}</code> | <span className="api-desc">Backing field for `CustomizationRoomPrefab`, the character customization room that gets spawned.</span> |
| <Link id="m-fadeinduration" /><code>{"private float fadeInDuration"}</code> | <span className="api-desc">Backing field for `FadeInDuration` (5 seconds by default).</span> |
| <Link id="m-finishcustomizationaction" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" finishCustomizationAction"}</code> | <span className="api-desc">Backing field for `FinishCustomizationAction`, the game action run when customization is finished.</span> |
| <Link id="m-isskippingcustomization" /><code>{"private bool isSkippingCustomization"}</code> | <span className="api-desc">Backing field for `IsSkippingCustomization`. When set, the customization room is skipped.</span> |
| <Link id="m-roomposition" /><code>{"private Vector3 roomPosition"}</code> | <span className="api-desc">Backing field for `RoomPosition`, where the room is placed.</span> |
| <Link id="m-roomrotation" /><code>{"private Vector3 roomRotation"}</code> | <span className="api-desc">Backing field for `RoomRotation`, the room's rotation as Euler angles.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroomprefab-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationRoomPrefab { get; }"}</code> | <span className="api-desc">The customization room prefab.</span> |
| <Link id="m-fadeinduration-2" /><code>{"float FadeInDuration { get; }"}</code> | <span className="api-desc">Seconds to fade in.</span> |
| <Link id="m-finishcustomizationaction-2" /><code><Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" FinishCustomizationAction { get; }"}</code> | <span className="api-desc">Game action run when customization is finished.</span> |
| <Link id="m-isskippingcustomization-2" /><code>{"bool IsSkippingCustomization { get; }"}</code> | <span className="api-desc">When true, customization is skipped.</span> |
| <Link id="m-roomposition-2" /><code>{"Vector3 RoomPosition { get; }"}</code> | <span className="api-desc">Where the room is placed.</span> |
| <Link id="m-roomrotation-2" /><code>{"Vector3 RoomRotation { get; }"}</code> | <span className="api-desc">Room rotation as Euler angles.</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">`CustomizationState`.</span> |

## Used in

Members of other types that take, return or hold a `CustomizationStateSettings`:

<div className="api-used-in">

[`CustomizationState.Settings`](/mod/game-api/types/alta-player/customizationstate#m-settings), [`CustomizationPlayerController.settings`](/mod/game-api/types/global-c-d/customizationplayercontroller#m-settings).

</div>
