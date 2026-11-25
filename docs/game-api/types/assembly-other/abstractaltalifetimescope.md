---
title: "AbstractAltaLifetimeScope"
description: "abstract class AbstractAltaLifetimeScope in Alta.LifetimeScopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractAltaLifetimeScope

An **abstract class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `LifetimeScope`
- **Derived types** [`ApplicationLifetimeScope`](/game-api/types/assembly-other/applicationlifetimescope), [`GameLifetimeScope`](/game-api/types/assembly-other/gamelifetimescope), [`GameObjectLifetimeScope`](/game-api/types/assembly-other/gameobjectlifetimescope), [`MainMenuVrLifetimeScope`](/game-api/types/assembly-other/mainmenuvrlifetimescope), [`ProjectLifetimeScope`](/game-api/types/assembly-other/projectlifetimescope)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AbstractAltaLifetimeScope()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-profilesession" /><code>{"private "}<Link to="/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" profileSession"}</code> |  |
| <Link id="m-typename" /><code>{"private string typeName"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logstartup" /><code>{"void LogStartup()"}</code> |  |
| <Link id="m-configure" /><code>{"protected sealed override void Configure(IContainerBuilder builder)"}</code> |  |
| <Link id="m-configurescope" /><code>{"protected abstract void ConfigureScope(IContainerBuilder builder)"}</code> |  |
| <Link id="m-startprofiling" /><code>{"private void StartProfiling()"}</code> |  |
| <Link id="m-stopprofiling" /><code>{"private void StopProfiling()"}</code> |  |
