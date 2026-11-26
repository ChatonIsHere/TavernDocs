---
title: "AbstractAltaLifetimeScope"
description: "Base for the game's VContainer lifetime scopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractAltaLifetimeScope

An **abstract class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Base for the game's VContainer lifetime scopes. Subclasses register their bindings in `ConfigureScope`; debug builds log and profile the setup.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `LifetimeScope`
- **Derived types** [`ApplicationLifetimeScope`](/mod/game-api/types/assembly-other/applicationlifetimescope), [`GameLifetimeScope`](/mod/game-api/types/assembly-other/gamelifetimescope), [`GameObjectLifetimeScope`](/mod/game-api/types/assembly-other/gameobjectlifetimescope), [`MainMenuVrLifetimeScope`](/mod/game-api/types/assembly-other/mainmenuvrlifetimescope), [`ProjectLifetimeScope`](/mod/game-api/types/assembly-other/projectlifetimescope)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AbstractAltaLifetimeScope()"}</code> | Creates an `AbstractAltaLifetimeScope` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-profilesession" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" profileSession"}</code> | Profiling session for the configure step. |
| <Link id="m-typename" /><code>{"private string typeName"}</code> | The scope's type name, used to name the profiling session. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logstartup" /><code>{"void LogStartup()"}</code> | Logs the scope's GameObject name and its parent scope. |
| <Link id="m-configure" /><code>{"protected sealed override void Configure(IContainerBuilder builder)"}</code> | Sealed VContainer hook: makes sure the auto-inject list exists and runs `ConfigureScope`, with profiling around it. |
| <Link id="m-configurescope" /><code>{"protected abstract void ConfigureScope(IContainerBuilder builder)"}</code> | Implemented by subclasses to register their bindings. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startprofiling" /><code>{"private void StartProfiling()"}</code> | Debug builds: starts a profiling session and logs startup. |
| <Link id="m-stopprofiling" /><code>{"private void StopProfiling()"}</code> | Debug builds: ends the profiling session and logs its report. |

</details>
