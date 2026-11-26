---
title: "GlobalSettings"
description: "Base of every global settings asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettings

An **abstract class** in `Alta.Global.Runtime`, `Alta.Global`.

Base of every global settings asset. The generic `GlobalSettings<T>` gives each one a static `Instance`; the settings installer calls `InitializeInstance` at startup.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GlobalSettings<T>`](/game-api/types/assembly-other/globalsettings-t), [`GlobalSettings<TConcrete, TInterface>`](/game-api/types/assembly-other/globalsettings-tconcrete-tinterface)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected GlobalSettings()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeinstance" /><code>{"abstract void InitializeInstance()"}</code> | Makes this asset the type's static `Instance`. Called by `GlobalSettingsInstaller` and `GlobalSettingsInitializer`. |

## Used in

Members of other types that take, return or hold a `GlobalSettings`:

[`GlobalSettingsInstaller.globalSettings`](/game-api/types/assembly-other/globalsettingsinstaller#m-globalsettings), [`GlobalSettingsInitializer.settings`](/game-api/types/assembly-other/globalsettingsinitializer#m-settings).
