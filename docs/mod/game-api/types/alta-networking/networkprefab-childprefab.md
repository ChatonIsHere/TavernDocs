---
title: "NetworkPrefab.ChildPrefab"
description: "Pairs a child network prefab with the entity it sits under, for saving and spawning nested prefabs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkPrefab.ChildPrefab

A **class** in `Root.Township`, `Alta.Networking`.

Pairs a child network prefab with the entity it sits under, for saving and spawning nested prefabs.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Nested in** [`NetworkPrefab`](/mod/game-api/types/alta-networking/networkprefab)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChildPrefab("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child)"}</code> | Creates a `NetworkPrefab.ChildPrefab` from `parent` and `child`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child"}</code> | The nested network prefab. |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent"}</code> | The entity the child prefab belongs to. |

## Used in

Members of other types that take, return or hold a `ChildPrefab`:

[`ISerializeChildren.ChildPrefabs`](/mod/game-api/types/alta-networking/iserializechildren#m-childprefabs), [`NetworkPrefab.Alta.Networking.ISerializeChildren.ChildPrefabs`](/mod/game-api/types/alta-networking/networkprefab#m-alta-networking-iserializechildren-childprefabs), [`NetworkPrefab.childPrefabAccumulation`](/mod/game-api/types/alta-networking/networkprefab#m-childprefabaccumulation), [`NetworkPrefab.childPrefabs`](/mod/game-api/types/alta-networking/networkprefab#m-childprefabs), [`EmptyChildrenSerializer.Alta.Networking.ISerializeChildren.ChildPrefabs`](/mod/game-api/types/global-e-h/emptychildrenserializer#m-alta-networking-iserializechildren-childprefabs).
