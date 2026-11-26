---
title: "TeleportationRecord"
description: "Obsolete analytics record for a teleport, from the old analytics system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TeleportationRecord

A **struct** in `Root.Township`, `Alta.Analytics`.

Obsolete analytics record for a teleport, from the old analytics system.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `AnalyticsRecordForAll`, `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TeleportationRecord(Vector3 from, Vector3 to, int fps)"}</code> | <span className="api-desc">Creates a `TeleportationRecord` from `from`, `to` and `fps`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fps" /><code>{"int FPS"}</code> | <span className="api-desc">Frame rate at the time of the teleport.</span> |
| <Link id="m-fromlocation" /><code>{"Vector3 FromLocation"}</code> | <span className="api-desc">Where the player teleported from.</span> |
| <Link id="m-tolocation" /><code>{"Vector3 ToLocation"}</code> | <span className="api-desc">Where the player teleported to.</span> |
