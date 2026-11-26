---
title: "S3StorageObject"
description: "Base for an S3 file or folder: a bucket name and object key, with delete calls through S3Utility.S3Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3StorageObject

A **class** in `Alta.IO`, `Alta.Utilities`.

Base for an S3 file or folder: a bucket name and object key, with delete calls through `S3Utility.S3Client`.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`S3StorageFile`](/mod/game-api/types/assembly-other/s3storagefile), [`S3StorageFolder`](/mod/game-api/types/assembly-other/s3storagefolder)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"S3StorageObject(string bucketName, string fullName)"}</code> | Creates a `S3StorageObject` from `bucketName` and `fullName`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-objectcontenttype" /><code>{"protected const string ObjectContentType"}</code> | Constant null content type. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bucketname" /><code>{"string BucketName { get; }"}</code> | The S3 bucket. |
| <Link id="m-fullname" /><code>{"string FullName { get; }"}</code> | The object key, with any trailing slash removed. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | The last part of the key. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delete" /><code>{"virtual void Delete()"}</code> | Deletes the object with this key from the bucket. |
| <Link id="m-deleteasync" /><code>{"virtual Task DeleteAsync()"}</code> | Async version of `Delete`. |
