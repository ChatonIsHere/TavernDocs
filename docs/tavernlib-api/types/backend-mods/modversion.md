---
title: "ModVersion"
description: "A mod version, exactly MAJOR.MINOR.PATCH in ASCII digits with no pre-release or build parts, compared by major, minor, then patch."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModVersion

A **struct** in `TavernLib`, `TavernLib.Backend.Mods`.

A mod version, exactly `MAJOR.MINOR.PATCH` in ASCII digits with no pre-release or build parts, compared by major, minor, then patch.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Inherits or implements** `IComparable<ModVersion>`
- **Derived types** [`ModVersion`](/tavernlib-api/types/backend-mods/modversion)
- **Attributes** `IsReadOnly`
- **Documented in** [ModVersion](/tavernlib-api/types/backend-mods/modversion), [Versions and parity](/tavernlib-api/mod-manager/versions-and-parity#modversion)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModVersion(int major, int minor, int patch)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> | The first number. |
| <Link id="m-minor" /><code>{"int Minor { get; }"}</code> | The second number. |
| <Link id="m-patch" /><code>{"int Patch { get; }"}</code> | The third number. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compareto" /><code>{"int CompareTo("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" other)"}</code> | Compares by major, then minor, then patch. |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | Compares two versions. |
| <Link id="m-op-greaterthanorequal" /><code>{"static bool op_GreaterThanOrEqual("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | Compares two versions. |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | Compares two versions. |
| <Link id="m-op-lessthanorequal" /><code>{"static bool op_LessThanOrEqual("}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | Compares two versions. |
| <Link id="m-parse" /><code>{"static "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Parse(string v)"}</code> | Parses three dot-separated digit runs after trimming spaces. Throws `ModManagerException` for anything else. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The version as `major.minor.patch`. |
| <Link id="m-tryparse" /><code>{"static bool TryParse(string v, out "}<Link to="/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" result)"}</code> | The same as `Parse`, returning false instead of throwing. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-segment" /><code>{"private static int Segment(string v, string part)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ModVersion`:

[`ModSummary.Highest`](/tavernlib-api/types/backend-mods/modsummary#m-highest).
