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
| <Link id="m-ctor" /><code>{"VivoxPlayerPrefsMutedPlayerStore()"}</code> | Creates a `VivoxPlayerPrefsMutedPlayerStore` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasloaded" /><code>{"private bool hasLoaded"}</code> | Whether `Load` has run. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mutedlist" /><code>{"private readonly HashSet<int> mutedList"}</code> | Backing set for `MutedList`. |
| <Link id="m-mutedplayerskey" /><code>{"private const string mutedPlayersKey"}</code> | The `PlayerPrefs` key, "MutedPlayersKey". |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-mutedlist-2" /><code>{"private HashSet<int> MutedList { get; }"}</code> | The muted set, loading it on first access. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(int userId)"}</code> | Mutes a user ID and saves. Returns false if already muted. |
| <Link id="m-contains" /><code>{"bool Contains(int userId)"}</code> | Whether the user ID is muted. |
| <Link id="m-remove" /><code>{"bool Remove(int userId)"}</code> | Unmutes a user ID and saves. Returns false if it was not muted. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"private void Load()"}</code> | Reads the muted list from `PlayerPrefs`; logs and keeps an empty list if parsing fails. |
| <Link id="m-save" /><code>{"private void Save()"}</code> | Writes the muted list to `PlayerPrefs` as JSON. |

</details>
