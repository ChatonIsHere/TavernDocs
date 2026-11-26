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
| <Link id="m-ctor" /><code>{"GlobalSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static TConcrete instance"}</code> | <span className="api-desc">The stored instance.</span> |
| <Link id="m-mockoverride" /><code>{"private static TInterface mockOverride"}</code> | <span className="api-desc">Mock set by `SetMock`; unused.</span> |
| <Link id="m-startedcount" /><code>{"private static int startedCount"}</code> | <span className="api-desc">Unused.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static TInterface Instance { get; }"}</code> | <span className="api-desc">The instance cast to the interface. Ignores any mock set with `SetMock`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeinstance" /><code>{"sealed override void InitializeInstance()"}</code> | <span className="api-desc">Stores this asset as the instance.</span> |
| <Link id="m-setmock" /><code>{"static void SetMock(TInterface mock)"}</code> | <span className="api-desc">Stores a mock, but `Instance` never reads it.</span> |
