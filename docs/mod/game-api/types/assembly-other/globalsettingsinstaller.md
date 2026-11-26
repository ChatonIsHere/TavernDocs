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
| <Link id="m-ctor" /><code>{"GlobalSettingsInstaller()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalsettings" /><code>{"private List<"}<Link to="/mod/game-api/types/assembly-other/globalsettings">{"GlobalSettings"}</Link>{"> globalSettings"}</code> | Global settings assets to initialise and register. |
| <Link id="m-platformspecificinstallers" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers">{"GlobalSettingsInstaller.PlatformConstrainedInstallers"}</Link>{"[] platformSpecificInstallers"}</code> | Groups of installers, each limited to some platforms. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | Runs the installers for the current platform, then initialises each global settings asset and registers it as its own type. |

## Used in

Members of other types that take, return or hold a `GlobalSettingsInstaller`:

[`ProjectLifetimeScope.settingsInstaller`](/mod/game-api/types/assembly-other/projectlifetimescope#m-settingsinstaller).
