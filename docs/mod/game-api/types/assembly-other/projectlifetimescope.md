---
title: "ProjectLifetimeScope"
description: "The root VContainer dependency injection scope for the whole game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

The root VContainer dependency injection scope for the whole game. Runs first (execution order -32000), survives scene loads, and only one may exist.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/mod/game-api/types/assembly-other/abstractaltalifetimescope)
- **Attributes** `DefaultExecutionOrder`
- **Documented in** [Event buses and services](/mod/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProjectLifetimeScope()"}</code> | <span className="api-desc">Creates a `ProjectLifetimeScope` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticsinstaller" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/analyticsinstaller">{"AnalyticsInstaller"}</Link>{" analyticsInstaller"}</code> | <span className="api-desc">Private: installs the analytics services.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/projectlifetimescope">{"ProjectLifetimeScope"}</Link>{" instance"}</code> | <span className="api-desc">Private: the one live scope, used to reject duplicates.</span> |
| <Link id="m-loadingscreenfactory" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/loadingscreenfactory">{"LoadingScreenFactory"}</Link>{" loadingScreenFactory"}</code> | <span className="api-desc">Private: the loading screen factory bound into the container.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Private: logger for startup and quit messages.</span> |
| <Link id="m-settingsinstaller" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/globalsettingsinstaller">{"GlobalSettingsInstaller"}</Link>{" settingsInstaller"}</code> | <span className="api-desc">Private: installs the global settings assets.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Destroys itself if another instance exists, otherwise becomes the root scope, builds the container and hooks application quit.</span> |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> | <span className="api-desc">Registers the game's services: static project registrations, the disposer, global settings, analytics, the loading screen factory and the Township event bus.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> | <span className="api-desc">Private: starts `OnApplicationQuitRoutine` when the application quits.</span> |
| <Link id="m-onapplicationquitroutine" /><code>{"private IEnumerator OnApplicationQuitRoutine() (iterator)"}</code> | <span className="api-desc">Private: at the end of the frame, disposes the container and destroys the scope's object.</span> |
| <Link id="m-registeraltalifecycle" /><code>{"private static void RegisterAltaLifecycle(IContainerBuilder builder)"}</code> | <span className="api-desc">Private: binds `IDisposer` to a new `Disposer` for each request.</span> |
| <Link id="m-setbuildversionforeditorruntime" /><code>{"private static void SetBuildVersionForEditorRuntime()"}</code> | <span className="api-desc">Private: empty in this build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ProjectLifetimeScope`:

<div className="api-used-in">

[`DependencyInjectionEditorInitializer.projectLifetimeScope`](/mod/game-api/types/assembly-other/dependencyinjectioneditorinitializer#m-projectlifetimescope), [`DependencyInjectionInitializer.projectLifetimeScope`](/mod/game-api/types/assembly-other/dependencyinjectioninitializer#m-projectlifetimescope).

</div>
