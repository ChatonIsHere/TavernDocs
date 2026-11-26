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

- **Listed in** [TavernLib.Backend](/mod/tavernlib-api/types/backend)
- **Inherits or implements** `IDisposable`
- **Documented in** [NativeHttp](/mod/tavernlib-api/types/backend/nativehttp), [Internals](/mod/tavernlib-api/internals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NativeHttp()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private IntPtr _session"}</code> | The WinHTTP session handle, opened on first use and closed by `Dispose`. |
| <Link id="m-useragent" /><code>{"private const string UserAgent"}</code> | The user agent sent, "TavernLib". |
| <Link id="m-winhttpaccesstypeautomaticproxy" /><code>{"private const uint WinHttpAccessTypeAutomaticProxy"}</code> | WinHTTP access type 4, the automatic system proxy. |
| <Link id="m-winhttpaccesstypedefaultproxy" /><code>{"private const uint WinHttpAccessTypeDefaultProxy"}</code> | WinHTTP access type 0, the WinHTTP-configured proxy. |
| <Link id="m-winhttpflagsecure" /><code>{"private const uint WinHttpFlagSecure"}</code> | WinHTTP flag that makes a request use HTTPS. |
| <Link id="m-winhttpquerycontentlength" /><code>{"private const uint WinHttpQueryContentLength"}</code> | WinHTTP header query for the content length. |
| <Link id="m-winhttpqueryflagnumber" /><code>{"private const uint WinHttpQueryFlagNumber"}</code> | WinHTTP flag that returns a header as a number. |
| <Link id="m-winhttpquerystatuscode" /><code>{"private const uint WinHttpQueryStatusCode"}</code> | WinHTTP header query for the status code. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Closes the WinHTTP session. |
| <Link id="m-download" /><code>{"void Download(string url, Stream destination, DateTime deadlineUtc, TimeSpan stallTimeout, long maxBytes)"}</code> | Writes a URL's body into a stream. Throws on a non-2xx status, a body over `maxBytes`, a stalled step or the deadline passing. |
| <Link id="m-getstring" /><code>{"string GetString(string url, TimeSpan timeout, long maxBytes)"}</code> | Downloads a URL and returns its body as UTF-8 text, within the timeout and size limit. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private static void Check(bool ok, string call)"}</code> | Throws an `IOException` naming the WinHTTP call if it failed. |
| <Link id="m-describe" /><code>{"private static string Describe(int code)"}</code> | Turns a WinHTTP error code into readable text. |
| <Link id="m-remainingms" /><code>{"private static int RemainingMs(DateTime deadlineUtc, string url)"}</code> | Milliseconds left until the deadline; throws a `TimeoutException` once it has passed. |
| <Link id="m-session-2" /><code>{"private IntPtr Session()"}</code> | Returns the WinHTTP session, opening it with the automatic proxy first and the default proxy as a fallback. |
| <Link id="m-toolarge" /><code>{"private static IOException TooLarge(Uri uri, long maxBytes)"}</code> | Builds the error for a response over the size limit. |
| <Link id="m-winhttpclosehandle" /><code>{"private static bool WinHttpCloseHandle(IntPtr handle)"}</code> | P/Invoke into `winhttp.dll` that closes a handle. |
| <Link id="m-winhttpconnect" /><code>{"private static IntPtr WinHttpConnect(IntPtr session, string server, ushort port, uint reserved)"}</code> | P/Invoke into `winhttp.dll` that connects to a server and port. |
| <Link id="m-winhttpopen" /><code>{"private static IntPtr WinHttpOpen(string agent, uint accessType, string proxyName, string proxyBypass, uint flags)"}</code> | P/Invoke into `winhttp.dll` that opens a session. |
| <Link id="m-winhttpopenrequest" /><code>{"private static IntPtr WinHttpOpenRequest(IntPtr connection, string verb, string objectName, string version, string referrer, IntPtr acceptTypes, uint flags)"}</code> | P/Invoke into `winhttp.dll` that opens a request. |
| <Link id="m-winhttpqueryheaders" /><code>{"private static bool WinHttpQueryHeaders(IntPtr request, uint infoLevel, IntPtr name, ref uint buffer, ref uint bufferLength, IntPtr index)"}</code> | P/Invoke into `winhttp.dll` that reads a response header. |
| <Link id="m-winhttpreaddata" /><code>{"private static bool WinHttpReadData(IntPtr request, byte[] buffer, uint bytesToRead, out uint bytesRead)"}</code> | P/Invoke into `winhttp.dll` that reads response body bytes. |
| <Link id="m-winhttpreceiveresponse" /><code>{"private static bool WinHttpReceiveResponse(IntPtr request, IntPtr reserved)"}</code> | P/Invoke into `winhttp.dll` that waits for the response. |
| <Link id="m-winhttpsendrequest" /><code>{"private static bool WinHttpSendRequest(IntPtr request, IntPtr headers, uint headersLength, IntPtr optional, uint optionalLength, uint totalLength, IntPtr context)"}</code> | P/Invoke into `winhttp.dll` that sends a request. |
| <Link id="m-winhttpsettimeouts" /><code>{"private static bool WinHttpSetTimeouts(IntPtr handle, int resolveMs, int connectMs, int sendMs, int receiveMs)"}</code> | P/Invoke into `winhttp.dll` that sets the resolve, connect, send and receive timeouts. |

</details>

## Used in

Members of other types that take, return or hold a `NativeHttp`:

[`ModInstaller.DownloadVerifyMove`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-downloadverifymove), [`ModInstaller.InstallLibraryDependency`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-installlibrarydependency), [`ModInstaller.InstallMod`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-installmod), [`ModInstaller.VerifiedDownload`](/mod/tavernlib-api/types/backend-mods/modinstaller#m-verifieddownload), [`ModReconciler.Pass.Pass`](/mod/tavernlib-api/types/backend-mods/modreconciler-pass#m-ctor), [`ModRepoClient.ModRepoClient`](/mod/tavernlib-api/types/backend-mods/modrepoclient#m-ctor).
