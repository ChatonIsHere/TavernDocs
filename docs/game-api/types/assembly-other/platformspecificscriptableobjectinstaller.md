---
title: "PlatformSpecificScriptableObjectInstaller"
description: "Base ScriptableObject for an installer that registers platform-specific services."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformSpecificScriptableObjectInstaller

A **class** in `Alta.LifetimeScopes`, `Alta.ATT.LifetimeScopes`.

Base ScriptableObject for an installer that registers platform-specific services. Run by `GlobalSettingsInstaller`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WindowsGlobalSettingsInstaller`](/game-api/types/assembly-other/windowsglobalsettingsinstaller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlatformSpecificScriptableObjectInstaller()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"virtual void Install(IContainerBuilder builder)"}</code> | Registers this installer's services. The base version does nothing. |

## Used in

Members of other types that take, return or hold a `PlatformSpecificScriptableObjectInstaller`:

[`GlobalSettingsInstaller.PlatformConstrainedInstallers.installers`](/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers#m-installers).
