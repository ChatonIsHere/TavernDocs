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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorialSystem`](/mod/game-api/types/game-other-namespaces/microtutorialsystem)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientcontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" { get; }"}</code> | <span className="api-desc">Runs tutorials on the local client.</span> |
| <Link id="m-servercontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" { get; }"}</code> | <span className="api-desc">Server: tracks each player's tutorials and records completion.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Global settings for the tutorial system.</span> |
| <Link id="m-synccontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" SyncController { get; }"}</code> | <span className="api-desc">Sends tutorial state between server and clients.</span> |

## Used in

Members of other types that take, return or hold a `IMicroTutorialSystem`:

<div className="api-used-in">

[`MicroTutorial.MicroTutorial`](/mod/game-api/types/game-other-namespaces/microtutorial#m-ctor), [`MicroTutorial.tutorialSystem`](/mod/game-api/types/game-other-namespaces/microtutorial#m-tutorialsystem), [`MicroTutorialFaceOrb.Inject`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-inject), [`MicroTutorialFaceOrb.microTutorialSystem`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-microtutorialsystem), [`MicroTutorialFactory.MicroTutorialFactory`](/mod/game-api/types/game-other-namespaces/microtutorialfactory#m-ctor), [`MicroTutorialFactory.microTutorialSystem`](/mod/game-api/types/game-other-namespaces/microtutorialfactory#m-microtutorialsystem), [`MicroTutorialModule.GetTutorialSystem`](/mod/game-api/types/game-other-namespaces/microtutorialmodule#m-gettutorialsystem), [`ServerStepInstance.ServerStepInstance`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-ctor), [`ServerStepInstance.tutorialSystem`](/mod/game-api/types/game-other-namespaces/serverstepinstance#m-tutorialsystem).

</div>
