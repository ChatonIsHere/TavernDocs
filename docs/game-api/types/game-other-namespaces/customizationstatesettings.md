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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`CustomizationStateSettings.Create`](/game-api/types/game-other-namespaces/customizationstatesettings-create)
- **Nested types** [`Create`](/game-api/types/game-other-namespaces/customizationstatesettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationStateSettings()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroomprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationRoomPrefab"}</code> | Backing field for `CustomizationRoomPrefab`, the character customization room that gets spawned. |
| <Link id="m-fadeinduration" /><code>{"private float fadeInDuration"}</code> | Backing field for `FadeInDuration` (5 seconds by default). |
| <Link id="m-finishcustomizationaction" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" finishCustomizationAction"}</code> | Backing field for `FinishCustomizationAction`, the game action run when customization is finished. |
| <Link id="m-isskippingcustomization" /><code>{"private bool isSkippingCustomization"}</code> | Backing field for `IsSkippingCustomization`. When set, the customization room is skipped. |
| <Link id="m-roomposition" /><code>{"private Vector3 roomPosition"}</code> | Backing field for `RoomPosition`, where the room is placed. |
| <Link id="m-roomrotation" /><code>{"private Vector3 roomRotation"}</code> | Backing field for `RoomRotation`, the room's rotation as Euler angles. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationroomprefab-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" CustomizationRoomPrefab { get; }"}</code> | The customization room prefab. |
| <Link id="m-fadeinduration-2" /><code>{"float FadeInDuration { get; }"}</code> | Seconds to fade in. |
| <Link id="m-finishcustomizationaction-2" /><code><Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" FinishCustomizationAction { get; }"}</code> | Game action run when customization is finished. |
| <Link id="m-isskippingcustomization-2" /><code>{"bool IsSkippingCustomization { get; }"}</code> | When true, customization is skipped. |
| <Link id="m-roomposition-2" /><code>{"Vector3 RoomPosition { get; }"}</code> | Where the room is placed. |
| <Link id="m-roomrotation-2" /><code>{"Vector3 RoomRotation { get; }"}</code> | Room rotation as Euler angles. |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | `CustomizationState`. |

## Used in

Members of other types that take, return or hold a `CustomizationStateSettings`:

[`CustomizationState.Settings`](/game-api/types/alta-player/customizationstate#m-settings), [`CustomizationPlayerController.settings`](/game-api/types/global-c-d/customizationplayercontroller#m-settings).
