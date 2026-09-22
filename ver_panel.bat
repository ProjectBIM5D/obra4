@echo off
rem UN SOLO servidor local para todo: visor 3D (raiz) + panel/dashboard/parte diario (dashboard\).
start "" http://localhost:8300/dashboard/panel.html
python -m http.server 8300
