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

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested types** [`StaticCommandSubModule`](/mod/game-api/types/alta-console/debuggingcommandmodule-staticcommandsubmodule), [`Tracking`](/mod/game-api/types/alta-console/debuggingcommandmodule-tracking)
- **Attributes** `Module`

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allassemblies" /><code>{"private static List<Assembly> allAssemblies"}</code> | <span className="api-desc">Assemblies searched for types by name. Note `print-names` reads it without filling it first.</span> |
| <Link id="m-frameratelimit" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/limitframerate">{"LimitFrameRate"}</Link>{" frameRateLimit"}</code> | <span className="api-desc">The frame rate limiter made by `debug lag`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

<details className="api-private">
<summary>19 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private static void Count("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Command `debug count`: logs how many of a prefab are in the scene.</span> |
| <Link id="m-countallscripts" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" CountAllScripts()"}</code> | <span className="api-desc">Command `debug count-all`: counts every Unity object by type and returns `script counts.csv`.</span> |
| <Link id="m-countbehaviours" /><code>{"private static void CountBehaviours(string behaviourName, bool isEnabled)"}</code> | <span className="api-desc">Command `debug count-behaviours`: logs how many of a Behaviour type are enabled or disabled.</span> |
| <Link id="m-countscripts" /><code>{"private static void CountScripts(string typeName, bool isCountingResources = false, bool isFindingChildren = true)"}</code> | <span className="api-desc">Command `debug count-scripts`: logs how many objects of a type exist in the scene or in loaded resources.</span> |
| <Link id="m-debugentities" /><code>{"private static void DebugEntities()"}</code> | <span className="api-desc">Command `debug entities`: logs every entity's name.</span> |
| <Link id="m-exportnavmesh" /><code>{"private static string ExportNavmesh(string output = \"D:/Output/Navmesh.bytes\")"}</code> | <span className="api-desc">Command `debug export-navmesh`: writes the A* graphs to a file (default `D:/Output/Navmesh.bytes`).</span> |
| <Link id="m-fixedtime" /><code>{"private static void FixedTime()"}</code> | <span className="api-desc">Command `debug fixedtime`: logs the fixed delta time and its rate.</span> |
| <Link id="m-nameentity" /><code>{"private static void NameEntity(uint id)"}</code> | <span className="api-desc">Command `debug nameid`: logs the name of the entity with that id.</span> |
| <Link id="m-openlogfile" /><code>{"private static void OpenLogFile()"}</code> | <span className="api-desc">Command `debug open-logs`: opens the log folder.</span> |
| <Link id="m-prefabcounts" /><code>{"private static void PrefabCounts()"}</code> | <span className="api-desc">Command `debug prefabcounts`: logs how many of each prefab exist.</span> |
| <Link id="m-printentityhealth" /><code>{"private static void PrintEntityHealth()"}</code> | <span className="api-desc">Command `debug entity-health`: logs general entity manager state.</span> |
| <Link id="m-printnames" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintNames(string scriptName)"}</code> | <span className="api-desc">Two commands: `debug print-names` returns a CSV of objects with a script, and `debug lag` limits the frame rate (0 or less removes it).</span> |
| <Link id="m-printnames-2" /><code>{"private static void PrintNames(int targetFPS)"}</code> | <span className="api-desc">Two commands: `debug print-names` returns a CSV of objects with a script, and `debug lag` limits the frame rate (0 or less removes it).</span> |
| <Link id="m-printserverstatistics" /><code>{"private static object PrintServerStatistics()"}</code> | <span className="api-desc">Command `debug server-stats`: FPS, player count, and loaded overworld and cave chunks.</span> |
| <Link id="m-setupallassemblieslist" /><code>{"private static void SetupAllAssembliesList()"}</code> | <span className="api-desc">Fills `allAssemblies` with this assembly and its references, once.</span> |
| <Link id="m-spawnloadmarker" /><code>{"private static void SpawnLoadMarker("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Command `debug load-marker`: server owner only. Spawns an unsaved Rusty Spade load marker in front of the player.</span> |
| <Link id="m-spawnqaset" /><code>{"private static void SpawnQASet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int index = -1)"}</code> | <span className="api-desc">Command `debug set`: server owner only. Spawns a QA item set for the player.</span> |
| <Link id="m-startremoteconsole" /><code>{"private static void StartRemoteConsole()"}</code> | <span className="api-desc">Command `debug remote-console`: starts the remote console if it isn't running.</span> |
| <Link id="m-turabadaai" /><code>{"private static IEnumerable<string> TurabadaAI()"}</code> | <span className="api-desc">Command `debug turabada-ai`: lists the names of the Turabada passive action sets.</span> |

</details>
