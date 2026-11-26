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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IMicroTutorialSystem`](/mod/game-api/types/game-other-namespaces/imicrotutorialsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSystem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clientcontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Client-side controller for tutorial steps.</span> |
| <Link id="m-servercontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Server-side controller that starts tutorials and reports analytics.</span> |
| <Link id="m-settings" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" Settings { get; private set; }"}</code> | <span className="api-desc">The injected `MicroTutorialSystemSettings`.</span> |
| <Link id="m-synccontroller" /><code><Link to="/mod/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" SyncController { get; private set; }"}</code> | <span className="api-desc">Sends tutorial messages over this entity between server and clients.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController, "}<Link to="/mod/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> | <span className="api-desc">VContainer injection: stores the settings and creates the tutorial factory, sync, client and server controllers.</span> |

## Used in

Members of other types that take, return or hold a `MicroTutorialSystem`:

<div className="api-used-in">

[`GameLifetimeScope.microTutorialSystem`](/mod/game-api/types/assembly-other/gamelifetimescope#m-microtutorialsystem).

</div>
