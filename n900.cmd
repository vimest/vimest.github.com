@echo on && setlocal enabledelayedexpansion
color 02
for %%f in (*) do (
	set ofile=%%f
	set nfile=%%~nf
	ffmpeg.exe -i "!ofile!" -ac 2 -ab 128k -ar 44100 -aspect 16:9 -s 800x480 -b 555k "!nfile!".n900.mp4
)
pause
