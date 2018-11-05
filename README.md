# File-Transfert-Protocol
# File-Transfert-Protocol

### SERVEUR
0_ créer un fichier de conf dans '/$home/ftp/config/.conf'
  ou tu declares un token:
  
  tokenUpload="58zf6f558fs58f"
  
  et l'exporter !

1_ creation serveur nodejs
  - express
  
 2_ faire un router avec2 niveaux
  - /ftp          (1er lvl)
  - /ftp/upload   (2eme lvl)
  - /ftp/download (2eme lvl)
  
 3_ faire un middleware pour checker un token sur la route /ftp/upload
  !! si le token passé dans la requete est faux, la requete n'atteind pas l'api et repond avec une erreur 400 + un message d'erreur !!
  
 4_ trouver un moyen d'upload le fichier avec express. 
 en l'envoyant un réponse avec un status 200.
 
 
### CLIENT
0_ construire une requete avc 'curl' qui envoie ses parametres en query
  - path: le path absolut du fichier
  
 pour attaquer ton serveur qui tourne en local
 
### steps ( apres)
1_ dl un fichier texte
2_ dl un fichier jpeg/image
3_ dl un fichier pdf/binaire
