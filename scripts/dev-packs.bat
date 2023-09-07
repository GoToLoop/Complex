( npm -g ls npm-run-all || npm -g i npm-run-all ) & (
  npm -g ls cross-env || npm -g i cross-env ) & (
  npm -g ls servor || npm -g i servor ) & (
  npm -g ls typescript || npm -g i typescript ) & (
  npm -g ls jsdoc || npm -g i jsdoc ) & (
  npm -g ls typedoc || npm -g i typedoc ) & (
  npm -g ls jest || npm -g i jest ) & (
  npm -g ls @jest/globals || npm -g i @jest/globals ) & (
  npm -g ls tsd || npm -g i tsd ) & (
  npm ln tsd @jest/globals )
