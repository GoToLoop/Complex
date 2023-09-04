cd ..
set /a port = %random% * 40000 / 32768 + 10000
start servor . index.html %port%
start http://localhost:%port%
