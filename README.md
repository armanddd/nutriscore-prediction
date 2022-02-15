# Utilisation du modéle

`from joblib import load` \
`model = load('modelTest.sav')` \
`model.predict([energy_100g, fat_100g, saturated-fat_100g, sugars_100g, proteins_100g, fiber_100g, salt_100g])` 


# Installation de l'application en local

`1. git clone https://gitlab.com/simplon-dev-ia/grenoble-2021-2022/projets/projet-1/projet-1-groupe-2.git` \
`2. pipenv install` \
`3. lancer commande "uvicorn main:app --reload"` 

# Utilisation de l'application deployée via le formulaire

Se rendre sur `https://nutriscore-prod.herokuapp.com/formulaire` et utiliser le formulaire en ligne.

# Utilisation de l'application deployée via l'API

Effectuer une requête POST vers `https://nutriscore-prod.herokuapp.com/prediction` en utilisant l'outil de son choix.

La requête devra contenir une ou plusieures des données suivantes(sur 100g) : `energie, mg, acideGrasSature, sucres, proteines, fibres, sel`.

Example de requête effectuée depuis `https://reqbin.com/` : 

```json
{
	"energie": "0",
	"mg": "0",
	"acideGrasSature": "0",
	"proteines": "0",
	"fibres": "0",
	"sel": "0",
	"sucres": "0"
}
```
