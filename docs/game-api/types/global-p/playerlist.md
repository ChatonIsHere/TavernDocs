---
title: "PlayerList"
description: "Names or ids separated by commas, or  for everyone"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerList

A **class** in `Root.Township`, no namespace.

Names or ids separated by commas, or `*` for everyone

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `IEnumerable<IPlayer>`, `IEnumerable`
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerList(IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> range)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-players" /><code>{"private readonly IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> players"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-lastlist" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> LastList { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-countorname" /><code>{"string CountOrName()"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerList`:

[`SpawnCommandModule.FindPrefabAndSpawn`](/game-api/types/alta-console/spawncommandmodule#m-findprefabandspawn), [`SpawnCommandModule.For`](/game-api/types/alta-console/spawncommandmodule#m-for), [`SpawnCommandModule.SpawnString`](/game-api/types/alta-console/spawncommandmodule#m-spawnstring), [`SpawnCommandModule.Moulds.DropPackage`](/game-api/types/alta-console/spawncommandmodule-moulds#m-droppackage), [`SpawnCommandModule.Packages.DropPackage`](/game-api/types/alta-console/spawncommandmodule-packages#m-droppackage), [`SpawnCommandModule.Pages.DropPackage`](/game-api/types/alta-console/spawncommandmodule-pages#m-droppackage), [`WorldCommandModule.CaveCommandModule.CaveTeleport`](/game-api/types/alta-console/worldcommandmodule-cavecommandmodule#m-caveteleport), [`WorldCommandModule.ForestCommandModule.Teleport`](/game-api/types/alta-console/worldcommandmodule-forestcommandmodule#m-teleport).
