---
title: "SaveStructureAttribute"
description: "Marks a save data class with the component type it saves and its version number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveStructureAttribute

A **class** in `Root.Township`, the global namespace.

Marks a save data class with the component type it saves and its version number. Old versions migrate to newer ones. A class can carry several.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SaveStructureAttribute(Type type, uint version)"}</code> | <span className="api-desc">Creates a `SaveStructureAttribute` from `type` and `version`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | <span className="api-desc">The component type this save data belongs to.</span> |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | <span className="api-desc">The save data version for that type.</span> |
