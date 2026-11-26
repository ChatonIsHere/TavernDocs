---
title: "MigrateSoundEffectAttribute"
description: "Prefab apply attribute naming a sound effect field to migrate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MigrateSoundEffectAttribute

A **class** in `Root.Township`, the global namespace.

Prefab apply attribute naming a sound effect field to migrate. In this build `HandleApply` does nothing.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PrefabApplyAttribute`](/mod/game-api/types/assembly-other/prefabapplyattribute)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MigrateSoundEffectAttribute(string field)"}</code> | <span className="api-desc">Creates a `MigrateSoundEffectAttribute` from `field`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-field" /><code>{"private string field"}</code> | <span className="api-desc">Name of the field to migrate.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleapply" /><code>{"override bool HandleApply(Component component, FieldInfo field, GameObject prefab)"}</code> | <span className="api-desc">Always returns false.</span> |
