@echo off
rem UN SOLO servidor local para todo: panel (raiz) + visor 3D (visor\).
start "" http://localhost:8300/
python -m http.server 8300
