---
title: "SaveStructureAttribute"
description: "Marks a save data class with the component type it saves and its version number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SaveStructureAttribute

A **class** in `Root.Township`, no namespace.

Marks a save data class with the component type it saves and its version number. Old versions migrate to newer ones. A class can carry several.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SaveStructureAttribute(Type type, uint version)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | The component type this save data belongs to. |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | The save data version for that type. |
