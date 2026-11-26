---
title: "ObjectHistory"
description: "Debug component that records an object's position and rotation every Update, FixedUpdate and LateUpdate into a ring buffer and draws them as gizmos."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectHistory

A **class** in `Root.Township`, `Alta.Populations`.

Debug component that records an object's position and rotation every Update, FixedUpdate and LateUpdate into a ring buffer and draws them as gizmos.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ObjectSnapshot`](/game-api/types/alta-world-generation/objecthistory-objectsnapshot), [`ObjectTrackingSettings`](/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings), [`SnapshotType`](/game-api/types/alta-world-generation/objecthistory-snapshottype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectHistory()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | Next slot to write in the ring buffer. |
| <Link id="m-gizmostoshow" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" gizmosToShow"}</code> | Which snapshot kinds to draw. |
| <Link id="m-isclearing" /><code>{"private bool isClearing"}</code> | Inspector Clear button. Nothing reads it in this build. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | The tracked object's `NetworkRigidbody`, if any. |
| <Link id="m-objecthistory" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{"[] objectHistory"}</code> | The ring buffer of snapshots. |
| <Link id="m-objecttotrack" /><code>{"private Transform objectToTrack"}</code> | The transform being recorded. |
| <Link id="m-positiongizmosize" /><code>{"private float positionGizmoSize"}</code> | Radius of each snapshot sphere. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings"}</code> | Which update loops to record in and the buffer size. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trackobject" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/objecthistory">{"ObjectHistory"}</Link>{" TrackObject(Transform target, "}<Link to="/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings)"}</code> | Adds an `ObjectHistory` to the target and starts tracking it with the given settings. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addobjectsnapshot" /><code>{"private void AddObjectSnapshot("}<Link to="/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{" snapshot)"}</code> | Writes a snapshot into the ring buffer, overwriting the oldest once full. |
| <Link id="m-capturenetworkrigidbody" /><code>{"private void CaptureNetworkRigidbody()"}</code> | Records the tracked `NetworkRigidbody`'s networked position and rotation. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Records a snapshot if fixed update tracking is on. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Records a snapshot if late update tracking is on. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws a sphere and forward ray for each snapshot of the chosen kinds. Probably throws until the buffer is full, since empty slots are null. |
| <Link id="m-recordobject" /><code>{"private void RecordObject("}<Link to="/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" updateMethod)"}</code> | Records the tracked transform's current position and rotation. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Allocates the buffer and finds the `NetworkRigidbody` if that tracking is on. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Records a snapshot, and when network rigidbody tracking is on adds another `Socket.EndOfReceival` handler every frame (never removed). |

</details>
