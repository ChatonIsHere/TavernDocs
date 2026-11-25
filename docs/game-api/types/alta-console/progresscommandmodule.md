---
title: "ProgressCommandModule"
description: "static class ProgressCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`CaveTeleporterDetails`](/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails)
- **Attributes** `PlayOnly`, `ServerOnly`, `Module`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatecavesto" /><code>{"static async Task<"}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> GenerateCavesTo(int layer, Action<string> debugCallback = null)"}</code> |  |
| <Link id="m-connectteleporter" /><code>{"private static bool ConnectTeleporter("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer)"}</code> |  |
| <Link id="m-fillbook" /><code>{"private static void FillBook("}<Link to="/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> |  |
| <Link id="m-fillbooks" /><code>{"private static void FillBooks()"}</code> |  |
| <Link id="m-fillcaveteleporter" /><code>{"private static void FillCaveTeleporter(int layer, int fuelQuantity)"}</code> |  |
| <Link id="m-fillcommunityboxes" /><code>{"private static void FillCommunityBoxes()"}</code> |  |
| <Link id="m-finishboxes" /><code>{"private static void FinishBoxes()"}</code> |  |
| <Link id="m-forgeall" /><code>{"private static void ForgeAll()"}</code> |  |
| <Link id="m-listbooks" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/hashediteminfo">{"HashedItemInfo"}</Link>{"> ListBooks()"}</code> |  |
| <Link id="m-listcaveteleporter" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/progresscommandmodule-caveteleporterdetails">{"ProgressCommandModule.CaveTeleporterDetails"}</Link>{"> ListCaveTeleporter()"}</code> |  |
| <Link id="m-repairteleporter" /><code>{"private static bool RepairTeleporter("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer)"}</code> |  |
| <Link id="m-repairteleportersto" /><code>{"private static async Task RepairTeleportersTo(int layer)"}</code> |  |
