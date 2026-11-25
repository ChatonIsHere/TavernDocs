---
title: "ObjectHistory"
description: "class ObjectHistory in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectHistory

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ObjectSnapshot`](/game-api/types/alta-world-generation/objecthistory-objectsnapshot), [`ObjectTrackingSettings`](/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings), [`SnapshotType`](/game-api/types/alta-world-generation/objecthistory-snapshottype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectHistory()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentindex" /><code>{"private int currentIndex"}</code> |  |
| <Link id="m-gizmostoshow" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" gizmosToShow"}</code> |  |
| <Link id="m-isclearing" /><code>{"private bool isClearing"}</code> |  |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> |  |
| <Link id="m-objecthistory" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{"[] objectHistory"}</code> |  |
| <Link id="m-objecttotrack" /><code>{"private Transform objectToTrack"}</code> |  |
| <Link id="m-positiongizmosize" /><code>{"private float positionGizmoSize"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trackobject" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/objecthistory">{"ObjectHistory"}</Link>{" TrackObject(Transform target, "}<Link to="/game-api/types/alta-world-generation/objecthistory-objecttrackingsettings">{"ObjectHistory.ObjectTrackingSettings"}</Link>{" settings)"}</code> |  |
| <Link id="m-addobjectsnapshot" /><code>{"private void AddObjectSnapshot("}<Link to="/game-api/types/alta-world-generation/objecthistory-objectsnapshot">{"ObjectHistory.ObjectSnapshot"}</Link>{" snapshot)"}</code> |  |
| <Link id="m-capturenetworkrigidbody" /><code>{"private void CaptureNetworkRigidbody()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-recordobject" /><code>{"private void RecordObject("}<Link to="/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" updateMethod)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
