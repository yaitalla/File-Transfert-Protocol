const express = require('express');
const router = express.Router();

const bigObj = {
  fruits: {
    rouge: [ 'pomme', 'cerise', 'tomate', 'fraise' ],
    vert: [ 'pomme', 'poire' ],
    jaune: [ 'ananas', 'mangue' ],
    violet: [ 'raisin', 'mure' ]
  },
  legumes: {
    rouge: [ 'poivron', 'oignon' ],
    vert: [ 'poivron', 'haricot' ],
    jaune: [ 'poivron', 'oignon' ],
    blanc: [ 'oignon' ],
  },
  boissons: {
    rouge: {
      gazeuse: [ 'coca-cola', 'diabolo' ],
      plate: [ 'grenadine', 'fraise' ]
    },
    vert: {
      gazeuse: [ 'sprite', 'diabolo' ],
      plate: [ 'menthe' ]
    },
    jaune: {
      gazeuse: [ 'diabolo' ],
      plate: [ 'ricard', 'pulco-citron' ]
    }
  },
  total: { rouge: 0, vert: 0, jaune: 0, violet: 0, blanc: 0 }
};

/*
map
filter
reduce

*/
const legumes = (obj) => {
  let ret = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      ret += obj[key].length;
    }
  }
  console.log('il y a '+ret+' legumes');
}

const rouge = (obj) => {
  let ret = 0;
  for(key in obj) {
    if (obj[key].rouge.length) {
      ret += obj[key].rouge.length;
    }
  }
  console.log('il y a '+ret+' elements rouges');
}

const gazeux = (obj) => {
  let ret = 0;
  for(key in obj) {
      ret += obj[key].gazeuse.length;
  }
  console.log('il y a '+ret+' boissons gazeuses');
}

const array_valeurVert = (obj) => {
  let ret = [];
  for(key in obj) {
    if (Array.isArray(obj[key].vert))
      ret = ret.concat(obj[key].vert);
    else {
      for(i in obj[key].vert)
        ret = ret.concat(obj[key].vert[i]);
    }
  }
  console.log(ret);
}

router.get('/display', (req, res) => {
    //legumes(bigObj.legumes);
    //rouge(bigObj);
    //gazeux(bigObj.boissons);
    array_valeurVert(bigObj);
    res.redirect('/');
});

/*
# COUNT
1_ compter le nombre de legumes !
2_ compter le nombre d'éléments rouge !
3_ compter le nombre de boissons gazeuse !
# CREATE
1_ créer un TABLEAU qui contient toutes les valeurs 'vert'
 ```ex return: [ pomme, poire, ... ]```
2_ créer un TABLEAU qui contient toutes les valeurs 'rouge' et 'jaune'
  [ATTENTION]: si il y a des doublons, tu affiches SEULEMENT 1 valeur ET tu rajoutes un 'S' a la fin.
3_ créer un tableau qui contient toutes les couleurs que peut avoir un 'diabolo'.
*/
module.exports = router;
