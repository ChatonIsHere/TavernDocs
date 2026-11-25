---
title: "GlobalSettings<TConcrete, TInterface>"
description: "The game's design data as ScriptableObject assets: MenuSettings, NetworkingSettings, SmoothLocomotionSettings, PickupTypeSettings and many more."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettings&lt;TConcrete, TInterface&gt;

A **class** in `Alta.Global.Runtime`, `Alta.Global`.

The game's design data as `ScriptableObject` assets: `MenuSettings`, `NetworkingSettings`, `SmoothLocomotionSettings`, `PickupTypeSettings` and many more.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings`](/game-api/types/assembly-other/globalsettings)
- **Documented in** [Settings and files](/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-instance" /><code>{"private static TConcrete instance"}</code> |
| <Link id="m-mockoverride" /><code>{"private static TInterface mockOverride"}</code> |
| <Link id="m-startedcount" /><code>{"private static int startedCount"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance-2" /><code>{"static TInterface Instance { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initializeinstance" /><code>{"sealed override void InitializeInstance()"}</code> |
| <Link id="m-setmock" /><code>{"static void SetMock(TInterface mock)"}</code> |
