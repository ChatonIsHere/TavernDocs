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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`ObjectHistory`](/game-api/types/alta-world-generation/objecthistory)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ObjectTrackingSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istrackinginfixedupdate" /><code>{"private bool isTrackingInFixedUpdate"}</code> | Backing field for `IsTrackingInFixedUpdate`. |
| <Link id="m-istrackinginlateupdate" /><code>{"private bool isTrackingInLateUpdate"}</code> | Backing field for `IsTrackingInLateUpdate`. |
| <Link id="m-istrackinginupdate" /><code>{"private bool isTrackingInUpdate"}</code> | Backing field for `IsTrackingInUpdate`. |
| <Link id="m-istrackingnetworkrigidbody" /><code>{"private bool isTrackingNetworkRigidbody"}</code> | Backing field for `IsTrackingNetworkRigidbody`. |
| <Link id="m-maxnumberofrecords" /><code>{"private int maxNumberOfRecords"}</code> | Backing field for `MaxNumberOfRecords`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istrackinginfixedupdate-2" /><code>{"bool IsTrackingInFixedUpdate { get; set; }"}</code> | Record the transform every fixed update (default true). |
| <Link id="m-istrackinginlateupdate-2" /><code>{"bool IsTrackingInLateUpdate { get; set; }"}</code> | Record the transform every late update (default true). |
| <Link id="m-istrackinginupdate-2" /><code>{"bool IsTrackingInUpdate { get; set; }"}</code> | Record the transform every update (default true). |
| <Link id="m-istrackingnetworkrigidbody-2" /><code>{"bool IsTrackingNetworkRigidbody { get; set; }"}</code> | Also record the object's network rigidbody state after each network receive. |
| <Link id="m-maxnumberofrecords-2" /><code>{"int MaxNumberOfRecords { get; set; }"}</code> | Size of the ring buffer of records (default 10000); older ones are overwritten. |

## Used in

Members of other types that take, return or hold a `ObjectTrackingSettings`:

[`ObjectHistory.settings`](/game-api/types/alta-world-generation/objecthistory#m-settings), [`ObjectHistory.TrackObject`](/game-api/types/alta-world-generation/objecthistory#m-trackobject).
