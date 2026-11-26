---
title: "CharacterIKController"
description: "Runs a player character's IK (body following head and hands) and lets it be turned off, for example for out-of-body moments, with the change synced to other..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterIKController

A **class** in `Root.Township`, the global namespace.

Runs a player character's IK (body following head and hands) and lets it be turned off, for example for out-of-body moments, with the change synced to other players. On every player character.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterIKController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-charactercomponentcontrollers" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" characterComponentControllers"}</code> | <span className="api-desc">The IK component controllers updated by `FixedUpdateIK` and `UpdateIK`.</span> |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | <span className="api-desc">Transform the head IK follows.</span> |
| <Link id="m-headtargetlocalparent" /><code>{"private Transform headTargetLocalParent"}</code> | <span className="api-desc">Parent for the head target when this is the local player.</span> |
| <Link id="m-headtargetremoteparent" /><code>{"private Transform headTargetRemoteParent"}</code> | <span className="api-desc">Parent for the head target when this is a remote player.</span> |
| <Link id="m-headtargettransform" /><code>{"private SerializableTransform headTargetTransform"}</code> | <span className="api-desc">Saved local transform restored on the head target when IK is enabled.</span> |
| <Link id="m-isautomaticallyfillingtargettransform" /><code>{"private bool isAutomaticallyFillingTargetTransform"}</code> | <span className="api-desc">Inspector button flag that triggers `AutomaticallyFillTargetTransforms`.</span> |
| <Link id="m-lefthandtarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" leftHandTarget"}</code> | <span className="api-desc">Left hand IK target handler.</span> |
| <Link id="m-lefthandtargetparent" /><code>{"private Transform leftHandTargetParent"}</code> | <span className="api-desc">Parent restored on the left hand target when IK is enabled.</span> |
| <Link id="m-lefthandtargettransform" /><code>{"private SerializableTransform leftHandTargetTransform"}</code> | <span className="api-desc">Saved local transform restored on the left hand target when IK is enabled.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | <span className="api-desc">The player character this controller drives.</span> |
| <Link id="m-righthandtarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" rightHandTarget"}</code> | <span className="api-desc">Right hand IK target handler.</span> |
| <Link id="m-righthandtargetparent" /><code>{"private Transform rightHandTargetParent"}</code> | <span className="api-desc">Parent restored on the right hand target when IK is enabled.</span> |
| <Link id="m-righthandtargettransform" /><code>{"private SerializableTransform rightHandTargetTransform"}</code> | <span className="api-desc">Saved local transform restored on the right hand target when IK is enabled.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isikcontrolactive" /><code>{"bool IsIKControlActive { get; private set; }"}</code> | <span className="api-desc">True while IK drives the hand and head targets.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shouldupdate" /><code>{"private bool ShouldUpdate { get; }"}</code> | <span className="api-desc">True when IK should run: the player is alive and, in the editor or on Quest for the local player, the app has input focus.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ikupdatesfinished" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" IKUpdatesFinished"}</code> | <span className="api-desc">Raised after the body IK has updated. Held items such as keys use it to reposition.</span> |
| <Link id="m-preikupdates" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreIKUpdates"}</code> | <span className="api-desc">Raised before the IK components update. Bow strings and ropes use it.</span> |
| <Link id="m-prerendercallback" /><code>{"event "}<Link to="/mod/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreRenderCallback"}</code> | <span className="api-desc">Raised after `IKUpdatesFinished`, once IK is done for the frame.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableikcontrol" /><code>{"void DisableIKControl("}<Link to="/mod/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Detaches the hand and head targets from IK, optionally disabling IK fully and showing ghost hands. Local players sync it to others.</span> |
| <Link id="m-disableikcontrol-2" /><code>{"void DisableIKControl(out Transform leftHandTarget, out Transform rightHandTarget, "}<Link to="/mod/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Detaches the hand and head targets from IK, optionally disabling IK fully and showing ghost hands. Local players sync it to others.</span> |
| <Link id="m-enableikcontrol" /><code>{"void EnableIKControl("}<Link to="/mod/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Puts the hand and head targets back under IK. Local players sync it to others. Logs an error if already active.</span> |
| <Link id="m-fixedupdateik" /><code>{"void FixedUpdateIK()"}</code> | <span className="api-desc">Runs the IK components' fixed update while the player is alive (and has input focus in the editor or on Quest).</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Registers the handler for IK enable and disable messages. The server relays them to other players.</span> |
| <Link id="m-onbodyikfinished" /><code>{"void OnBodyIKFinished()"}</code> | <span className="api-desc">Raises `IKUpdatesFinished` then `PreRenderCallback`, logging any handler errors.</span> |
| <Link id="m-onpreikupdate" /><code>{"void OnPreIKUpdate()"}</code> | <span className="api-desc">Raises `PreIKUpdates`, logging any handler errors.</span> |
| <Link id="m-setconstantghosthandvisibility" /><code>{"void SetConstantGhostHandVisibility(bool isAlwaysVisible)"}</code> | <span className="api-desc">Forces both ghost hands fully visible, or hands them back to their normal fading.</span> |
| <Link id="m-updateik" /><code>{"void UpdateIK()"}</code> | <span className="api-desc">Runs the IK components' update while the player is alive (and has input focus in the editor or on Quest).</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-automaticallyfilltargettransforms" /><code>{"private void AutomaticallyFillTargetTransforms()"}</code> | <span className="api-desc">Editor: saves the current hand and head target parents and transforms so IK can be restored later.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Marks IK control active and hooks the component controllers' pre and post update events.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Marks the component controllers as local.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: runs `AutomaticallyFillTargetTransforms` when its inspector button is pressed.</span> |
| <Link id="m-syncwithremote" /><code>{"private void SyncWithRemote("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handles an IK controller message: enables or disables IK to match, and the server relays it to the other players in range.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CharacterIKController`:

<div className="api-used-in">

[`PlayerCharacter.ikController`](/mod/game-api/types/alta-player/playercharacter#m-ikcontroller), [`PlayerCharacter.IKController`](/mod/game-api/types/alta-player/playercharacter#m-ikcontroller-2), [`NetworkedIKBody.characterIKController`](/mod/game-api/types/global-m-o/networkedikbody#m-characterikcontroller).

</div>
