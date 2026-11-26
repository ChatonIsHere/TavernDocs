---
title: "CosmeticPackScheduler"
description: "Queue that runs character cosmetic packing one CosmeticPacker at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPackScheduler

A **class** in `Root.Township`, `Alta.Customization`.

Queue that runs character cosmetic packing one `CosmeticPacker` at a time. Client side; use the static `Instance`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPackScheduler()"}</code> | Creates a `CosmeticPackScheduler` with default values. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelcurrent" /><code>{"private CancellationTokenSource cancelCurrent"}</code> | Cancellation source for the pack in progress. |
| <Link id="m-current" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" current"}</code> | The packer being packed now, or null when idle. |
| <Link id="m-inqueue" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{"> inQueue"}</code> | Set of queued packers, used to skip duplicates and cancelled entries. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-packsession" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" packSession"}</code> | Addressable session shared by all packs in one run of the queue; disposed when the queue empties. |
| <Link id="m-platformdevice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | Platform device service, used to switch the `CharacterPaking` FFV source while packing. |
| <Link id="m-queue" /><code>{"private Queue<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{"> queue"}</code> | Packers waiting to be packed, in order. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-customization/cosmeticpackscheduler">{"CosmeticPackScheduler"}</Link>{" Instance { get; }"}</code> | The single shared scheduler. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel("}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" packer)"}</code> | Cancels the packer if it is packing now, or drops it from the queue. |
| <Link id="m-enqueue" /><code>{"void Enqueue("}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker">{"CosmeticPacker"}</Link>{" packer)"}</code> | Queues a packer. If that packer is already packing, its current pack is cancelled and it is queued again. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startprocessing" /><code>{"private async void StartProcessing()"}</code> | Works through the queue, calling each packer's `PackFromScheduler` with one shared addressable session, and logs errors instead of stopping. |

</details>
