---
title: "MicroTutorialFaceOrb"
description: "An action orb that starts a micro tutorial (entry orb) or leaves it (exit orb) when a player pulls it to their face and lets go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialFaceOrb

A **class** in `Root.Township`, `ATT.MicroTutorial`.

An action orb that starts a micro tutorial (entry orb) or leaves it (exit orb) when a player pulls it to their face and lets go. The client sends the activation and the server spawns or despawns the tutorial.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MicroTutorialFaceOrbSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MicroTutorialFaceOrbSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MicroTutorialFaceOrbSaveData`](/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFaceOrb()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> | The action orb the player grabs. |
| <Link id="m-distancebeforeorbisforcereleased" /><code>{"private float distanceBeforeOrbIsForceReleased"}</code> | How far the holder can move from the origin before the orb is dropped. |
| <Link id="m-isforcereleaseenabled" /><code>{"private bool isForceReleaseEnabled"}</code> | Whether the orb is dropped when the holder walks away. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-microtutorialsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" microTutorialSettings"}</code> | The tutorial an entry orb starts. Saved. |
| <Link id="m-microtutorialsystem" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> | Injected micro tutorial system. |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> | Position the orb returns to, set from its spawn position. |
| <Link id="m-orbtype" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialfaceorbtype">{"MicroTutorialFaceOrbType"}</Link>{" orbType"}</code> | Entry or exit. Saved. |
| <Link id="m-syncactivation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivation"}</code> | Method sync for the activation message. |
| <Link id="m-syncorborigin" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbOrigin"}</code> | Method sync for the orb origin. |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSettings"}</code> | Method sync for the orb type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method syncs for activation (SyncA), settings (SyncB) and orb origin (SyncC). |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the orb type to the joining player. |
| <Link id="m-settutorialsettings" /><code>{"void SetTutorialSettings("}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" newMicroTutorialSettings)"}</code> | Sets which tutorial the orb starts and makes it an entry orb. Used by `MicroTutorialOrbInjector`. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Client: sends the activation to the server when the orb is validly let go. |
| <Link id="m-activationsync" /><code>{"private async void ActivationSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server, when reading: starts the tutorial for an entry orb or despawns it for an exit orb. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup and let-go events and the entity's initialization and scene destruction. |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" injectedMicroTutorialSystem)"}</code> | VContainer injection of the micro tutorial system. |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Client: force-drops the orb if the holder moves further than `distanceBeforeOrbIsForceReleased` from its origin. |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload)"}</code> | Clears the entity's initialization listeners. |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops watching the holder's position. |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Client: starts watching the holder's position when force release is on. |
| <Link id="m-resetposition" /><code>{"private void ResetPosition("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> | Stores the orb's spawn position as its origin, sets it as the orb target and syncs it. |
| <Link id="m-starttutorial" /><code>{"private async Task StartTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Spawns the configured tutorial for the player through the server controller, after null checks. |
| <Link id="m-syncorborigin-2" /><code>{"private void SyncOrbOrigin("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body for the orb origin. |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body for the orb type. Skipped in local test. |

</details>
