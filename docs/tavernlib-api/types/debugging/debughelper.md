---
title: "DebugHelper"
description: "The /debug_helper service: copies the game's NLog output into MelonLoader's log and draws an on-screen toggle per log level."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugHelper

A **class** in `TavernLib`, `TavernLib.Debugging`.

The `/debug_helper` service: copies the game's NLog output into MelonLoader's log and draws an on-screen toggle per log level. Nothing for mods to call; its constructor is internal.

- **Listed in** [TavernLib.Debugging](/tavernlib-api/types/debugging)
- **Inherits or implements** [`IService`](/tavernlib-api/types/services/iservice)
- **Documented in** [DebugHelper](/tavernlib-api/types/debugging/debughelper), [Internals](/tavernlib-api/internals), [Services](/tavernlib-api/services)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal DebugHelper()"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logcatcher" /><code>{"private readonly "}<Link to="/tavernlib-api/types/debugging/nlogcatcher">{"NLogCatcher"}</Link>{" _logCatcher"}</code> |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-ongui" /><code>{"private void OnGui()"}</code> |

</details>
