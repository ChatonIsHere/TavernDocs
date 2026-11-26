---
title: "IMicroTutorialSystem"
description: "The micro tutorial system (short in-game tutorials), giving access to its client, server and sync controllers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMicroTutorialSystem

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

The micro tutorial system (short in-game tutorials), giving access to its client, server and sync controllers. Implemented by `MicroTutorialSystem` and bound in the game's dependency injection scope.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialsystem)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientcontroller" /><code><Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" { get; }"}</code> | Runs tutorials on the local client. |
| <Link id="m-servercontroller" /><code><Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" { get; }"}</code> | Server: tracks each player's tutorials and records completion. |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" Settings { get; }"}</code> | Global settings for the tutorial system. |
| <Link id="m-synccontroller" /><code><Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" SyncController { get; }"}</code> | Sends tutorial state between server and clients. |

## Used in

Members of other types that take, return or hold a `IMicroTutorialSystem`:

[`MicroTutorial.MicroTutorial`](/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorial.tutorialSystem`](/game-api/types/game-other-namespaces/microtutorial#m-tutorialsystem), [`MicroTutorialFaceOrb.Inject`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-inject), [`MicroTutorialFaceOrb.microTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-microtutorialsystem), [`MicroTutorialFactory.MicroTutorialFactory`](/game-api/types/game-other-namespaces/microtutorialfactory#m-ctor), [`MicroTutorialFactory.microTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialfactory#m-microtutorialsystem), [`MicroTutorialModule.GetTutorialSystem`](/game-api/types/game-other-namespaces/microtutorialmodule#m-gettutorialsystem), [`ServerStepInstance.ServerStepInstance`](/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`ServerStepInstance.tutorialSystem`](/game-api/types/game-other-namespaces/serverstepinstance#m-tutorialsystem).
