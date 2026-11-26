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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MicroTutorialFaceOrbSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MicroTutorialFaceOrbSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MicroTutorialFaceOrbSaveData`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFaceOrb()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> | <span className="api-desc">The action orb the player grabs.</span> |
| <Link id="m-distancebeforeorbisforcereleased" /><code>{"private float distanceBeforeOrbIsForceReleased"}</code> | <span className="api-desc">How far the holder can move from the origin before the orb is dropped.</span> |
| <Link id="m-isforcereleaseenabled" /><code>{"private bool isForceReleaseEnabled"}</code> | <span className="api-desc">Whether the orb is dropped when the holder walks away.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-microtutorialsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" microTutorialSettings"}</code> | <span className="api-desc">The tutorial an entry orb starts. Saved.</span> |
| <Link id="m-microtutorialsystem" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> | <span className="api-desc">Injected micro tutorial system.</span> |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> | <span className="api-desc">Position the orb returns to, set from its spawn position.</span> |
| <Link id="m-orbtype" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialfaceorbtype">{"MicroTutorialFaceOrbType"}</Link>{" orbType"}</code> | <span className="api-desc">Entry or exit. Saved.</span> |
| <Link id="m-syncactivation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivation"}</code> | <span className="api-desc">Method sync for the activation message.</span> |
| <Link id="m-syncorborigin" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbOrigin"}</code> | <span className="api-desc">Method sync for the orb origin.</span> |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSettings"}</code> | <span className="api-desc">Method sync for the orb type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method syncs for activation (SyncA), settings (SyncB) and orb origin (SyncC).</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the orb type to the joining player.</span> |
| <Link id="m-settutorialsettings" /><code>{"void SetTutorialSettings("}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" newMicroTutorialSettings)"}</code> | <span className="api-desc">Sets which tutorial the orb starts and makes it an entry orb. Used by `MicroTutorialOrbInjector`.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Client: sends the activation to the server when the orb is validly let go.</span> |
| <Link id="m-activationsync" /><code>{"private async void ActivationSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server, when reading: starts the tutorial for an entry orb or despawns it for an exit orb.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup and let-go events and the entity's initialization and scene destruction.</span> |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" injectedMicroTutorialSystem)"}</code> | <span className="api-desc">VContainer injection of the micro tutorial system.</span> |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Client: force-drops the orb if the holder moves further than `distanceBeforeOrbIsForceReleased` from its origin.</span> |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload)"}</code> | <span className="api-desc">Clears the entity's initialization listeners.</span> |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops watching the holder's position.</span> |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Client: starts watching the holder's position when force release is on.</span> |
| <Link id="m-resetposition" /><code>{"private void ResetPosition("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> | <span className="api-desc">Stores the orb's spawn position as its origin, sets it as the orb target and syncs it.</span> |
| <Link id="m-starttutorial" /><code>{"private async Task StartTutorial("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Spawns the configured tutorial for the player through the server controller, after null checks.</span> |
| <Link id="m-syncorborigin-2" /><code>{"private void SyncOrbOrigin("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body for the orb origin.</span> |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body for the orb type. Skipped in local test.</span> |

</details>
