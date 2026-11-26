---
title: "ClimbingTowerTeleporterSaveData"
description: "Per-player binary save holding the last climbing tower teleporter destination."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterSaveData

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Per-player binary save holding the last climbing tower teleporter destination. Unused elsewhere in this build.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`ClimbingTowerTeleporterPerPlayerSaveable`](/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`ClimbingTowerTeleporterSave`](/game-api/types/game-other-namespaces/climbingtowerteleportersave)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const int Version"}</code> | File format version, 1. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastteleporterdestinationindex" /><code>{"int LastTeleporterDestinationIndex { get; set; }"}</code> | Index of the last teleporter destination, or -1 for none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns a copy with the same destination index. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads the version and index, warning if the version is not 1. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes the version then the index. |
