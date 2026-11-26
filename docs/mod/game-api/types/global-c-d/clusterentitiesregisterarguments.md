---
title: "ClusterEntitiesRegisterArguments"
description: "Message a RockCluster sends a joining player with its boulder definition and the IDs of its part entities, so the client can match them up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClusterEntitiesRegisterArguments

A **struct** in `Root.Township`, the global namespace.

Message a `RockCluster` sends a joining player with its boulder definition and the IDs of its part entities, so the client can match them up.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClusterEntitiesRegisterArguments(uint optionHash, int count, uint[] entities)"}</code> | Creates a `ClusterEntitiesRegisterArguments` from `optionHash`, `count` and `entities`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entities" /><code>{"private uint[] entities"}</code> | Backing field for `Entities`. |
| <Link id="m-optionhash" /><code>{"private uint optionHash"}</code> | Backing field for `Option`. |
| <Link id="m-quantityentities" /><code>{"private uint quantityEntities"}</code> | Number of part IDs in `entities`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entities-2" /><code>{"uint[] Entities { get; }"}</code> | Entity identifiers of the cluster's parts. |
| <Link id="m-option" /><code>{"uint Option { get; }"}</code> | Hash of the cluster's boulder definition, sent in 16 bits. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the definition hash, part count (8 bits, so at most 255) and part IDs. |

## Used in

Members of other types that take, return or hold a `ClusterEntitiesRegisterArguments`:

[`RockCluster.sync`](/mod/game-api/types/global-q-r/rockcluster#m-sync), [`RockCluster.Sync`](/mod/game-api/types/global-q-r/rockcluster#m-sync-2).
