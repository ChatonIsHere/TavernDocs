---
title: "VivoxPlayerPrefsMutedPlayerStore"
description: "class VivoxPlayerPrefsMutedPlayerStore in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxPlayerPrefsMutedPlayerStore

A **internal class** in `Root.Township`, `Alta.Voice`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`IVivoxMutedPlayerStore`](/game-api/types/alta-networking/ivivoxmutedplayerstore)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxPlayerPrefsMutedPlayerStore()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-hasloaded" /><code>{"private bool hasLoaded"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mutedlist" /><code>{"private readonly HashSet<int> mutedList"}</code> |
| <Link id="m-mutedplayerskey" /><code>{"private const string mutedPlayersKey"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-mutedlist-2" /><code>{"private HashSet<int> MutedList { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"bool Add(int userId)"}</code> |
| <Link id="m-contains" /><code>{"bool Contains(int userId)"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(int userId)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-load" /><code>{"private void Load()"}</code> |
| <Link id="m-save" /><code>{"private void Save()"}</code> |

</details>
