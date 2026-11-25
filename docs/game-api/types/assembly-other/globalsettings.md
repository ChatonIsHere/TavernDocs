---
title: "GlobalSettings"
description: "The game's design data as ScriptableObject assets: MenuSettings, NetworkingSettings, SmoothLocomotionSettings, PickupTypeSettings and many more."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettings

An **abstract class** in `Alta.Global.Runtime`, `Alta.Global`.

The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GlobalSettings<T>`](/game-api/types/assembly-other/globalsettings-t), [`GlobalSettings<TConcrete, TInterface>`](/game-api/types/assembly-other/globalsettings-tconcrete-tinterface)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected GlobalSettings()"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeinstance" /><code>{"abstract void InitializeInstance()"}</code> |

## Used in

Members of other types that take, return or hold a `GlobalSettings`:

[`GlobalSettingsInstaller.globalSettings`](/game-api/types/assembly-other/globalsettingsinstaller#m-globalsettings), [`GlobalSettingsInitializer.settings`](/game-api/types/assembly-other/globalsettingsinitializer#m-settings).
