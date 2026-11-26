---
title: "GameLifetimeScope"
description: "VContainer scope for the game scene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer scope for the game scene. Registers the respawn system and, outside the tutorial scene, the domain controller and micro tutorial system.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/mod/game-api/types/assembly-other/abstractaltalifetimescope)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameLifetimeScope()"}</code> | <span className="api-desc">Creates a `GameLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domaincontroller" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/domaincontroller">{"DomainController"}</Link>{" domainController"}</code> | <span className="api-desc">The scene's domain controller.</span> |
| <Link id="m-istutorialscene" /><code>{"private bool isTutorialScene"}</code> | <span className="api-desc">True for the tutorial scene, which uses a default respawn provider and no micro tutorials.</span> |
| <Link id="m-microtutorialsystem" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsystem">{"MicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> | <span className="api-desc">The scene's micro tutorial system.</span> |
| <Link id="m-respawnsystem" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/respawnsystem">{"RespawnSystem"}</Link>{" respawnSystem"}</code> | <span className="api-desc">The scene's respawn system.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">Runs the static game setup, then registers respawn and micro tutorial services.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-registermicrotutorialdependencies" /><code>{"private void RegisterMicroTutorialDependencies(IContainerBuilder builder)"}</code> | <span className="api-desc">Outside the tutorial scene, binds `IDomainController` and `IMicroTutorialSystem` to the scene objects.</span> |
| <Link id="m-registerrespawnsystemdependencies" /><code>{"private void RegisterRespawnSystemDependencies(IContainerBuilder builder)"}</code> | <span className="api-desc">In the tutorial scene, binds a default respawn position provider; otherwise binds the scene's `RespawnSystem`.</span> |

</details>
