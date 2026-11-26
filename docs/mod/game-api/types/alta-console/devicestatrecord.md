---
title: "DeviceStatRecord"
description: "Obsolete analytics record of the player's hardware, filled from Unity's SystemInfo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceStatRecord

A **class** in `Root.Township`, `Alta.Analytics`.

Obsolete analytics record of the player's hardware, filled from Unity's `SystemInfo`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `AnalyticsRecordForAll`, `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeviceStatRecord()"}</code> | Creates a `DeviceStatRecord` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-devicemodel" /><code>{"string DeviceModel { get; set; }"}</code> | The device model. |
| <Link id="m-devicename" /><code>{"string DeviceName { get; set; }"}</code> | The device's user-set name. |
| <Link id="m-devicetype" /><code>{"string DeviceType { get; set; }"}</code> | Desktop, handheld, console and so on, as text. |
| <Link id="m-deviceuniqueidentifier" /><code>{"string DeviceUniqueIdentifier { get; set; }"}</code> | Unity's unique ID for the device. |
| <Link id="m-graphicsdeviceid" /><code>{"int GraphicsDeviceID { get; set; }"}</code> | The GPU's device ID. |
| <Link id="m-graphicsdevicename" /><code>{"string GraphicsDeviceName { get; set; }"}</code> | The GPU name. |
| <Link id="m-graphicsdevicetype" /><code>{"string GraphicsDeviceType { get; set; }"}</code> | The graphics API in use, as text. |
| <Link id="m-graphicsdevicevendor" /><code>{"string GraphicsDeviceVendor { get; set; }"}</code> | The GPU vendor name. |
| <Link id="m-graphicsdevicevendorid" /><code>{"int GraphicsDeviceVendorID { get; set; }"}</code> | The GPU vendor ID. |
| <Link id="m-graphicsdeviceversion" /><code>{"string GraphicsDeviceVersion { get; set; }"}</code> | The graphics API version string. |
| <Link id="m-graphicsmemorysize" /><code>{"int GraphicsMemorySize { get; set; }"}</code> | GPU memory in megabytes. |
| <Link id="m-operatingsystem" /><code>{"string OperatingSystem { get; set; }"}</code> | The operating system name and version. |
| <Link id="m-operatingsystemfamily" /><code>{"string OperatingSystemFamily { get; set; }"}</code> | Windows, Linux, Mac and so on, as text. |
| <Link id="m-processorcount" /><code>{"int ProcessorCount { get; set; }"}</code> | Number of logical processors. |
| <Link id="m-processorfrequency" /><code>{"int ProcessorFrequency { get; set; }"}</code> | Processor frequency in MHz. |
| <Link id="m-processortype" /><code>{"string ProcessorType { get; set; }"}</code> | The processor name. |
| <Link id="m-systemmemorysize" /><code>{"int SystemMemorySize { get; set; }"}</code> | System memory in megabytes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromsysteminfo" /><code>{"static "}<Link to="/mod/game-api/types/alta-console/devicestatrecord">{"DeviceStatRecord"}</Link>{" FromSystemInfo()"}</code> | Makes a record from the current machine's `SystemInfo`. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Lists every field on its own line. |
