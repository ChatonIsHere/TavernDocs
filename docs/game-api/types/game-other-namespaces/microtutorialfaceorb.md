---
title: "MicroTutorialFaceOrb"
description: "class MicroTutorialFaceOrb in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialFaceOrb

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MicroTutorialFaceOrbSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MicroTutorialFaceOrbSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MicroTutorialFaceOrbSaveData`](/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFaceOrb()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionorb" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" actionOrb"}</code> |  |
| <Link id="m-distancebeforeorbisforcereleased" /><code>{"private float distanceBeforeOrbIsForceReleased"}</code> |  |
| <Link id="m-isforcereleaseenabled" /><code>{"private bool isForceReleaseEnabled"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-microtutorialsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" microTutorialSettings"}</code> |  |
| <Link id="m-microtutorialsystem" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> |  |
| <Link id="m-orborigin" /><code>{"private Vector3 orbOrigin"}</code> |  |
| <Link id="m-orbtype" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialfaceorbtype">{"MicroTutorialFaceOrbType"}</Link>{" orbType"}</code> |  |
| <Link id="m-syncactivation" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivation"}</code> |  |
| <Link id="m-syncorborigin" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOrbOrigin"}</code> |  |
| <Link id="m-syncsettings" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSettings"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-settutorialsettings" /><code>{"void SetTutorialSettings("}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" newMicroTutorialSettings)"}</code> |  |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> |  |
| <Link id="m-activationsync" /><code>{"private async void ActivationSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-inject" /><code>{"private void Inject("}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" injectedMicroTutorialSystem)"}</code> |  |
| <Link id="m-movedoutofbounds" /><code>{"private void MovedOutOfBounds("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-ondestroybyscene" /><code>{"private void OnDestroyByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity, bool isUnload)"}</code> |  |
| <Link id="m-oninteractionended" /><code>{"private void OnInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-oninteractionstarted" /><code>{"private void OnInteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-resetposition" /><code>{"private void ResetPosition("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> |  |
| <Link id="m-starttutorial" /><code>{"private async Task StartTutorial("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-syncorborigin-2" /><code>{"private void SyncOrbOrigin("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsettings-2" /><code>{"private void SyncSettings("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
