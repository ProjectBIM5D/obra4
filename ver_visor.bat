@echo off
rem Abre el visor 3D (BIM 5D) local, con los datos mas recientes de avance.xlsx.
rem Si registraste partes diarios nuevos, corre antes db\actualizar_visor.bat.
cd /d "%~dp0"
start "" http://localhost:8500
python -m http.server 8500
