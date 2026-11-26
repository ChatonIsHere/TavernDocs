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
| <Link id="m-ctor" /><code>{"protected AbstractAltaLifetimeScope()"}</code> | <span className="api-desc">Creates an `AbstractAltaLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-profilesession" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/profilingsession">{"ProfilingSession"}</Link>{" profileSession"}</code> | <span className="api-desc">Profiling session for the configure step.</span> |
| <Link id="m-typename" /><code>{"private string typeName"}</code> | <span className="api-desc">The scope's type name, used to name the profiling session.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logstartup" /><code>{"void LogStartup()"}</code> | <span className="api-desc">Logs the scope's GameObject name and its parent scope.</span> |
| <Link id="m-configure" /><code>{"protected sealed override void Configure(IContainerBuilder builder)"}</code> | <span className="api-desc">Sealed VContainer hook: makes sure the auto-inject list exists and runs `ConfigureScope`, with profiling around it.</span> |
| <Link id="m-configurescope" /><code>{"protected abstract void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">Implemented by subclasses to register their bindings.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startprofiling" /><code>{"private void StartProfiling()"}</code> | <span className="api-desc">Debug builds: starts a profiling session and logs startup.</span> |
| <Link id="m-stopprofiling" /><code>{"private void StopProfiling()"}</code> | <span className="api-desc">Debug builds: ends the profiling session and logs its report.</span> |

</details>
