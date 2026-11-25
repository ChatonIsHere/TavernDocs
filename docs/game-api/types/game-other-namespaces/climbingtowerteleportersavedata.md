---
title: "ClimbingTowerTeleporterSaveData"
description: "class ClimbingTowerTeleporterSaveData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterSaveData

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const int Version"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastteleporterdestinationindex" /><code>{"int LastTeleporterDestinationIndex { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |  |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |  |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |  |
