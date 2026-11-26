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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `IEquatable<GameVersion>`
- **Derived types** [`GameVersion`](/game-api/types/assembly-api-models/gameversion)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GameVersion()"}</code> |
| <Link id="m-ctor-2" /><code>{"GameVersion(string stream, int title, int season, int major, int minor, int changeSet)"}</code> |
| <Link id="m-ctor-3" /><code>{"GameVersion(string stream, int season, int major, int minor, int changeSet)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changeset" /><code>{"int ChangeSet { get; set; }"}</code> | Build changeset number, the last part of the version. |
| <Link id="m-major" /><code>{"int Major { get; set; }"}</code> | Major version number. |
| <Link id="m-minor" /><code>{"int Minor { get; set; }"}</code> | Minor version number. |
| <Link id="m-season" /><code>{"int Season { get; set; }"}</code> | Season number. |
| <Link id="m-stream" /><code>{"string Stream { get; set; }"}</code> | Release stream name. `ToString` sets it to `main` when it's null. |
| <Link id="m-title" /><code>{"int Title { get; set; }"}</code> | Title number, 1 by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Compares stream, season, major, minor and changeset. `Title` is ignored. |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" other)"}</code> | Compares stream, season, major, minor and changeset. `Title` is ignored. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the same fields `Equals` compares. |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> | Value equality through `Equals`; two nulls are equal. |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> | Opposite of `==`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats as `stream-title.season.major.minor.changeset`. |

## Used in

Members of other types that take, return or hold a `GameVersion`:

[`IServerApiClient.JoinServer`](/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.JoinServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.JoinServer`](/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`ServerStartArguments.Version`](/game-api/types/assembly-api-client/serverstartarguments#m-version), [`JoinServerRequest.GameVersion`](/game-api/types/assembly-api-models/joinserverrequest#m-gameversion), [`LaunchLocalServerRequest.GameVersion`](/game-api/types/assembly-api-models/launchlocalserverrequest#m-gameversion), [`PatchNotes.Version`](/game-api/types/assembly-api-models/patchnotes#m-version), [`VersionMarker.Version`](/game-api/types/assembly-api-models/versionmarker#m-version).
