---
title: "MicroTutorialSystem"
description: "Network entity that holds the micro tutorial controllers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialSystem

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Network entity that holds the micro tutorial controllers. VContainer injects it, and it builds the sync, client and server controllers.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IMicroTutorialSystem`](/game-api/types/game-other-namespaces/imicrotutorialsystem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSystem()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientcontroller" /><code><Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" { get; private set; }"}</code> | Client-side controller for tutorial steps. |
| <Link id="m-servercontroller" /><code><Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" { get; private set; }"}</code> | Server-side controller that starts tutorials and reports analytics. |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" Settings { get; private set; }"}</code> | The injected `MicroTutorialSystemSettings`. |
| <Link id="m-synccontroller" /><code><Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" SyncController { get; private set; }"}</code> | Sends tutorial messages over this entity between server and clients. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" settings, "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | VContainer injection: stores the settings and creates the tutorial factory, sync, client and server controllers. |

## Used in

Members of other types that take, return or hold a `MicroTutorialSystem`:

[`GameLifetimeScope.microTutorialSystem`](/game-api/types/assembly-other/gamelifetimescope#m-microtutorialsystem).
