---
title: "ProgressCommandModule"
description: "Console module progress: server commands that skip world progression, such as finishing repair boxes, filling books, forging blades and generating caves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `progress`: server commands that skip world progression, such as finishing repair boxes, filling books, forging blades and generating caves. Server and play mode only.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`CaveTeleporterDetails`](/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails)
- **Attributes** `PlayOnly`, `ServerOnly`, `Module`

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatecavesto" /><code>{"static async Task<"}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> GenerateCavesTo(int layer, Action<string> debugCallback = null)"}</code> | `progress generatecaves`: loads, saves and unloads each cave layer up to the given one (max 100), then leaves that layer loaded and returns it. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectteleporter" /><code>{"private static bool ConnectTeleporter("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer)"}</code> | Finds the cave teleporter on a cave layer's chunk and tells it to update its layer link. Used by `RepairTeleportersTo`. |
| <Link id="m-fillbook" /><code>{"private static void FillBook("}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | `progress fill-book`: adds every page of one page collection to the global pages. |
| <Link id="m-fillbooks" /><code>{"private static void FillBooks()"}</code> | `progress fill-books`: adds every page of every page collection, skipping pages disabled on simple servers there. |
| <Link id="m-fillcaveteleporter" /><code>{"private static void FillCaveTeleporter(int layer, int fuelQuantity)"}</code> | `progress fillcaveteleporter`: adds fuel to the cave teleporter for a built layer. |
| <Link id="m-fillcommunityboxes" /><code>{"private static void FillCommunityBoxes()"}</code> | `progress fillcommunityboxes`: fills every `CommunalStorage` in the scene and clears interaction trackers. |
| <Link id="m-finishboxes" /><code>{"private static void FinishBoxes()"}</code> | `progress finishboxes`: calls the private `Finish` on every `RepairBox` in the scene by reflection. |
| <Link id="m-forgeall" /><code>{"private static void ForgeAll()"}</code> | `progress forgeall`: force-completes every `ForgedModel` in the scene with effects. |
| <Link id="m-listbooks" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListBooks()"}</code> | `progress list-books`: lists all page collections. |
| <Link id="m-listcaveteleporter" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails">{"ProgressCommandModule.CaveTeleporterDetails"}</Link>{"> ListCaveTeleporter()"}</code> | `progress listcaveteleporter`: lists each available cave teleporter layer with its fuel. |
| <Link id="m-repairteleporter" /><code>{"private static bool RepairTeleporter("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer)"}</code> | Finds the `CaveTeleporterReplacer` on a cave layer's chunk and swaps in the repaired teleporter. Used by `RepairTeleportersTo`. |
| <Link id="m-repairteleportersto" /><code>{"private static async Task RepairTeleportersTo(int layer)"}</code> | `progress repaircaveteleporters`: loads each cave layer up to the given one and repairs and connects the teleporter every tenth floor. |

</details>
