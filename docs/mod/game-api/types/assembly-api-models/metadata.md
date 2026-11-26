---
title: "Metadata"
description: "Kubernetes object metadata as used in Agones requests and responses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Metadata

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Agones`.

Kubernetes object metadata as used in Agones requests and responses.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Metadata()"}</code> | <span className="api-desc">Creates a `Metadata` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-annotations" /><code>{"Dictionary<string, string> Annotations { get; set; }"}</code> | <span className="api-desc">Kubernetes annotations.</span> |
| <Link id="m-creationtime" /><code>{"DateTime? CreationTime { get; set; }"}</code> | <span className="api-desc">When the object was created, if known.</span> |
| <Link id="m-generatename" /><code>{"string GenerateName { get; set; }"}</code> | <span className="api-desc">Prefix Kubernetes uses to generate a name.</span> |
| <Link id="m-labels" /><code>{"Dictionary<string, string> Labels { get; set; }"}</code> | <span className="api-desc">Kubernetes labels.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Object name.</span> |
| <Link id="m-namespace" /><code>{"string Namespace { get; set; }"}</code> | <span className="api-desc">Kubernetes namespace ("default" unless set).</span> |
| <Link id="m-resourceversion" /><code>{"string ResourceVersion { get; set; }"}</code> | <span className="api-desc">Kubernetes resource version.</span> |

## Used in

Members of other types that take, return or hold a `Metadata`:

<div className="api-used-in">

[`AgonesObject.Metadata`](/mod/game-api/types/assembly-api-models/agonesobject#m-metadata), [`GameServerAllocationSpec.Metadata`](/mod/game-api/types/assembly-api-models/gameserverallocationspec#m-metadata).

</div>
