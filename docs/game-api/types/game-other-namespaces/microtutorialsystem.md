---
title: "MicroTutorialSystem"
description: "class MicroTutorialSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialSystem

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IMicroTutorialSystem`](/game-api/types/game-other-namespaces/imicrotutorialsystem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSystem()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-clientcontroller" /><code><Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/clientcontroller">{"ClientController"}</Link>{" { get; private set; }"}</code> |
| <Link id="m-servercontroller" /><code><Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/servercontroller">{"ServerController"}</Link>{" { get; private set; }"}</code> |
| <Link id="m-settings" /><code><Link to="/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" Settings { get; private set; }"}</code> |
| <Link id="m-synccontroller" /><code><Link to="/game-api/types/game-other-namespaces/isynccontroller">{"ISyncController"}</Link>{" SyncController { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-inject" /><code>{"void Inject("}<Link to="/game-api/types/game-other-namespaces/microtutorialsystemsettings">{"MicroTutorialSystemSettings"}</Link>{" settings, "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController, "}<Link to="/game-api/types/assembly-other/ianalyticsservice">{"IAnalyticsService"}</Link>{" analyticsService)"}</code> |

## Used in

Members of other types that take, return or hold a `MicroTutorialSystem`:

[`GameLifetimeScope.microTutorialSystem`](/game-api/types/assembly-other/gamelifetimescope#m-microtutorialsystem).
