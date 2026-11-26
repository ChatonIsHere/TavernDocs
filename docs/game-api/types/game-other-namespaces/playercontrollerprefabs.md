---
title: "PlayerControllerPrefabs"
description: "Global settings asset (\"Player Controller Prefabs\") holding the player controller prefabs for each platform and mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerPrefabs

A **class** in `Root.Township`, `ATT.PlayerStates`.

Global settings asset ("Player Controller Prefabs") holding the player controller prefabs for each platform and mode. Get it with `GlobalSettings<PlayerControllerPrefabs>.Instance`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<PlayerControllerPrefabs>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PlayerControllerPrefabs`](/game-api/types/game-other-namespaces/playercontrollerprefabs), [`PlayerControllerPrefabs.Create`](/game-api/types/game-other-namespaces/playercontrollerprefabs-create)
- **Nested types** [`Create`](/game-api/types/game-other-namespaces/playercontrollerprefabs-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerPrefabs()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocamplayer" /><code>{"private "}<Link to="/game-api/types/global-a-b/autocamplayer">{"AutoCamPlayer"}</Link>{" autoCamPlayer"}</code> | Auto cam controller prefab. |
| <Link id="m-customizationcontroller" /><code>{"private "}<Link to="/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" customizationController"}</code> | Backing field for `CustomizationController`. |
| <Link id="m-flycamplayer" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" flyCamPlayer"}</code> | Fly cam controller prefab. |
| <Link id="m-locomotionlesscontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" locomotionLessController"}</code> | Backing field for `LocomotionLessController`. |
| <Link id="m-mainmenucontroller" /><code>{"private "}<Link to="/game-api/types/global-m-o/mainmenuplayercontroller">{"MainMenuPlayerController"}</Link>{" mainMenuController"}</code> | VR main menu controller prefab. |
| <Link id="m-mainmenucontrollerflat" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" mainMenuControllerFlat"}</code> | Flat-screen main menu controller prefab. |
| <Link id="m-vrplayer" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" vrPlayer"}</code> | Backing field for `VrPlayer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationcontroller-2" /><code><Link to="/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" CustomizationController { get; }"}</code> | Controller prefab used in the character customization room. |
| <Link id="m-locomotionlesscontroller-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" LocomotionLessController { get; }"}</code> | Controller prefab with no locomotion. |
| <Link id="m-vrplayer-2" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" VrPlayer { get; }"}</code> | The normal VR player character prefab. Used when respawning a player, for example after a micro tutorial. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" GetController("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | Returns the in-game controller prefab for a player mode: fly cam, auto cam, or the VR player otherwise. |
| <Link id="m-getmenucontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" GetMenuController("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | Returns the main menu controller prefab: the flat one for fly and auto cam modes, the VR one otherwise. |
