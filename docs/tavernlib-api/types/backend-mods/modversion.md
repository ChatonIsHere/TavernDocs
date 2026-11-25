---
title: "ModVersion"
description: "A struct in TavernLib, TavernLib.Backend.Mods."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModVersion

A **struct** in `TavernLib`, `TavernLib.Backend.Mods`.

A **struct** in `TavernLib`, `TavernLib.Backend.Mods`.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Inherits or implements** `IComparable<ModVersion>`
- **Derived types** [`ModVersion`](/tavernlib-api/types/backend-mods/modversion)
- **Attributes** `IsReadOnly`
- **Documented in** [ModVersion](/tavernlib-api/types/backend-mods/modversion), [Versions and parity](/tavernlib-api/mod-manager/versions-and-parity#modversion)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModVersion(int major, int minor, int patch)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> |  |
| <Link id="m-minor" /><code>{"int Minor { get; }"}</code> |  |
| <Link id="m-patch" /><code>{"int Patch { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compareto" /><code>{"int CompareTo("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" other)"}</code> |  |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> |  |
| <Link id="m-op-greaterthanorequal" /><code>{"static bool op_GreaterThanOrEqual("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> |  |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> |  |
| <Link id="m-op-lessthanorequal" /><code>{"static bool op_LessThanOrEqual("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> |  |
| <Link id="m-parse" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Parse(string v)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-tryparse" /><code>{"static bool TryParse(string v, out "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" result)"}</code> |  |
| <Link id="m-segment" /><code>{"private static int Segment(string v, string part)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ModVersion`:

[`ModSummary.Highest`](/tavernlib-api/types/backend-mods/modsummary#m-highest).
