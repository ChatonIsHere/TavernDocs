---
title: "MovePickupSaveData1"
description: "Old save data (version 1) for MovePickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovePickupSaveData1

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `MovePickup`. Migrating it throws all the values away and returns empty version 2 data.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovePickupSaveData1()"}</code> | <span className="api-desc">Creates a `MovePickupSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fallspeedsaved" /><code>{"float fallSpeedSaved"}</code> | <span className="api-desc">Old saved fall speed; dropped on migration.</span> |
| <Link id="m-handsrequiredtoliftsaved" /><code>{"int handsRequiredToLiftSaved"}</code> | <span className="api-desc">Old saved hands needed to lift; dropped on migration.</span> |
| <Link id="m-maxdistancepersecondperhandsaved" /><code>{"float maxDistancePerSecondPerHandSaved"}</code> | <span className="api-desc">Old saved per hand speed limit; dropped on migration.</span> |
| <Link id="m-maxdistancepersecondtotalsaved" /><code>{"float maxDistancePerSecondTotalSaved"}</code> | <span className="api-desc">Old saved total speed limit; dropped on migration.</span> |
| <Link id="m-maxdistancesaved" /><code>{"float maxDistanceSaved"}</code> | <span className="api-desc">Old saved maximum distance; dropped on migration.</span> |
| <Link id="m-movementaxisxsaved" /><code>{"float movementAxisXSaved"}</code> | <span className="api-desc">Old saved movement axis X; dropped on migration.</span> |
| <Link id="m-movementaxisysaved" /><code>{"float movementAxisYSaved"}</code> | <span className="api-desc">Old saved movement axis Y; dropped on migration.</span> |
| <Link id="m-movementaxiszsaved" /><code>{"float movementAxisZSaved"}</code> | <span className="api-desc">Old saved movement axis Z; dropped on migration.</span> |
| <Link id="m-readytodisablesaved" /><code>{"bool readyToDisableSaved"}</code> | <span className="api-desc">Old saved ready to disable flag; dropped on migration.</span> |
| <Link id="m-totaldistancesaved" /><code>{"float totalDistanceSaved"}</code> | <span className="api-desc">Old saved distance moved; dropped on migration.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Returns a blank `MovePickupSaveData`; none of the old values carry over.</span> |
