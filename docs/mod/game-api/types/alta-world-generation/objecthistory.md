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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ObjectSnapshot`](/mod/game-api/types/alta-world-generation/objecthistory-objectsnapshot), [`ObjectTrackingSettings`](/mod/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings), [`SnapshotType`](/mod/game-api/types/alta-world-generation/objecthistory-snapshottype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectHistory()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> | <span className="api-desc">Next slot to write in the ring buffer.</span> |
| <Link id="m-gizmostoshow" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" gizmosToShow"}</code> | <span className="api-desc">Which snapshot kinds to draw.</span> |
| <Link id="m-isclearing" /><code>{"private bool isClearing"}</code> | <span className="api-desc">Inspector Clear button. Nothing reads it in this build.</span> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | <span className="api-desc">The tracked object's `NetworkRigidbody`, if any.</span> |
| <Link id="m-objecthistory" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{"[] objectHistory"}</code> | <span className="api-desc">The ring buffer of snapshots.</span> |
| <Link id="m-objecttotrack" /><code>{"private Transform objectToTrack"}</code> | <span className="api-desc">The transform being recorded.</span> |
| <Link id="m-positiongizmosize" /><code>{"private float positionGizmoSize"}</code> | <span className="api-desc">Radius of each snapshot sphere.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings"}</code> | <span className="api-desc">Which update loops to record in and the buffer size.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trackobject" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/objecthistory">{"ObjectHistory"}</Link>{" TrackObject(Transform target, "}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Adds an `ObjectHistory` to the target and starts tracking it with the given settings.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addobjectsnapshot" /><code>{"private void AddObjectSnapshot("}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{" snapshot)"}</code> | <span className="api-desc">Writes a snapshot into the ring buffer, overwriting the oldest once full.</span> |
| <Link id="m-capturenetworkrigidbody" /><code>{"private void CaptureNetworkRigidbody()"}</code> | <span className="api-desc">Records the tracked `NetworkRigidbody`'s networked position and rotation.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Records a snapshot if fixed update tracking is on.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Records a snapshot if late update tracking is on.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws a sphere and forward ray for each snapshot of the chosen kinds. Probably throws until the buffer is full, since empty slots are null.</span> |
| <Link id="m-recordobject" /><code>{"private void RecordObject("}<Link to="/mod/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" updateMethod)"}</code> | <span className="api-desc">Records the tracked transform's current position and rotation.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Allocates the buffer and finds the `NetworkRigidbody` if that tracking is on.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Records a snapshot, and when network rigidbody tracking is on adds another `Socket.EndOfReceival` handler every frame (never removed).</span> |

</details>
