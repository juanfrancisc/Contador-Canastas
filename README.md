# Contador-Canastas

Canasta Solidaria CBCM

Copiar dicha carpeta de desarrollo a una ruta cualquiera, y hacer que Chrome ejecute contador.html como pagina de inicio

# Instalar:
  sudo apt-get install unclutter sed 

# Creamos un fichero kiosk.sh dentro de la carpeta, con las siguinetes lineas:

  #!/bin/bash
  
  xset -dpms
  
  xset s off
  
  xset s noblank
  
  unclutter &
  
  #matchbox-window-manager -use_cursor no -use_titlebar no  &
  
  chromium-browser -a http://www.google.com -kiosk (cambiar por la url que se precise)

# Creamos un servicio Systemd:
  Crear un archivo en /lib/systemd/system:
      sudo nano /lib/systemd/system/mytest.service
  Pegar las siguientes líneas:
        [Unit]
        Description=MyService
        After=multi-user.target

        [Service]
        Type=idle
        ExecStart=/home/pi/Desktop/Contador-Canastas-main/kiosk.sh
        
        [Install]
        WantedBy=multi-user.target

# Modificar los permisos del archivo del servicio para que coincidan con otros servicios del sistema:
  sudo chmod 644 /lib/systemd/system/mytest.service
# Finalmente, decirle a systemd que lo ejecute al inicio:
  sudo systemctl enable mytest.service

