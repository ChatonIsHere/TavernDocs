---
title: "GlobalSettingsInstaller.PlatformConstrainedInstallers"
description: "A group of PlatformSpecificScriptableObjectInstaller assets that only run on the chosen platforms, and optionally in the editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettingsInstaller.PlatformConstrainedInstallers

A **private class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A group of `PlatformSpecificScriptableObjectInstaller` assets that only run on the chosen platforms, and optionally in the editor.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`GlobalSettingsInstaller`](/mod/game-api/types/assembly-other/globalsettingsinstaller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformConstrainedInstallers()"}</code> | <span className="api-desc">Creates a `GlobalSettingsInstaller.PlatformConstrainedInstallers` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-installers" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformspecificscriptableobjectinstaller">{"PlatformSpecificScriptableObjectInstaller"}</Link>{"[] installers"}</code> | <span className="api-desc">The installers in this group.</span> |
| <Link id="m-isvalidineditor" /><code>{"private bool isValidInEditor"}</code> | <span className="api-desc">Whether the group also runs in the Unity editor.</span> |
| <Link id="m-validplatforms" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" validPlatforms"}</code> | <span className="api-desc">Platforms the group runs on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | <span className="api-desc">Runs each installer in the group if the current runtime platform matches or the editor is allowed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidifineditor" /><code>{"private bool IsValidIfInEditor()"}</code> | <span className="api-desc">True in the editor when `isValidInEditor` is set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlatformConstrainedInstallers`:

<div className="api-used-in">

[`GlobalSettingsInstaller.platformSpecificInstallers`](/mod/game-api/types/assembly-other/globalsettingsinstaller#m-platformspecificinstallers).

</div>
