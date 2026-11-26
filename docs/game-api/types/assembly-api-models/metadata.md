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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Metadata()"}</code> | Creates a `Metadata` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-annotations" /><code>{"Dictionary<string, string> Annotations { get; set; }"}</code> | Kubernetes annotations. |
| <Link id="m-creationtime" /><code>{"DateTime? CreationTime { get; set; }"}</code> | When the object was created, if known. |
| <Link id="m-generatename" /><code>{"string GenerateName { get; set; }"}</code> | Prefix Kubernetes uses to generate a name. |
| <Link id="m-labels" /><code>{"Dictionary<string, string> Labels { get; set; }"}</code> | Kubernetes labels. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Object name. |
| <Link id="m-namespace" /><code>{"string Namespace { get; set; }"}</code> | Kubernetes namespace ("default" unless set). |
| <Link id="m-resourceversion" /><code>{"string ResourceVersion { get; set; }"}</code> | Kubernetes resource version. |

## Used in

Members of other types that take, return or hold a `Metadata`:

[`AgonesObject.Metadata`](/game-api/types/assembly-api-models/agonesobject#m-metadata), [`GameServerAllocationSpec.Metadata`](/game-api/types/assembly-api-models/gameserverallocationspec#m-metadata).
