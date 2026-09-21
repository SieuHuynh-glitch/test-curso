$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:4173/")
$listener.Start()
Write-Output "Serving $root at http://127.0.0.1:4173/"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = [Uri]::UnescapeDataString($ctx.Request.Url.LocalPath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }
  $full = Join-Path $root $path
  if (Test-Path $full -PathType Container) { $full = Join-Path $full "index.html" }
  if (Test-Path $full -PathType Leaf) {
    $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
    $type = switch ($ext) {
      ".html" { "text/html; charset=utf-8" }
      ".css"  { "text/css; charset=utf-8" }
      ".js"   { "text/javascript; charset=utf-8" }
      default { "application/octet-stream" }
    }
    $bytes = [IO.File]::ReadAllBytes($full)
    $ctx.Response.ContentType = $type
    $ctx.Response.StatusCode = 200
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $msg = [Text.Encoding]::UTF8.GetBytes("Not found")
    $ctx.Response.StatusCode = 404
    $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
  }
  $ctx.Response.Close()
}
