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

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Inherits or implements** `IComparable<ModVersion>`
- **Derived types** [`ModVersion`](/mod/tavernlib-api/types/backend-mods/modversion)
- **Attributes** `IsReadOnly`
- **Documented in** [Versions and parity](/mod/tavernlib-api/mod-manager/versions-and-parity#modversion)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModVersion(int major, int minor, int patch)"}</code> | <span className="api-desc">Creates a version from major, minor and patch numbers.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-major" /><code>{"int Major { get; }"}</code> | <span className="api-desc">The first number.</span> |
| <Link id="m-minor" /><code>{"int Minor { get; }"}</code> | <span className="api-desc">The second number.</span> |
| <Link id="m-patch" /><code>{"int Patch { get; }"}</code> | <span className="api-desc">The third number.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-compareto" /><code>{"int CompareTo("}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" other)"}</code> | <span className="api-desc">Compares by major, then minor, then patch.</span> |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | <span className="api-desc">Compares two versions.</span> |
| <Link id="m-op-greaterthanorequal" /><code>{"static bool op_GreaterThanOrEqual("}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | <span className="api-desc">Compares two versions.</span> |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | <span className="api-desc">Compares two versions.</span> |
| <Link id="m-op-lessthanorequal" /><code>{"static bool op_LessThanOrEqual("}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" a, "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" b)"}</code> | <span className="api-desc">Compares two versions.</span> |
| <Link id="m-parse" /><code>{"static "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" Parse(string v)"}</code> | <span className="api-desc">Parses three dot-separated digit runs after trimming spaces. Throws `ModManagerException` for anything else.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The version as `major.minor.patch`.</span> |
| <Link id="m-tryparse" /><code>{"static bool TryParse(string v, out "}<Link to="/mod/tavernlib-api/types/backend-mods/modversion">{"ModVersion"}</Link>{" result)"}</code> | <span className="api-desc">The same as `Parse`, returning false instead of throwing.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-segment" /><code>{"private static int Segment(string v, string part)"}</code> | <span className="api-desc">Parses one version segment, accepting ASCII digits only and throwing on anything else or on overflow.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ModVersion`:

<div className="api-used-in">

[`ModIncompatibility.Below`](/mod/tavernlib-api/types/backend-mods/modincompatibility#m-below), [`ModIncompatibility.ModIncompatibility`](/mod/tavernlib-api/types/backend-mods/modincompatibility#m-ctor), [`ModSummary.Highest`](/mod/tavernlib-api/types/backend-mods/modsummary#m-highest).

</div>
