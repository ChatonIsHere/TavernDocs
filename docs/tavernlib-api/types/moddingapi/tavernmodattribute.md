---
title: "TavernModAttribute"
description: "Put on a mod's MelonMod class to label which side it's for."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TavernModAttribute

A **class** in `TavernLib`, `TavernLib.ModdingApi`.

Put on a mod's `MelonMod` class to label which side it's for. A label only: where a mod loads is decided by its manifest's targets.

- **Listed in** [TavernLib.ModdingApi](/tavernlib-api/types/moddingapi)
- **Inherits or implements** `Attribute`
- **Attributes** `Usage`
- **Documented in** [TavernModAttribute](/tavernlib-api/types/moddingapi/tavernmodattribute), [TavernLib API](/tavernlib-api/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TavernModAttribute("}<Link to="/tavernlib-api/types/moddingapi/modside">{"ModSide"}</Link>{" side)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-side" /><code><Link to="/tavernlib-api/types/moddingapi/modside">{"ModSide"}</Link>{" Side { get; }"}</code> | The side given to the constructor. |
