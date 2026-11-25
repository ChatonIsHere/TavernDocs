---
title: "NativeHttp"
description: "A blocking HTTP GET client on Windows' WinHTTP, for mod downloads during reconcile, before Unity's TLS is up."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NativeHttp

A **class** in `TavernLib`, `TavernLib.Backend`.

A blocking HTTP GET client on Windows' WinHTTP, for mod downloads during reconcile, before Unity's TLS is up. One instance is one session; don't use it on the main thread.

- **Listed in** [TavernLib.Backend](/tavernlib-api/types/backend)
- **Inherits or implements** `IDisposable`
- **Documented in** [NativeHttp](/tavernlib-api/types/backend/nativehttp), [Internals](/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NativeHttp()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private IntPtr _session"}</code> |  |
| <Link id="m-useragent" /><code>{"private const string UserAgent"}</code> |  |
| <Link id="m-winhttpaccesstypeautomaticproxy" /><code>{"private const uint WinHttpAccessTypeAutomaticProxy"}</code> |  |
| <Link id="m-winhttpaccesstypedefaultproxy" /><code>{"private const uint WinHttpAccessTypeDefaultProxy"}</code> |  |
| <Link id="m-winhttpflagsecure" /><code>{"private const uint WinHttpFlagSecure"}</code> |  |
| <Link id="m-winhttpquerycontentlength" /><code>{"private const uint WinHttpQueryContentLength"}</code> |  |
| <Link id="m-winhttpqueryflagnumber" /><code>{"private const uint WinHttpQueryFlagNumber"}</code> |  |
| <Link id="m-winhttpquerystatuscode" /><code>{"private const uint WinHttpQueryStatusCode"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Closes the WinHTTP session. |
| <Link id="m-download" /><code>{"void Download(string url, Stream destination, DateTime deadlineUtc, TimeSpan stallTimeout, long maxBytes)"}</code> | Writes a URL's body into a stream. Throws on a non-2xx status, a body over `maxBytes`, a stalled step or the deadline passing. |
| <Link id="m-getstring" /><code>{"string GetString(string url, TimeSpan timeout, long maxBytes)"}</code> | Downloads a URL and returns its body as UTF-8 text, within the timeout and size limit. |
| <Link id="m-check" /><code>{"private static void Check(bool ok, string call)"}</code> |  |
| <Link id="m-describe" /><code>{"private static string Describe(int code)"}</code> |  |
| <Link id="m-remainingms" /><code>{"private static int RemainingMs(DateTime deadlineUtc, string url)"}</code> |  |
| <Link id="m-session-2" /><code>{"private IntPtr Session()"}</code> |  |
| <Link id="m-toolarge" /><code>{"private static IOException TooLarge(Uri uri, long maxBytes)"}</code> |  |
| <Link id="m-winhttpclosehandle" /><code>{"private static bool WinHttpCloseHandle(IntPtr handle)"}</code> |  |
| <Link id="m-winhttpconnect" /><code>{"private static IntPtr WinHttpConnect(IntPtr session, string server, ushort port, uint reserved)"}</code> |  |
| <Link id="m-winhttpopen" /><code>{"private static IntPtr WinHttpOpen(string agent, uint accessType, string proxyName, string proxyBypass, uint flags)"}</code> |  |
| <Link id="m-winhttpopenrequest" /><code>{"private static IntPtr WinHttpOpenRequest(IntPtr connection, string verb, string objectName, string version, string referrer, IntPtr acceptTypes, uint flags)"}</code> |  |
| <Link id="m-winhttpqueryheaders" /><code>{"private static bool WinHttpQueryHeaders(IntPtr request, uint infoLevel, IntPtr name, ref uint buffer, ref uint bufferLength, IntPtr index)"}</code> |  |
| <Link id="m-winhttpreaddata" /><code>{"private static bool WinHttpReadData(IntPtr request, byte[] buffer, uint bytesToRead, out uint bytesRead)"}</code> |  |
| <Link id="m-winhttpreceiveresponse" /><code>{"private static bool WinHttpReceiveResponse(IntPtr request, IntPtr reserved)"}</code> |  |
| <Link id="m-winhttpsendrequest" /><code>{"private static bool WinHttpSendRequest(IntPtr request, IntPtr headers, uint headersLength, IntPtr optional, uint optionalLength, uint totalLength, IntPtr context)"}</code> |  |
| <Link id="m-winhttpsettimeouts" /><code>{"private static bool WinHttpSetTimeouts(IntPtr handle, int resolveMs, int connectMs, int sendMs, int receiveMs)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NativeHttp`:

[`ModInstaller.DownloadVerifyMove`](/tavernlib-api/types/backend-mods/modinstaller#m-downloadverifymove), [`ModInstaller.InstallLibraryDependency`](/tavernlib-api/types/backend-mods/modinstaller#m-installlibrarydependency), [`ModInstaller.InstallMod`](/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.VerifiedDownload`](/tavernlib-api/types/backend-mods/modinstaller#m-verifieddownload), [`ModReconciler.Pass.Pass`](/tavernlib-api/types/backend-mods/modreconciler-pass#m-ctor), [`ModRepoClient.ModRepoClient`](/tavernlib-api/types/backend-mods/modrepoclient#m-ctor).
