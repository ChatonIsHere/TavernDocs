---
title: "FestivityCommandModule"
description: "Console module festivities for listing, inspecting, starting and stopping festivities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FestivityCommandModule

A **class** in `Root.Township`, no namespace.

Console module `festivities` for listing, inspecting, starting and stopping festivities. Calls the scene's `FestivityManager`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Attributes** `Module`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FestivityCommandModule()"}</code> | Creates a `FestivityCommandModule` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inspect" /><code>{"private static "}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" Inspect("}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | Command `festivities info`: returns the festivity so the console prints its fields. |
| <Link id="m-listfestivities" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListFestivities()"}</code> | Command `festivities list`: lists every `Festivity` asset. |
| <Link id="m-startfestivity" /><code>{"private static string StartFestivity("}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | Command `festivities start`: turns a festivity on through `FestivityManager.SetFestivityActive` and syncs it. |
| <Link id="m-stopfestivity" /><code>{"private static string StopFestivity("}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | Command `festivities stop`: turns a festivity off. The manager's next check can switch it back by date. |

</details>
