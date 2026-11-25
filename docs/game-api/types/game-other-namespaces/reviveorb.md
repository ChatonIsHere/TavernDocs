---
title: "ReviveOrb"
description: "class ReviveOrb in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveOrb

A **class** in `Root.Township`, `Township.Downed`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`EventOrb`](/game-api/types/game-other-namespaces/eventorb)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ReviveOrb()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> |
| <Link id="m-activityprogress" /><code>{"private float activityProgress"}</code> |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> |
| <Link id="m-hasswappedstate" /><code>{"private bool hasSwappedState"}</code> |
| <Link id="m-isinbeam" /><code>{"private bool isInBeam"}</code> |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> |
| <Link id="m-orbpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" orbPickup"}</code> |
| <Link id="m-orbtransitionsfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" orbTransitionSfx"}</code> |
| <Link id="m-orbvisualstotoggle" /><code>{"private GameObject[] orbVisualsToToggle"}</code> |
| <Link id="m-scaleanimation" /><code>{"private "}<Link to="/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" scaleAnimation"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> |
| <Link id="m-syncorbconsumedbybeacon" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbConsumedByBeacon"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-consumebydownedplayer" /><code>{"void ConsumeByDownedPlayer()"}</code> |
| <Link id="m-linkreviveactiontoactivity" /><code>{"void LinkReviveActionToActivity("}<Link to="/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" completableActivity, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newDownedPlayer, "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" newSettings, Vector3 newOrbOrigin)"}</code> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-validatepickupinteraction" /><code>{"protected override void ValidatePickupInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |

<details>
<summary>17 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-canconsumeorb" /><code>{"private bool CanConsumeOrb()"}</code> |
| <Link id="m-checkenterorexitbeacon" /><code>{"private void CheckEnterOrExitBeacon(GameObject playerGrave, bool isEnteringBeam)"}</code> |
| <Link id="m-consumebybeacon" /><code>{"private void ConsumeByBeacon()"}</code> |
| <Link id="m-invertorbinteractability" /><code>{"private void InvertOrbInteractability()"}</code> |
| <Link id="m-isorbconnectedtoplayer" /><code>{"private bool IsOrbConnectedToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |
| <Link id="m-playtransitionsoundeffect" /><code>{"private void PlayTransitionSoundEffect()"}</code> |
| <Link id="m-setactionorbhapticfeedback" /><code>{"private void SetActionOrbHapticFeedback()"}</code> |
| <Link id="m-setisorbinteractable" /><code>{"private void SetIsOrbInteractable(bool isInteractable)"}</code> |
| <Link id="m-syncdownedplayeridentifiertoclient" /><code>{"private void SyncDownedPlayerIdentifierToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> |
| <Link id="m-syncorbconsumedbybeacon-2" /><code>{"private void SyncOrbConsumedByBeacon("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-tryconsumeorbinbeacon" /><code>{"private void TryConsumeOrbInBeacon()"}</code> |
| <Link id="m-tryscaleorb" /><code>{"private void TryScaleOrb()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ReviveOrb`:

[`ReviveCompletableActivity.MakeOrbReachableForDownedPlayer`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-makeorbreachablefordownedplayer).
