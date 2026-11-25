---
title: "SpawnModifier<T>"
description: "abstract class SpawnModifier<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnModifier&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`NetworkEntityModifiers`](/game-api/types/global-m-o/networkentitymodifiers), [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint), [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal), [`SpawnModifierSpawnParameters`](/game-api/types/global-s/spawnmodifierspawnparameters)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnModifier()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-safename" /><code>{"protected string safeName"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"abstract void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref T point, ref float weight)"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> |  |
