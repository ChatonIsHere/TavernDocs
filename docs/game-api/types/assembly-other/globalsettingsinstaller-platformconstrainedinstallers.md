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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Nested in** [`GlobalSettingsInstaller`](/game-api/types/assembly-other/globalsettingsinstaller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformConstrainedInstallers()"}</code> | Creates a `GlobalSettingsInstaller.PlatformConstrainedInstallers` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-installers" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformspecificscriptableobjectinstaller">{"PlatformSpecificScriptableObjectInstaller"}</Link>{"[] installers"}</code> | The installers in this group. |
| <Link id="m-isvalidineditor" /><code>{"private bool isValidInEditor"}</code> | Whether the group also runs in the Unity editor. |
| <Link id="m-validplatforms" /><code>{"private "}<Link to="/game-api/types/assembly-other/platformflags">{"PlatformFlags"}</Link>{" validPlatforms"}</code> | Platforms the group runs on. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"void Install(IContainerBuilder builder)"}</code> | Runs each installer in the group if the current runtime platform matches or the editor is allowed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvalidifineditor" /><code>{"private bool IsValidIfInEditor()"}</code> | True in the editor when `isValidInEditor` is set. |

</details>

## Used in

Members of other types that take, return or hold a `PlatformConstrainedInstallers`:

[`GlobalSettingsInstaller.platformSpecificInstallers`](/game-api/types/assembly-other/globalsettingsinstaller#m-platformspecificinstallers).
