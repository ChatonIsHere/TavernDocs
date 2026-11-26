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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<PlayerControllerPrefabs>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`PlayerControllerPrefabs`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs), [`PlayerControllerPrefabs.Create`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs-create)
- **Nested types** [`Create`](/mod/game-api/types/game-other-namespaces/playercontrollerprefabs-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerPrefabs()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocamplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/autocamplayer">{"AutoCamPlayer"}</Link>{" autoCamPlayer"}</code> | <span className="api-desc">Auto cam controller prefab.</span> |
| <Link id="m-customizationcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" customizationController"}</code> | <span className="api-desc">Backing field for `CustomizationController`.</span> |
| <Link id="m-flycamplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycamplayer">{"FlyCamPlayer"}</Link>{" flyCamPlayer"}</code> | <span className="api-desc">Fly cam controller prefab.</span> |
| <Link id="m-locomotionlesscontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" locomotionLessController"}</code> | <span className="api-desc">Backing field for `LocomotionLessController`.</span> |
| <Link id="m-mainmenucontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/mainmenuplayercontroller">{"MainMenuPlayerController"}</Link>{" mainMenuController"}</code> | <span className="api-desc">VR main menu controller prefab.</span> |
| <Link id="m-mainmenucontrollerflat" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" mainMenuControllerFlat"}</code> | <span className="api-desc">Flat-screen main menu controller prefab.</span> |
| <Link id="m-vrplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" vrPlayer"}</code> | <span className="api-desc">Backing field for `VrPlayer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customizationcontroller-2" /><code><Link to="/mod/game-api/types/global-c-d/customizationplayercontroller">{"CustomizationPlayerController"}</Link>{" CustomizationController { get; }"}</code> | <span className="api-desc">Controller prefab used in the character customization room.</span> |
| <Link id="m-locomotionlesscontroller-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" LocomotionLessController { get; }"}</code> | <span className="api-desc">Controller prefab with no locomotion.</span> |
| <Link id="m-vrplayer-2" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" VrPlayer { get; }"}</code> | <span className="api-desc">The normal VR player character prefab. Used when respawning a player, for example after a micro tutorial.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" GetController("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | <span className="api-desc">Returns the in-game controller prefab for a player mode: fly cam, auto cam, or the VR player otherwise.</span> |
| <Link id="m-getmenucontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" GetMenuController("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | <span className="api-desc">Returns the main menu controller prefab: the flat one for fly and auto cam modes, the VR one otherwise.</span> |
