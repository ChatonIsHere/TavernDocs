---
title: "GameLifetimeScope"
description: "class GameLifetimeScope in Alta.LifetimeScopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/game-api/types/assembly-other/abstractaltalifetimescope)
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameLifetimeScope()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-domaincontroller" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/domaincontroller">{"DomainController"}</Link>{" domainController"}</code> |
| <Link id="m-istutorialscene" /><code>{"private bool isTutorialScene"}</code> |
| <Link id="m-microtutorialsystem" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/microtutorialsystem">{"MicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> |
| <Link id="m-respawnsystem" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/respawnsystem">{"RespawnSystem"}</Link>{" respawnSystem"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-registermicrotutorialdependencies" /><code>{"private void RegisterMicroTutorialDependencies(IContainerBuilder builder)"}</code> |
| <Link id="m-registerrespawnsystemdependencies" /><code>{"private void RegisterRespawnSystemDependencies(IContainerBuilder builder)"}</code> |

</details>
