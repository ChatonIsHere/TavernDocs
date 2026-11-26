---
title: "APIStatusNotification"
description: "A notification list entry for a status message from the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# APIStatusNotification

A **class** in `Root.Township`, `Alta.Meta.UI.ServerManagement`.

A notification list entry for a status message from the Alta API. Has no accept or decline buttons.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`UINotification`](/game-api/types/alta-menus/uinotification), `IEquatable<APIStatusNotification>`
- **Derived types** [`APIStatusNotification`](/game-api/types/alta-menus/apistatusnotification)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"APIStatusNotification("}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status, "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Creates an `APIStatusNotification` from `status` and `panel`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/status">{"Status"}</Link>{" status"}</code> | The status this entry shows. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isusingaccept" /><code>{"override bool IsUsingAccept { get; }"}</code> | Always false. |
| <Link id="m-isusingdecline" /><code>{"override bool IsUsingDecline { get; }"}</code> | Always false. |
| <Link id="m-message" /><code>{"override string Message { get; }"}</code> | The status message text. |
| <Link id="m-shortmessage" /><code>{"override string ShortMessage { get; }"}</code> | The status title. |
| <Link id="m-time" /><code>{"override DateTime Time { get; }"}</code> | When the status was last updated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | Two entries are equal if their statuses have the same ID (the typed overload compares the status objects). |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/game-api/types/alta-menus/apistatusnotification">{"APIStatusNotification"}</Link>{" other)"}</code> | Two entries are equal if their statuses have the same ID (the typed overload compares the status objects). |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the status object. |
