---
title: "ExampleBehaviour"
description: "class ExampleBehaviour in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExampleBehaviour

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExampleBehaviour()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-head" /><code>{"private Transform head"}</code> |  |
| <Link id="m-health" /><code>{"private float health"}</code> |  |
| <Link id="m-healthsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" healthSync"}</code> |  |
| <Link id="m-lookdirectionsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" lookDirectionSync"}</code> |  |
| <Link id="m-maxhealth" /><code>{"private float maxHealth"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"private void InitializeAsServer()"}</code> |  |
| <Link id="m-onclientreadhealth" /><code>{"private void OnClientReadHealth("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onclientreadlookdirection" /><code>{"private void OnClientReadLookDirection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onclientwritelookdirection" /><code>{"private void OnClientWriteLookDirection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-onserverwritehealth" /><code>{"private void OnServerWriteHealth("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
