---
title: "MigrateSoundEffectAttribute"
description: "Prefab apply attribute naming a sound effect field to migrate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MigrateSoundEffectAttribute

A **class** in `Root.Township`, no namespace.

Prefab apply attribute naming a sound effect field to migrate. In this build `HandleApply` does nothing.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`PrefabApplyAttribute`](/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MigrateSoundEffectAttribute(string field)"}</code> | Creates a `MigrateSoundEffectAttribute` from `field`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-field" /><code>{"private string field"}</code> | Name of the field to migrate. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | Always returns false. |
