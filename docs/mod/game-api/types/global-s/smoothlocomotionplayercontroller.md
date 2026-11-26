---
title: "SmoothLocomotionPlayerController"
description: "Base VR player controller for players that move with thumbstick (smooth) locomotion, through a SmoothLocomotion component."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotionPlayerController

An **abstract class** in `Root.Township`, the global namespace.

Base VR player controller for players that move with thumbstick (smooth) locomotion, through a `SmoothLocomotion` component.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`VRPlayerController`](/mod/game-api/types/global-t-x/vrplayercontroller)
- **Derived types** [`PlayerCharacter`](/mod/game-api/types/alta-player/playercharacter), [`CustomizationPlayerController`](/mod/game-api/types/global-c-d/customizationplayercontroller), [`MainMenuPlayerController`](/mod/game-api/types/global-m-o/mainmenuplayercontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SmoothLocomotionPlayerController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-smoothlocomotion" /><code>{"private "}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" smoothLocomotion"}</code> | Backing field for `SmoothLocomotion`, the component that moves the player with the stick. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodycenter" /><code>{"override Vector3 BodyCenter { get; }"}</code> | Body centre as worked out by the smooth locomotion component. |
| <Link id="m-realfeetposition" /><code>{"override Vector3 RealFeetPosition { get; }"}</code> | Point under the player at the controller's height: the locomotion position for the local player, the head position for others. |
| <Link id="m-smoothlocomotion-2" /><code><Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" "}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" { get; }"}</code> | The smooth locomotion component. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadforchunk" /><code>{"protected override void LoadForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Also makes smooth locomotion wait for the chunk to finish loading. |

## Used in

Members of other types that take, return or hold a `SmoothLocomotionPlayerController`:

[`DepthCheckLocoCheck.checkingPlayers`](/mod/game-api/types/global-c-d/depthchecklococheck#m-checkingplayers), [`DepthCheckLocoCheck.Enter`](/mod/game-api/types/global-c-d/depthchecklococheck#m-enter), [`DepthCheckLocoCheck.EnterDepth`](/mod/game-api/types/global-c-d/depthchecklococheck#m-enterdepth), [`DepthCheckLocoCheck.GetDepth`](/mod/game-api/types/global-c-d/depthchecklococheck#m-getdepth), [`DepthCheckLocoCheck.Leave`](/mod/game-api/types/global-c-d/depthchecklococheck#m-leave), [`DepthCheckLocoCheck.LeaveDepth`](/mod/game-api/types/global-c-d/depthchecklococheck#m-leavedepth), [`EnterLocomotionCheck.Enter`](/mod/game-api/types/global-e-h/enterlocomotioncheck#m-enter), [`EnterLocomotionCheck.Leave`](/mod/game-api/types/global-e-h/enterlocomotioncheck#m-leave), [`LocomotionModifier.OnPlayerEntered`](/mod/game-api/types/global-i-l/locomotionmodifier#m-onplayerentered), [`LocomotionModifier.OnPlayerLeft`](/mod/game-api/types/global-i-l/locomotionmodifier#m-onplayerleft), [`LocomotionModifier.playerMap`](/mod/game-api/types/global-i-l/locomotionmodifier#m-playermap), [`LocomotionModifier.RemovePlayer`](/mod/game-api/types/global-i-l/locomotionmodifier#m-removeplayer-2), [`LocomotionModifierAction.Begin`](/mod/game-api/types/global-i-l/locomotionmodifieraction#m-begin), [`LocomotionModifierAction.Finish`](/mod/game-api/types/global-i-l/locomotionmodifieraction#m-finish), [`LocomotionModifierCheck.Enter`](/mod/game-api/types/global-i-l/locomotionmodifiercheck#m-enter), [`LocomotionModifierCheck.Leave`](/mod/game-api/types/global-i-l/locomotionmodifiercheck#m-leave), [`LocomotionModifierVolumeTrigger.PlayerEntered`](/mod/game-api/types/global-i-l/locomotionmodifiervolumetrigger#m-playerentered), [`LocomotionModifierVolumeTrigger.PlayerLeft`](/mod/game-api/types/global-i-l/locomotionmodifiervolumetrigger#m-playerleft), [`MovingPlatform.PlayerEntered`](/mod/game-api/types/global-m-o/movingplatform#m-playerentered), [`MovingPlatform.PlayerLeft`](/mod/game-api/types/global-m-o/movingplatform#m-playerleft), [`PowerStinger.LerpMove`](/mod/game-api/types/global-p/powerstinger#m-lerpmove), [`SendToSafetyLocoAction.Begin`](/mod/game-api/types/global-s/sendtosafetylocoaction#m-begin), [`SendToSafetyLocoAction.Finish`](/mod/game-api/types/global-s/sendtosafetylocoaction#m-finish), [`SetStepSoundOverrideLocoAction.Begin`](/mod/game-api/types/global-s/setstepsoundoverridelocoaction#m-begin), [`SetStepSoundOverrideLocoAction.Finish`](/mod/game-api/types/global-s/setstepsoundoverridelocoaction#m-finish), [`SmoothLocomotion.character`](/mod/game-api/types/global-s/smoothlocomotion#m-character), [`SmoothLocomotion.Character`](/mod/game-api/types/global-s/smoothlocomotion#m-character-2), [`SpeedModifierLocoAction.Begin`](/mod/game-api/types/global-s/speedmodifierlocoaction#m-begin), [`SpeedModifierLocoAction.Finish`](/mod/game-api/types/global-s/speedmodifierlocoaction#m-finish), [`VolumeTrigger.GetPlayer`](/mod/game-api/types/global-t-x/volumetrigger#m-getplayer), [`VolumeTrigger.PlayerEntered`](/mod/game-api/types/global-t-x/volumetrigger#m-playerentered), [`VolumeTrigger.PlayerLeft`](/mod/game-api/types/global-t-x/volumetrigger#m-playerleft), [`VolumeTrigger.players`](/mod/game-api/types/global-t-x/volumetrigger#m-players).
