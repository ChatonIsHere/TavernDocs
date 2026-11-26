---
title: "GlobalSettingsInstaller"
description: "ScriptableObject that runs platform-specific installers and registers a list of GlobalSettings assets in a VContainer scope."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettingsInstaller

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

ScriptableObject that runs platform-specific installers and registers a list of `GlobalSettings` assets in a VContainer scope.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`PlatformConstrainedInstallers`](/mod/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalSettingsInstaller()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalsettings" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-other/globalsettings">{"GlobalSettings"}</Link>{"> globalSettings"}</code> | <span className="api-desc">Global settings assets to initialise and register.</span> |
| <Link id="m-platformspecificinstallers" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers">{"GlobalSettingsInstaller.PlatformConstrainedInstallers"}</Link>{"[] platformSpecificInstallers"}</code> | <span className="api-desc">Groups of installers, each limited to some platforms.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | <span className="api-desc">Runs the installers for the current platform, then initialises each global settings asset and registers it as its own type.</span> |

## Used in

Members of other types that take, return or hold a `GlobalSettingsInstaller`:

<div className="api-used-in">

[`ProjectLifetimeScope.settingsInstaller`](/mod/game-api/types/assembly-other/projectlifetimescope#m-settingsinstaller).

</div>
