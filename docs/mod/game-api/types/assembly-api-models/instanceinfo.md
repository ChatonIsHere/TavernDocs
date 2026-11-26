---
title: "InstanceInfo"
description: "A running server instance in Alta's hosting, as listed by IInstancesClient."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InstanceInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A running server instance in Alta's hosting, as listed by `IInstancesClient`.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InstanceInfo()"}</code> | Creates an `InstanceInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> | Fleet the instance belongs to. |
| <Link id="m-image" /><code>{"string Image { get; set; }"}</code> | Image the instance runs. |
| <Link id="m-instancename" /><code>{"string InstanceName { get; set; }"}</code> | Name of the instance. |
| <Link id="m-podstatus" /><code>{"string PodStatus { get; set; }"}</code> | Status of the instance's pod. |
| <Link id="m-region" /><code>{"string Region { get; set; }"}</code> | Region the instance runs in. |
| <Link id="m-serveridentifier" /><code>{"int? ServerIdentifier { get; set; }"}</code> | Id of the game server on the instance, if any. |

## Used in

Members of other types that take, return or hold a `InstanceInfo`:

[`IInstancesClient.GetAllRunningInstance`](/mod/game-api/types/assembly-api-client/iinstancesclient#m-getallrunninginstance), [`InstancesClient.GetAllRunningInstance`](/mod/game-api/types/assembly-api-client/instancesclient#m-getallrunninginstance), [`LowLevelApiClient.GetAllRunningInstances`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getallrunninginstances).
