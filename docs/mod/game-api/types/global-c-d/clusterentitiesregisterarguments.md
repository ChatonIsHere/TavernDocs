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
| <Link id="m-ctor" /><code>{"ClusterEntitiesRegisterArguments(uint optionHash, int count, uint[] entities)"}</code> | <span className="api-desc">Creates a `ClusterEntitiesRegisterArguments` from `optionHash`, `count` and `entities`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entities" /><code>{"private uint[] entities"}</code> | <span className="api-desc">Backing field for `Entities`.</span> |
| <Link id="m-optionhash" /><code>{"private uint optionHash"}</code> | <span className="api-desc">Backing field for `Option`.</span> |
| <Link id="m-quantityentities" /><code>{"private uint quantityEntities"}</code> | <span className="api-desc">Number of part IDs in `entities`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entities-2" /><code>{"uint[] Entities { get; }"}</code> | <span className="api-desc">Entity identifiers of the cluster's parts.</span> |
| <Link id="m-option" /><code>{"uint Option { get; }"}</code> | <span className="api-desc">Hash of the cluster's boulder definition, sent in 16 bits.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the definition hash, part count (8 bits, so at most 255) and part IDs.</span> |

## Used in

Members of other types that take, return or hold a `ClusterEntitiesRegisterArguments`:

<div className="api-used-in">

[`RockCluster.sync`](/mod/game-api/types/global-q-r/rockcluster#m-sync), [`RockCluster.Sync`](/mod/game-api/types/global-q-r/rockcluster#m-sync-2).

</div>
