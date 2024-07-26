/* 
1-Fomba f'instalena ANGULAR:
    * Presence de CONNEXION;
    * Mila instalena aloha ny 'Node.js';
    * Mamorona Dossier tiana asiana ny Projet;
    * Manokatra 'cmd' amn iny chem1 de Dossier iny;
    * Dia adika eo @ 'cmd' ny commande fi_instalena ANGULAR
        ==> "npm install -g @angular/cli" ampina 'touche ENTRE=ENTER';
    * Foronina eo @ 'cmd' ny anaran'Dossier mitondra an'ireo element ilaina
        ==> "ng new first-projet-angular", io 'first-projet-angular' io dia afaka soloana @izay anarana dossier tiana.
    * Ahitana QUESTION maro2 avy eo:
        -Atao/misafidy par defaut
    DIA VITA NY INSTALATION

2-Fomba fanaovana Projet amn izay:
    * Sokafana amn editeur_na_texte amn izay io 'first-projet-angular' io;
    * Tsara ho fantatra fa ahitana Dossier 'src' ny ao ary ao anatin'io 'src' io ahitana dossier 'App',
        -io 'App' io no mitondra ireo fichier maro2 par defaut : (IZY no prioritaire)
            # 'app.component.css' : fichier mitondra ny css n'ny fichier 'app.component.html'.
            # 'app.component.html' : fichier mitondra ny html(par defaut) na fichier(misy code tina hafiche_na) any amn navigateur, fa
                saingy mila importena ary amn ('declaration:[]' = 'imports:[]') ilay ('valeur' = nom de la fichier tina haseho).
                    io ('declaration:[]'= 'imports:[]') io dia ao amn fichier ('app.module.ts' = 'App.component.ts')
            # Ny fichier(misy code tina hafiche_na) dia ao anatin'ny dossier izay foronina @ll n'ny 
                commande ==> "ng gerate component nameDossier" mba hananany an'ireo fichier ahitana 'component'.
            
3-Fomba fi_lence_na AZY:
    a-eo amn TERMINAL VS CODE:
        -Adika ny commande ==>"ng serve" OU "ng s"
            .SI manome erreur izy dia mila configure_na zay (mazana ato amn vs code no ahitana an izany fa any amn cmd
                ts manao erreur)
            .Atao ity commande ity "set-executionpolicy remotesigned",avy eo miverna manao ny commande
        -Manome HELP IZY raha manindry 'touche H',
            Ahitana an ireto (Shortcuts) :
                press r + enter to force reload browser
                press u + enter to show server url (omeny ny adresse 'Local:   http://localhost:4200/')
                press o + enter to open in browser (manokatra navigateur automatique IZY)
                press c + enter to clear console
                press q + enter to quit
        -NA Adika ny commande ==>"ng serve -o" OU "ng s -o" dia manokatra navigateur automatique IZY
        -NA Adika ny commande ==>"ng serve " avy eo manindry touche "control" + mi_click lien 'local omeny ao '
         

    b-eo amn CMD:
        -Ao anatin chemin1 dossie misy ny projet no anaovana ny commande ==>"ng serve",
        -Manome HELP IZY raha manindry 'touche H',
            Ahitana an ireto (Shortcuts) :
                press r + enter to force reload browser
                press u + enter to show server url (omeny ny adresse 'Local:   http://localhost:4200/')
                press o + enter to open in browser (manokatra navigateur automatique IZY)
                press c + enter to clear console
                press q + enter to quit
        -NA Adika ny commande ==>"ng serve -o" OU "ng s -o" dia manokatra navigateur automatique IZY
        -NA Adika ny commande ==>"ng serve " avy eo manindry touche "control" + mi_click lien 'local omeny ao '

4-Quelque COMMANDE :
    "ng v" : mijery version

    DIA OH IZAY

*/