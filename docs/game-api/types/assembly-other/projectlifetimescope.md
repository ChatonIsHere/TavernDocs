---
title: "ProjectLifetimeScope"
description: "class ProjectLifetimeScope in Alta.LifetimeScopes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProjectLifetimeScope

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`AbstractAltaLifetimeScope`](/game-api/types/assembly-other/abstractaltalifetimescope)
- **Attributes** `DefaultExecutionOrder`
- **Documented in** [Event buses and services](/game-api/console-and-utilities/event-buses-and-services)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProjectLifetimeScope()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-analyticsinstaller" /><code>{"private "}<Link to="/game-api/types/assembly-other/analyticsinstaller">{"AnalyticsInstaller"}</Link>{" analyticsInstaller"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/assembly-other/projectlifetimescope">{"ProjectLifetimeScope"}</Link>{" instance"}</code> |
| <Link id="m-loadingscreenfactory" /><code>{"private "}<Link to="/game-api/types/global-i-l/loadingscreenfactory">{"LoadingScreenFactory"}</Link>{" loadingScreenFactory"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-settingsinstaller" /><code>{"private "}<Link to="/game-api/types/assembly-other/globalsettingsinstaller">{"GlobalSettingsInstaller"}</Link>{" settingsInstaller"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
| <Link id="m-configurescope" /><code>{"protected override void ConfigureScope(IContainerBuilder builder)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onapplicationquit" /><code>{"private void OnApplicationQuit()"}</code> |
| <Link id="m-onapplicationquitroutine" /><code>{"private IEnumerator OnApplicationQuitRoutine() (iterator)"}</code> |
| <Link id="m-registeraltalifecycle" /><code>{"private static void RegisterAltaLifecycle(IContainerBuilder builder)"}</code> |
| <Link id="m-setbuildversionforeditorruntime" /><code>{"private static void SetBuildVersionForEditorRuntime()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ProjectLifetimeScope`:

[`DependencyInjectionEditorInitializer.projectLifetimeScope`](/game-api/types/assembly-other/dependencyinjectioneditorinitializer#m-projectlifetimescope), [`DependencyInjectionInitializer.projectLifetimeScope`](/game-api/types/assembly-other/dependencyinjectioninitializer#m-projectlifetimescope).
