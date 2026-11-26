---
title: "ObjectHistory.ObjectTrackingSettings"
description: "Settings for an ObjectHistory debug tracker: which loops record the object's transform and how many records to keep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectHistory.ObjectTrackingSettings

A **class** in `Root.Township`, `Alta.Populations`.

Settings for an `ObjectHistory` debug tracker: which loops record the object's transform and how many records to keep.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ObjectHistory`](/mod/game-api/types/alta-world-generation/objecthistory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectTrackingSettings()"}</code> | <span className="api-desc">Creates an `ObjectHistory.ObjectTrackingSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istrackinginfixedupdate" /><code>{"private bool isTrackingInFixedUpdate"}</code> | <span className="api-desc">Backing field for `IsTrackingInFixedUpdate`.</span> |
| <Link id="m-istrackinginlateupdate" /><code>{"private bool isTrackingInLateUpdate"}</code> | <span className="api-desc">Backing field for `IsTrackingInLateUpdate`.</span> |
| <Link id="m-istrackinginupdate" /><code>{"private bool isTrackingInUpdate"}</code> | <span className="api-desc">Backing field for `IsTrackingInUpdate`.</span> |
| <Link id="m-istrackingnetworkrigidbody" /><code>{"private bool isTrackingNetworkRigidbody"}</code> | <span className="api-desc">Backing field for `IsTrackingNetworkRigidbody`.</span> |
| <Link id="m-maxnumberofrecords" /><code>{"private int maxNumberOfRecords"}</code> | <span className="api-desc">Backing field for `MaxNumberOfRecords`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istrackinginfixedupdate-2" /><code>{"bool IsTrackingInFixedUpdate { get; set; }"}</code> | <span className="api-desc">Record the transform every fixed update (default true).</span> |
| <Link id="m-istrackinginlateupdate-2" /><code>{"bool IsTrackingInLateUpdate { get; set; }"}</code> | <span className="api-desc">Record the transform every late update (default true).</span> |
| <Link id="m-istrackinginupdate-2" /><code>{"bool IsTrackingInUpdate { get; set; }"}</code> | <span className="api-desc">Record the transform every update (default true).</span> |
| <Link id="m-istrackingnetworkrigidbody-2" /><code>{"bool IsTrackingNetworkRigidbody { get; set; }"}</code> | <span className="api-desc">Also record the object's network rigidbody state after each network receive.</span> |
| <Link id="m-maxnumberofrecords-2" /><code>{"int MaxNumberOfRecords { get; set; }"}</code> | <span className="api-desc">Size of the ring buffer of records (default 10000); older ones are overwritten.</span> |

## Used in

Members of other types that take, return or hold a `ObjectTrackingSettings`:

<div className="api-used-in">

[`ObjectHistory.settings`](/mod/game-api/types/alta-world-generation/objecthistory#m-settings), [`ObjectHistory.TrackObject`](/mod/game-api/types/alta-world-generation/objecthistory#m-trackobject).

</div>
