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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`BiomeSettings`](/game-api/types/alta-world-generation/biomesettings), [`GeneralSettings`](/game-api/types/alta-world-generation/generalsettings), [`StreamingSettings`](/game-api/types/alta-world-generation/streamingsettings)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CaveSettings()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static T instance"}</code> | Cached asset behind `Instance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static T Instance { get; }"}</code> | The settings asset of this type, loaded from `Resources/Caves/Settings` on first use. |
