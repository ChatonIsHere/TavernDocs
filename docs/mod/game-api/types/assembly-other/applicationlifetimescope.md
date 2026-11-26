---
title: "ApplicationLifetimeScope"
description: "VContainer scope for the whole application."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApplicationLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

VContainer scope for the whole application. Registers the API client, login preferences, settings, authentication, player states, XR settings and platform services.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/mod/game-api/types/assembly-other/abstractaltalifetimescope)
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ApplicationLifetimeScope()"}</code> | Creates an `ApplicationLifetimeScope` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | Runs the static application setup, then registers player, platform and Alta platform services and the XR settings controller. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindserverhostcontroller" /><code>{"private static void BindServerHostController(IContainerBuilder builder)"}</code> | On a client build, binds `IServerHostController` to a `FakeHostController` singleton. Nothing is bound on a server. |
| <Link id="m-registeraltaplatformdependencies" /><code>{"private void RegisterAltaPlatformDependencies(IContainerBuilder builder)"}</code> | Registers Alta platform services (the server host controller). |
| <Link id="m-registerplatformdependencies" /><code>{"private void RegisterPlatformDependencies(IContainerBuilder builder)"}</code> | Binds the API client, `LoginPreferences`, `SettingsManager` and `AuthenticationUtility`, then the platform-specific ones. |
| <Link id="m-registerplatformspecificdependencies" /><code>{"private void RegisterPlatformSpecificDependencies(IContainerBuilder builder)"}</code> | Runs the `WindowsInstaller` on the builder. |
| <Link id="m-registerplayerdependencies" /><code>{"private void RegisterPlayerDependencies(IContainerBuilder builder)"}</code> | Binds `IPlayerStateFactory` to `PlayerStateFactory`. |

</details>
