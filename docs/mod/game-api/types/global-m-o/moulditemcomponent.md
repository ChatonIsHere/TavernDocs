---
title: "MouldItemComponent"
description: "Item component that marks an item as carrying a mould pattern."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldItemComponent

A **class** in `Root.Township`, the global namespace.

Item component that marks an item as carrying a mould pattern. The mould press reads it to set a blank `Mould`'s definition.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldItemComponent()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The mould definition this item applies.</span> |
