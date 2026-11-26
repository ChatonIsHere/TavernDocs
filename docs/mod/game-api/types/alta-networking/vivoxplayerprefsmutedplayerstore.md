---
title: "VivoxPlayerPrefsMutedPlayerStore"
description: "Client store of muted player IDs, saved as JSON in Unity PlayerPrefs under MutedPlayersKey."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxPlayerPrefsMutedPlayerStore

A **internal class** in `Root.Township`, `Alta.Voice`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client store of muted player IDs, saved as JSON in Unity `PlayerPrefs` under `MutedPlayersKey`. Loads on first use.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`IVivoxMutedPlayerStore`](/mod/game-api/types/alta-networking/ivivoxmutedplayerstore)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxPlayerPrefsMutedPlayerStore()"}</code> | <span className="api-desc">Creates a `VivoxPlayerPrefsMutedPlayerStore` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasloaded" /><code>{"private bool hasLoaded"}</code> | <span className="api-desc">Whether `Load` has run.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mutedlist" /><code>{"private readonly HashSet<int> mutedList"}</code> | <span className="api-desc">Backing set for `MutedList`.</span> |
| <Link id="m-mutedplayerskey" /><code>{"private const string mutedPlayersKey"}</code> | <span className="api-desc">The `PlayerPrefs` key, "MutedPlayersKey".</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mutedlist-2" /><code>{"private HashSet<int> MutedList { get; }"}</code> | <span className="api-desc">The muted set, loading it on first access.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(int userId)"}</code> | <span className="api-desc">Mutes a user ID and saves. Returns false if already muted.</span> |
| <Link id="m-contains" /><code>{"bool Contains(int userId)"}</code> | <span className="api-desc">Whether the user ID is muted.</span> |
| <Link id="m-remove" /><code>{"bool Remove(int userId)"}</code> | <span className="api-desc">Unmutes a user ID and saves. Returns false if it was not muted.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"private void Load()"}</code> | <span className="api-desc">Reads the muted list from `PlayerPrefs`; logs and keeps an empty list if parsing fails.</span> |
| <Link id="m-save" /><code>{"private void Save()"}</code> | <span className="api-desc">Writes the muted list to `PlayerPrefs` as JSON.</span> |

</details>
