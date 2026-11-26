---
title: "MovePickupSaveData1"
description: "Old save data (version 1) for MovePickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovePickupSaveData1

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old save data (version 1) for `MovePickup`. Migrating it throws all the values away and returns empty version 2 data.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MovePickupSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fallspeedsaved" /><code>{"float fallSpeedSaved"}</code> | Old saved fall speed; dropped on migration. |
| <Link id="m-handsrequiredtoliftsaved" /><code>{"int handsRequiredToLiftSaved"}</code> | Old saved hands needed to lift; dropped on migration. |
| <Link id="m-maxdistancepersecondperhandsaved" /><code>{"float maxDistancePerSecondPerHandSaved"}</code> | Old saved per hand speed limit; dropped on migration. |
| <Link id="m-maxdistancepersecondtotalsaved" /><code>{"float maxDistancePerSecondTotalSaved"}</code> | Old saved total speed limit; dropped on migration. |
| <Link id="m-maxdistancesaved" /><code>{"float maxDistanceSaved"}</code> | Old saved maximum distance; dropped on migration. |
| <Link id="m-movementaxisxsaved" /><code>{"float movementAxisXSaved"}</code> | Old saved movement axis X; dropped on migration. |
| <Link id="m-movementaxisysaved" /><code>{"float movementAxisYSaved"}</code> | Old saved movement axis Y; dropped on migration. |
| <Link id="m-movementaxiszsaved" /><code>{"float movementAxisZSaved"}</code> | Old saved movement axis Z; dropped on migration. |
| <Link id="m-readytodisablesaved" /><code>{"bool readyToDisableSaved"}</code> | Old saved ready to disable flag; dropped on migration. |
| <Link id="m-totaldistancesaved" /><code>{"float totalDistanceSaved"}</code> | Old saved distance moved; dropped on migration. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a blank `MovePickupSaveData`; none of the old values carry over. |
