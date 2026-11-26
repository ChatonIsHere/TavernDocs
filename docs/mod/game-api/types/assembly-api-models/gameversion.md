---
title: "GameVersion"
description: "A game build version: stream plus title, season, major, minor and changeset numbers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameVersion

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A game build version: stream plus title, season, major, minor and changeset numbers.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** `IEquatable<GameVersion>`
- **Derived types** [`GameVersion`](/mod/game-api/types/assembly-api-models/gameversion)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameVersion()"}</code> | <span className="api-desc">Creates a `GameVersion` from `stream`, `season`, `major`, `minor` and `changeSet`.</span> |
| <Link id="m-ctor-2" /><code>{"GameVersion(string stream, int title, int season, int major, int minor, int changeSet)"}</code> | <span className="api-desc">Creates a `GameVersion` from `stream`, `season`, `major`, `minor` and `changeSet`.</span> |
| <Link id="m-ctor-3" /><code>{"GameVersion(string stream, int season, int major, int minor, int changeSet)"}</code> | <span className="api-desc">Creates a `GameVersion` from `stream`, `season`, `major`, `minor` and `changeSet`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changeset" /><code>{"int ChangeSet { get; set; }"}</code> | <span className="api-desc">Build changeset number, the last part of the version.</span> |
| <Link id="m-major" /><code>{"int Major { get; set; }"}</code> | <span className="api-desc">Major version number.</span> |
| <Link id="m-minor" /><code>{"int Minor { get; set; }"}</code> | <span className="api-desc">Minor version number.</span> |
| <Link id="m-season" /><code>{"int Season { get; set; }"}</code> | <span className="api-desc">Season number.</span> |
| <Link id="m-stream" /><code>{"string Stream { get; set; }"}</code> | <span className="api-desc">Release stream name. `ToString` sets it to `main` when it's null.</span> |
| <Link id="m-title" /><code>{"int Title { get; set; }"}</code> | <span className="api-desc">Title number, 1 by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Compares stream, season, major, minor and changeset. `Title` is ignored.</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" other)"}</code> | <span className="api-desc">Compares stream, season, major, minor and changeset. `Title` is ignored.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of the same fields `Equals` compares.</span> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> | <span className="api-desc">Value equality through `Equals`; two nulls are equal.</span> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> | <span className="api-desc">Opposite of `==`.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Formats as `stream-title.season.major.minor.changeset`.</span> |

## Used in

Members of other types that take, return or hold a `GameVersion`:

<div className="api-used-in">

[`IServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.JoinServer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`ServerStartArguments.Version`](/mod/game-api/types/assembly-api-client/serverstartarguments#m-version), [`JoinServerRequest.GameVersion`](/mod/game-api/types/assembly-api-models/joinserverrequest#m-gameversion), [`LaunchLocalServerRequest.GameVersion`](/mod/game-api/types/assembly-api-models/launchlocalserverrequest#m-gameversion), [`PatchNotes.Version`](/mod/game-api/types/assembly-api-models/patchnotes#m-version), [`VersionMarker.Version`](/mod/game-api/types/assembly-api-models/versionmarker#m-version).

</div>
