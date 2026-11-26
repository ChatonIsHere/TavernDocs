---
title: "CaveSettings<T>"
description: "Base for the cave settings assets (GeneralSettings, BiomeSettings, StreamingSettings)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveSettings&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Caves`.

Base for the cave settings assets (`GeneralSettings`, `BiomeSettings`, `StreamingSettings`). Each is a singleton loaded from `Resources/Caves/Settings`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`BiomeSettings`](/mod/game-api/types/alta-world-generation/biomesettings), [`GeneralSettings`](/mod/game-api/types/alta-world-generation/generalsettings), [`StreamingSettings`](/mod/game-api/types/alta-world-generation/streamingsettings)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CaveSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static T instance"}</code> | <span className="api-desc">Cached asset behind `Instance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static T Instance { get; }"}</code> | <span className="api-desc">The settings asset of this type, loaded from `Resources/Caves/Settings` on first use.</span> |
