---
title: "DebuggingCommandModule"
description: "Console module debug with developer commands for counting objects, logging entities, server stats, frame rate limits and test spawns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `debug` with developer commands for counting objects, logging entities, server stats, frame rate limits and test spawns.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested types** [`StaticCommandSubModule`](/game-api/types/alta-console/debuggingcommandmodule-staticcommandsubmodule), [`Tracking`](/game-api/types/alta-console/debuggingcommandmodule-tracking)
- **Attributes** `Module`

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allassemblies" /><code>{"private static List<Assembly> allAssemblies"}</code> | Assemblies searched for types by name. Note `print-names` reads it without filling it first. |
| <Link id="m-frameratelimit" /><code>{"private static "}<Link to="/game-api/types/global-i-l/limitframerate">{"LimitFrameRate"}</Link>{" frameRateLimit"}</code> | The frame rate limiter made by `debug lag`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

<details>
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static void Count("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Command `debug count`: logs how many of a prefab are in the scene. |
| <Link id="m-countallscripts" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" CountAllScripts()"}</code> | Command `debug count-all`: counts every Unity object by type and returns `script counts.csv`. |
| <Link id="m-countbehaviours" /><code>{"private static void CountBehaviours(string behaviourName, bool isEnabled)"}</code> | Command `debug count-behaviours`: logs how many of a Behaviour type are enabled or disabled. |
| <Link id="m-countscripts" /><code>{"private static void CountScripts(string typeName, bool isCountingResources = false, bool isFindingChildren = true)"}</code> | Command `debug count-scripts`: logs how many objects of a type exist in the scene or in loaded resources. |
| <Link id="m-debugentities" /><code>{"private static void DebugEntities()"}</code> | Command `debug entities`: logs every entity's name. |
| <Link id="m-exportnavmesh" /><code>{"private static string ExportNavmesh(string output = \"D:/Output/Navmesh.bytes\")"}</code> | Command `debug export-navmesh`: writes the A* graphs to a file (default `D:/Output/Navmesh.bytes`). |
| <Link id="m-fixedtime" /><code>{"private static void FixedTime()"}</code> | Command `debug fixedtime`: logs the fixed delta time and its rate. |
| <Link id="m-nameentity" /><code>{"private static void NameEntity(uint id)"}</code> | Command `debug nameid`: logs the name of the entity with that id. |
| <Link id="m-openlogfile" /><code>{"private static void OpenLogFile()"}</code> | Command `debug open-logs`: opens the log folder. |
| <Link id="m-prefabcounts" /><code>{"private static void PrefabCounts()"}</code> | Command `debug prefabcounts`: logs how many of each prefab exist. |
| <Link id="m-printentityhealth" /><code>{"private static void PrintEntityHealth()"}</code> | Command `debug entity-health`: logs general entity manager state. |
| <Link id="m-printnames" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintNames(string scriptName)"}</code> | Two commands: `debug print-names` returns a CSV of objects with a script, and `debug lag` limits the frame rate (0 or less removes it). |
| <Link id="m-printnames-2" /><code>{"private static void PrintNames(int targetFPS)"}</code> | Two commands: `debug print-names` returns a CSV of objects with a script, and `debug lag` limits the frame rate (0 or less removes it). |
| <Link id="m-printserverstatistics" /><code>{"private static object PrintServerStatistics()"}</code> | Command `debug server-stats`: FPS, player count, and loaded overworld and cave chunks. |
| <Link id="m-setupallassemblieslist" /><code>{"private static void SetupAllAssembliesList()"}</code> | Fills `allAssemblies` with this assembly and its references, once. |
| <Link id="m-spawnloadmarker" /><code>{"private static void SpawnLoadMarker("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Command `debug load-marker`: server owner only. Spawns an unsaved Rusty Spade load marker in front of the player. |
| <Link id="m-spawnqaset" /><code>{"private static void SpawnQASet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int index = -1)"}</code> | Command `debug set`: server owner only. Spawns a QA item set for the player. |
| <Link id="m-startremoteconsole" /><code>{"private static void StartRemoteConsole()"}</code> | Command `debug remote-console`: starts the remote console if it isn't running. |
| <Link id="m-turabadaai" /><code>{"private static IEnumerable<string> TurabadaAI()"}</code> | Command `debug turabada-ai`: lists the names of the Turabada passive action sets. |

</details>
