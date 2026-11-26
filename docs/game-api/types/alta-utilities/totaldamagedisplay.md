---
title: "TotalDamageDisplay"
description: "Live data display showing DamageDisplayer.TotalDamage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TotalDamageDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Live data display showing `DamageDisplayer.TotalDamage`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TotalDamageDisplay()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | "Total Damage". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | Returns the total damage as text. |
