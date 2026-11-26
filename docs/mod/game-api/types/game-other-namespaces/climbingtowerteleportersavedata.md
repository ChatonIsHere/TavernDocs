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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)
- **Derived types** [`ClimbingTowerTeleporterPerPlayerSaveable`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporterperplayersaveable), [`ClimbingTowerTeleporterSave`](/mod/game-api/types/game-other-namespaces/climbingtowerteleportersave)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterSaveData()"}</code> | <span className="api-desc">Creates a `ClimbingTowerTeleporterSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-version" /><code>{"const int Version"}</code> | <span className="api-desc">File format version, 1.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastteleporterdestinationindex" /><code>{"int LastTeleporterDestinationIndex { get; set; }"}</code> | <span className="api-desc">Index of the last teleporter destination, or -1 for none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns a copy with the same destination index.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads the version and index, warning if the version is not 1.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes the version then the index.</span> |
