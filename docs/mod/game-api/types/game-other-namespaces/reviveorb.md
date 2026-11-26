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
| <Link id="m-ctor" /><code>{"ReviveOrb()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activity" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" activity"}</code> | Server: the revive activity this orb adds progress to. |
| <Link id="m-activityprogress" /><code>{"private float activityProgress"}</code> | Progress one orb adds: 1 over the number of orbs spawned. |
| <Link id="m-downedplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" downedPlayer"}</code> | The downed player this orb belongs to. |
| <Link id="m-hasswappedstate" /><code>{"private bool hasSwappedState"}</code> | True once the orb has been delivered to the beam; it can't re-enter after that. |
| <Link id="m-isinbeam" /><code>{"private bool isInBeam"}</code> | True while the orb is inside the downed player's gravestone trigger. |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> | Position the out of bounds distance is measured from. |
| <Link id="m-orbpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" orbPickup"}</code> | The orb's pickup. |
| <Link id="m-orbtransitionsfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" orbTransitionSfx"}</code> | Sound played when the orb swaps to the downed player's side. |
| <Link id="m-orbvisualstotoggle" /><code>{"private GameObject[] orbVisualsToToggle"}</code> | Objects shown only while the orb is grabbable for the local player. |
| <Link id="m-scaleanimation" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/animatescaleovertime">{"AnimateScaleOverTime"}</Link>{" scaleAnimation"}</code> | Scale animation played when the orb is released outside the beam. |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> | Downed state settings: orb count and force release distance. |
| <Link id="m-syncdownedplayeridentifier" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncDownedPlayerIdentifier"}</code> | Sync that sends the downed player's identifier to clients. |
| <Link id="m-syncorbconsumedbybeacon" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbConsumedByBeacon"}</code> | Sync that tells clients the orb reached the beam. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumebydownedplayer" /><code>{"void ConsumeByDownedPlayer()"}</code> | Server, on release: if the downed player let go of it, adds revive progress and destroys the orb. |
| <Link id="m-linkreviveactiontoactivity" /><code>{"void LinkReviveActionToActivity("}<Link to="/mod/game-api/types/game-other-namespaces/revivecompletableactivity">{"ReviveCompletableActivity"}</Link>{" completableActivity, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" newDownedPlayer, "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" newSettings, Vector3 newOrbOrigin)"}</code> | Sets the settings and origin. Server: also links the revive activity and downed player and syncs the player to clients. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Destroys the orb if its downed player disconnects. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks the action orb's grab and release, stops the orb being saved, and sets up the two syncs. |
| <Link id="m-validatepickupinteraction" /><code>{"protected override void ValidatePickupInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Stops downed players grabbing the orb unless it's theirs. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canconsumeorb" /><code>{"private bool CanConsumeOrb()"}</code> | Server: true if the downed player was the last to hold the orb. |
| <Link id="m-checkenterorexitbeacon" /><code>{"private void CheckEnterOrExitBeacon(GameObject playerGrave, bool isEnteringBeam)"}</code> | Marks the orb as in the beam when it enters this downed player's gravestone trigger, until it has swapped state. |
| <Link id="m-consumebybeacon" /><code>{"private void ConsumeByBeacon()"}</code> | Server: flips the orb to the downed player's side, moves it within their reach and tells clients. |
| <Link id="m-invertorbinteractability" /><code>{"private void InvertOrbInteractability()"}</code> | Client: makes the orb grabbable only for the downed player. |
| <Link id="m-isorbconnectedtoplayer" /><code>{"private bool IsOrbConnectedToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | True if the player is this orb's downed player. |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Server: force drops the orb if the holder moves too far from the orb's origin. |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release: makes it kinematic, plays the scale animation if outside the beam, and consumes it if inside. |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: starts watching the holder's movement for the out of bounds check. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Checks whether the orb entered its downed player's gravestone beam. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Checks whether the orb left its downed player's gravestone beam. |
| <Link id="m-playtransitionsoundeffect" /><code>{"private void PlayTransitionSoundEffect()"}</code> | Plays the transition sound on the orb. |
| <Link id="m-setactionorbhapticfeedback" /><code>{"private void SetActionOrbHapticFeedback()"}</code> | Client: haptics on the orb only for the downed player. |
| <Link id="m-setisorbinteractable" /><code>{"private void SetIsOrbInteractable(bool isInteractable)"}</code> | Client: turns the pickup and its visuals on or off. |
| <Link id="m-syncdownedplayeridentifiertoclient" /><code>{"private void SyncDownedPlayerIdentifierToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int downedPlayerIdentifier)"}</code> | Client receive: stores the downed player and makes the orb grabbable for everyone except them. |
| <Link id="m-syncorbconsumedbybeacon-2" /><code>{"private void SyncOrbConsumedByBeacon("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client receive: plays the transition sound and swaps who can grab the orb. |
| <Link id="m-tryconsumeorbinbeacon" /><code>{"private void TryConsumeOrbInBeacon()"}</code> | Server: calls `ConsumeByBeacon` if the orb was released in the beam. |
| <Link id="m-tryscaleorb" /><code>{"private void TryScaleOrb()"}</code> | Plays the scale animation once unless the orb is in the beam. |

</details>

## Used in

Members of other types that take, return or hold a `ReviveOrb`:

[`ReviveCompletableActivity.MakeOrbReachableForDownedPlayer`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-makeorbreachablefordownedplayer).
