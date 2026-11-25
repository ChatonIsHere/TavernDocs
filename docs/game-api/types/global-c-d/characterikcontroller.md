---
title: "CharacterIKController"
description: "class CharacterIKController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterIKController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterIKController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-charactercomponentcontrollers" /><code>{"private "}<Link to="/game-api/types/alta-player/charactercomponentcontrollercollection">{"CharacterComponentControllerCollection"}</Link>{" characterComponentControllers"}</code> |  |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> |  |
| <Link id="m-headtargetlocalparent" /><code>{"private Transform headTargetLocalParent"}</code> |  |
| <Link id="m-headtargetremoteparent" /><code>{"private Transform headTargetRemoteParent"}</code> |  |
| <Link id="m-headtargettransform" /><code>{"private SerializableTransform headTargetTransform"}</code> |  |
| <Link id="m-isautomaticallyfillingtargettransform" /><code>{"private bool isAutomaticallyFillingTargetTransform"}</code> |  |
| <Link id="m-lefthandtarget" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" leftHandTarget"}</code> |  |
| <Link id="m-lefthandtargetparent" /><code>{"private Transform leftHandTargetParent"}</code> |  |
| <Link id="m-lefthandtargettransform" /><code>{"private SerializableTransform leftHandTargetTransform"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> |  |
| <Link id="m-righthandtarget" /><code>{"private "}<Link to="/game-api/types/alta-player/handtargethandler">{"HandTargetHandler"}</Link>{" rightHandTarget"}</code> |  |
| <Link id="m-righthandtargetparent" /><code>{"private Transform rightHandTargetParent"}</code> |  |
| <Link id="m-righthandtargettransform" /><code>{"private SerializableTransform rightHandTargetTransform"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isikcontrolactive" /><code>{"bool IsIKControlActive { get; private set; }"}</code> |  |
| <Link id="m-shouldupdate" /><code>{"private bool ShouldUpdate { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-ikupdatesfinished" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" IKUpdatesFinished"}</code> |  |
| <Link id="m-preikupdates" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreIKUpdates"}</code> |  |
| <Link id="m-prerendercallback" /><code>{"event "}<Link to="/game-api/types/global-t-x/updatehandler">{"UpdateHandler"}</Link>{" PreRenderCallback"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableikcontrol" /><code>{"void DisableIKControl("}<Link to="/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-disableikcontrol-2" /><code>{"void DisableIKControl(out Transform leftHandTarget, out Transform rightHandTarget, "}<Link to="/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-enableikcontrol" /><code>{"void EnableIKControl("}<Link to="/game-api/types/global-i-l/ikcontrollsettings">{"IKControllSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-fixedupdateik" /><code>{"void FixedUpdateIK()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onbodyikfinished" /><code>{"void OnBodyIKFinished()"}</code> |  |
| <Link id="m-onpreikupdate" /><code>{"void OnPreIKUpdate()"}</code> |  |
| <Link id="m-setconstantghosthandvisibility" /><code>{"void SetConstantGhostHandVisibility(bool isAlwaysVisible)"}</code> |  |
| <Link id="m-updateik" /><code>{"void UpdateIK()"}</code> |  |
| <Link id="m-automaticallyfilltargettransforms" /><code>{"private void AutomaticallyFillTargetTransforms()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-syncwithremote" /><code>{"private void SyncWithRemote("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CharacterIKController`:

[`PlayerCharacter.ikController`](/game-api/types/alta-player/playercharacter#m-ikcontroller), [`PlayerCharacter.IKController`](/game-api/types/alta-player/playercharacter#m-ikcontroller-2), [`NetworkedIKBody.characterIKController`](/game-api/types/global-m-o/networkedikbody#m-characterikcontroller).
