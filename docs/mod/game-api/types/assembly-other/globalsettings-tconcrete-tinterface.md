---
title: "GlobalSettings<TConcrete, TInterface>"
description: "Variant of GlobalSettings that exposes its instance through an interface."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalSettings&lt;TConcrete, TInterface&gt;

A **class** in `Alta.Global.Runtime`, `Alta.Global`.

Variant of `GlobalSettings` that exposes its instance through an interface. Nothing in this build derives from it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`GlobalSettings`](/mod/game-api/types/assembly-other/globalsettings)
- **Documented in** [Settings and files](/mod/game-api/console-and-utilities/settings-and-files#globalsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static TConcrete instance"}</code> | The stored instance. |
| <Link id="m-mockoverride" /><code>{"private static TInterface mockOverride"}</code> | Mock set by `SetMock`; unused. |
| <Link id="m-startedcount" /><code>{"private static int startedCount"}</code> | Unused. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static TInterface Instance { get; }"}</code> | The instance cast to the interface. Ignores any mock set with `SetMock`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeinstance" /><code>{"sealed override void InitializeInstance()"}</code> | Stores this asset as the instance. |
| <Link id="m-setmock" /><code>{"static void SetMock(TInterface mock)"}</code> | Stores a mock, but `Instance` never reads it. |
