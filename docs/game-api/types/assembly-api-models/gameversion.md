---
title: "GameVersion"
description: "class GameVersion in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameVersion

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

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

| Member |
| --- |
| <Link id="m-changeset" /><code>{"int ChangeSet { get; set; }"}</code> |
| <Link id="m-major" /><code>{"int Major { get; set; }"}</code> |
| <Link id="m-minor" /><code>{"int Minor { get; set; }"}</code> |
| <Link id="m-season" /><code>{"int Season { get; set; }"}</code> |
| <Link id="m-stream" /><code>{"string Stream { get; set; }"}</code> |
| <Link id="m-title" /><code>{"int Title { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" other)"}</code> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> |
| <Link id="m-op-equality" /><code>{"static bool op_Equality("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> |
| <Link id="m-op-inequality" /><code>{"static bool op_Inequality("}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" a, "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" b)"}</code> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |

## Used in

Members of other types that take, return or hold a `GameVersion`:

[`IServerApiClient.JoinServer`](/game-api/types/assembly-api-client/iserverapiclient#m-joinserver), [`OfflineServerApiClient.JoinServer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-joinserver), [`ServerApiClient.JoinServer`](/game-api/types/assembly-api-client/serverapiclient#m-joinserver), [`ServerStartArguments.Version`](/game-api/types/assembly-api-client/serverstartarguments#m-version), [`JoinServerRequest.GameVersion`](/game-api/types/assembly-api-models/joinserverrequest#m-gameversion), [`LaunchLocalServerRequest.GameVersion`](/game-api/types/assembly-api-models/launchlocalserverrequest#m-gameversion), [`PatchNotes.Version`](/game-api/types/assembly-api-models/patchnotes#m-version), [`VersionMarker.Version`](/game-api/types/assembly-api-models/versionmarker#m-version).
