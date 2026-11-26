---
title: "ReviveOrb"
description: "One of the orbs spawned around a downed player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveOrb

A **class** in `Root.Township`, `Township.Downed`.

One of the orbs spawned around a downed player. Another player carries it into the gravestone's beam, then the downed player grabs and releases it to add revive progress. Server decides; clients show who can grab it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`EventOrb`](/mod/game-api/types/game-other-namespaces/eventorb)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> | <span className="api-desc">Server: the revive activity this orb adds progress to.</span> |
| <Link id="m-activityprogress" /><code>{"private float activityProgress"}</code> | <span className="api-desc">Progress one orb adds: 1 over the number of orbs spawned.</span> |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> | <span className="api-desc">The downed player this orb belongs to.</span> |
| <Link id="m-hasswappedstate" /><code>{"private bool hasSwappedState"}</code> | <span className="api-desc">True once the orb has been delivered to the beam; it can't re-enter after that.</span> |
| <Link id="m-isinbeam" /><code>{"private bool isInBeam"}</code> | <span className="api-desc">True while the orb is inside the downed player's gravestone trigger.</span> |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> | <span className="api-desc">Position the out of bounds distance is measured from.</span> |
| <Link id="m-orbpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" orbPickup"}</code> | <span className="api-desc">The orb's pickup.</span> |
| <Link id="m-orbtransitionsfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" orbTransitionSfx"}</code> | <span className="api-desc">Sound played when the orb swaps to the downed player's side.</span> |
| <Link id="m-orbvisualstotoggle" /><code>{"private GameObject[] orbVisualsToToggle"}</code> | <span className="api-desc">Objects shown only while the orb is grabbable for the local player.</span> |
| <Link id="m-scaleanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" scaleAnimation"}</code> | <span className="api-desc">Scale animation played when the orb is released outside the beam.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> | <span className="api-desc">Downed state settings: orb count and force release distance.</span> |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> | <span className="api-desc">Sync that sends the downed player's identifier to clients.</span> |
| <Link id="m-syncorbconsumedbybeacon" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbConsumedByBeacon"}</code> | <span className="api-desc">Sync that tells clients the orb reached the beam.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumebydownedplayer" /><code>{"void ConsumeByDownedPlayer()"}</code> | <span className="api-desc">Server, on release: if the downed player let go of it, adds revive progress and destroys the orb.</span> |
| <Link id="m-linkreviveactiontoactivity" /><code>{"void LinkReviveActionToActivity("}<Link to="/mod/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" completableActivity, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newDownedPlayer, "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" newSettings, Vector3 newOrbOrigin)"}</code> | <span className="api-desc">Sets the settings and origin. Server: also links the revive activity and downed player and syncs the player to clients.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Destroys the orb if its downed player disconnects.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks the action orb's grab and release, stops the orb being saved, and sets up the two syncs.</span> |
| <Link id="m-validatepickupinteraction" /><code>{"protected override void ValidatePickupInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Stops downed players grabbing the orb unless it's theirs.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canconsumeorb" /><code>{"private bool CanConsumeOrb()"}</code> | <span className="api-desc">Server: true if the downed player was the last to hold the orb.</span> |
| <Link id="m-checkenterorexitbeacon" /><code>{"private void CheckEnterOrExitBeacon(GameObject playerGrave, bool isEnteringBeam)"}</code> | <span className="api-desc">Marks the orb as in the beam when it enters this downed player's gravestone trigger, until it has swapped state.</span> |
| <Link id="m-consumebybeacon" /><code>{"private void ConsumeByBeacon()"}</code> | <span className="api-desc">Server: flips the orb to the downed player's side, moves it within their reach and tells clients.</span> |
| <Link id="m-invertorbinteractability" /><code>{"private void InvertOrbInteractability()"}</code> | <span className="api-desc">Client: makes the orb grabbable only for the downed player.</span> |
| <Link id="m-isorbconnectedtoplayer" /><code>{"private bool IsOrbConnectedToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">True if the player is this orb's downed player.</span> |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Server: force drops the orb if the holder moves too far from the orb's origin.</span> |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release: makes it kinematic, plays the scale animation if outside the beam, and consumes it if inside.</span> |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: starts watching the holder's movement for the out of bounds check.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Checks whether the orb entered its downed player's gravestone beam.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Checks whether the orb left its downed player's gravestone beam.</span> |
| <Link id="m-playtransitionsoundeffect" /><code>{"private void PlayTransitionSoundEffect()"}</code> | <span className="api-desc">Plays the transition sound on the orb.</span> |
| <Link id="m-setactionorbhapticfeedback" /><code>{"private void SetActionOrbHapticFeedback()"}</code> | <span className="api-desc">Client: haptics on the orb only for the downed player.</span> |
| <Link id="m-setisorbinteractable" /><code>{"private void SetIsOrbInteractable(bool isInteractable)"}</code> | <span className="api-desc">Client: turns the pickup and its visuals on or off.</span> |
| <Link id="m-syncdownedplayeridentifiertoclient" /><code>{"private void SyncDownedPlayerIdentifierToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> | <span className="api-desc">Client receive: stores the downed player and makes the orb grabbable for everyone except them.</span> |
| <Link id="m-syncorbconsumedbybeacon-2" /><code>{"private void SyncOrbConsumedByBeacon("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client receive: plays the transition sound and swaps who can grab the orb.</span> |
| <Link id="m-tryconsumeorbinbeacon" /><code>{"private void TryConsumeOrbInBeacon()"}</code> | <span className="api-desc">Server: calls `ConsumeByBeacon` if the orb was released in the beam.</span> |
| <Link id="m-tryscaleorb" /><code>{"private void TryScaleOrb()"}</code> | <span className="api-desc">Plays the scale animation once unless the orb is in the beam.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ReviveOrb`:

<div className="api-used-in">

[`ReviveCompletableActivity.MakeOrbReachableForDownedPlayer`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-makeorbreachablefordownedplayer).

</div>
