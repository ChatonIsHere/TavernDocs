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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`WindowsGlobalSettingsInstaller`](/mod/game-api/types/assembly-other/windowsglobalsettingsinstaller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformSpecificScriptableObjectInstaller()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-install" /><code>{"virtual void Install(IContainerBuilder builder)"}</code> | Registers this installer's services. The base version does nothing. |

## Used in

Members of other types that take, return or hold a `PlatformSpecificScriptableObjectInstaller`:

[`GlobalSettingsInstaller.PlatformConstrainedInstallers.installers`](/mod/game-api/types/assembly-other/globalsettingsinstaller-platformconstrainedinstallers#m-installers).
