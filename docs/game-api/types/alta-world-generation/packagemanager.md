---
title: "PackageManager"
description: "static class PackageManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PackageManager

A **static class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap" /><code>{"private static Dictionary<string, "}<Link to="/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> packageMap"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-packagemap-2" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{"> PackageMap { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-droppackage" /><code>{"static bool DropPackage(string packageName, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player = null, params string[] arguments)"}</code> |  |
| <Link id="m-applyarguments" /><code>{"private static void ApplyArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, string[] arguments)"}</code> |  |
| <Link id="m-delayedspawn" /><code>{"private static IEnumerator DelayedSpawn("}<Link to="/game-api/types/alta-world-generation/debugpackage">{"DebugPackage"}</Link>{" package, Func<Vector3> getPosition, string[] arguments) (iterator)"}</code> |  |
| <Link id="m-setuppackages" /><code>{"private static void SetupPackages()"}</code> |  |
