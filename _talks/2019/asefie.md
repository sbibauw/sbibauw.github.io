---
title: "Desarrollo de la fluidez oral en lengua extranjera: experimento de medición semiautomática de los efectos de aprendizaje"
type: Paper
event: III Conferencia Internacional de Investigación Educativa ASEFIE 2019
event_url: http://www.asefie.org/index.php/es-co/proximos-eventos/proximos-eventos/conferencia-investigacion-educativa
location: Universidad de Cuenca
address:
  city: Cuenca
  country: Ecuador
date: 2019-11-26T14:00:00.000Z
date_end: 2019-11-26T14:30:00.000Z
authors:
  - S. Bibauw
  - L. Escouflaire
  - T. François
  - P. Desmet
with: Louis Escouflaire, Thomas François, Piet Desmet
tags:
  - dialogue-based-CALL
  - experimental evaluation
  - speaking fluency
  - en español
details: true
layout: paper
---

## Preguntas de investigación

- ¿En qué medida es posible medir de manera valida, confiable y precisa efectos de aprendizaje de corta duración en lengua extranjera en términos de fluidez oral de manera semiautomática?
- ¿Qué medidas de fluidez oral son más validas y más sensibles a efectos de aprendizaje conversacionales en principiantes?
- ¿Qué procesamiento automático del lenguaje de las respuestas de los aprendices son necesarios y cuales son las decisiones más recomendables para automatizar este proceso?

## Enfoque teórico

La operacionalización dominante del desarrollo de la competencia general (_proficiency_) en una lengua extranjera, dentro de los estudios en acquisición de idiomas extranjeros (_second language acquisition_) y enseñanza de idiomas basada en tareas (_task-based language teaching_), divide la competencia en tres dimensiones: complejidad, exactitud y fluidez (_complexity, accuracy, fluency — CAF_) (Michel, 2017). Dentro de estas tres, la fluidez, que representa la habilidad a expresarse con velocidad y facilidad, en particular oralmente, es principalmente medida a través de su dimensión temporal y performativa (_utterance fluency_) (Baker-Smemoe, Dewey, Bown, & Martinsen, 2014). Muchos estudios han intentado validar varias medidas de fluidez oral (por ej., velocidad de habla [*speech rate*], duración promedio de pausas vacías…) en base a su correspondencia con evaluaciones subjetivas de fluidez percibida, o a su capacidad de predecir el nivel de competencia de un locutor (de Jong, 2018; Segalowitz, French, & Guay, 2017). Sin embargo, la casi totalidad de dichos estudios se basa en cálculos manuales (de pausas, de número de sílabas, etc.) y en series de decisiones raras veces explicitadas (¿Qué cuenta como pausa? ¿Qué se cuenta cómo sílaba válida?) que tienen fuertes impactos sobre los resultados, en particular con aprendices menos competentes.

El tratamiento automático del lenguaje permite hoy de realizar la mayoría de estas operaciones de manera sistemática, y de evaluar todas las variaciones posibles en base a la sensibilidad y a la validez de los resultados obtenidos. Dicho estudio busca demonstrar la factibilidad y la validez de estos análisis (semi)automáticos, y determinar los procedimientos más adecuados dentro de un marco de evaluación de efectos de aprendizaje.

## Métodos

En el marco de un estudio experimental aleatorio, 210 alumnos flamencos (Bélgica) de 13-14 años han practicado el francés de manera conversacional a través de un juego educativo compuesto por un sistema de dialogo (Bibauw, François, & Desmet, 2019). Han realizado un pretest y un post-test oral, a través de una entrevista oral presentada y grabada de manera automática por computadora. Sus respuestas (210 × 28 preguntas × 2 periodos = 11 760 respuestas) han sido transcritas automáticamente por reconocimiento del habla, luego revisadas manualmente y procesadas a través de un pipeline de procesamiento (limpieza, filtro, lemmatización, POS tagging, división en sílabas, etc.) para obtener una serie de medidas de fluidez oral, en todas sus variaciones posibles.

Posteriormente, los resultados en todas estas variables de fluidez oral serán analizados estadísticamente a través de un análisis de componentes principales (PCA) para identificar cuales medidas corresponden a cuales dimensiones latentes de la fluidez. Se evaluará su correlación con una prueba de tamaño de vocabulario, utilizada como aproximado de competencia lingüística (Peters, Velghe, & Rompaey, 2019), y su sensibilidad a efectos de aprendizaje de muy corto plazo, en términos de diferencia entre pre y post-test, a través de una modelización linear de efectos mixtos (_mixed-effects linear regression modeling_).

## Conclusiones/resultados

Los primeros resultados de correlación entre una parte de las medidas investigadas y la prueba de tamaño de vocabulario parecen confirmar las decisiones intuitivas que tomamos inicialmente en validar la selección de una versión reducida (a las intenciones semánticas del autor) de los índices de largo en número de sílabas. Una parte de nuestros resultados preliminares concuerdan con las recomendaciones de la literatura científica sobre medidas de fluidez (de Jong, 2018), pero otros permiten ver más claro en las contradicciones que se encuentran a veces.

La presentación tiene también el objetivo de dar a conocer y de explicar al público métodos informáticos a la vanguardia del análisis de producciones lingüísticas de aprendices, que permiten análisis más confiables a mayor escala.

## Referencias

- Baker-Smemoe, W., Dewey, D. P., Bown, J., & Martinsen, R. A. (2014). Does measuring L2 utterance fluency equal measuring overall L2 proficiency? Evidence from five languages. _Foreign Language Annals, 47_ (4), 707–728. https://doi.org/10.1111/flan.12110
- Bibauw, S., François, T., & Desmet, P. (2019). Discussing with a computer to practice a foreign language: research synthesis and conceptual framework of dialogue-based CALL. _Computer Assisted Language Learning, 32_ (8), 827-877. https://doi.org/10.1080/09588221.2018.1535508
- de Jong, N. H. (2018). Fluency in Second Language Testing: Insights From Different Disciplines. _Language Assessment Quarterly, 15_ (3), 237–254. https://doi.org/10.1080/15434303.2018.1477780
- Michel, M. (2017). Complexity, accuracy, and fluency in L2 production. En S. Loewen & M. Sato (Eds.), _The Routledge Handbook of Instructed Second Language Acquisition_ (pp. 50–68). https://doi.org/10.4324/9781315676968
- Peters, E., Velghe, T., & Rompaey, T. V. (2019). The VocabLab tests: The development of an English and French vocabulary test. _ITL - International Journal of Applied Linguistics, 170_ (1), 53–78. https://doi.org/10.1075/itl.17029.pet
- Segalowitz, N. (2010). _Cognitive bases of second language fluency_. New York: Routledge. 
- Segalowitz, N., French, L., & Guay, J.-D. (2017). What features best characterize adult second language utterance fluency and what do they reveal about fluency gains in short-term immersion? _Canadian Journal of Applied Linguistics / Revue Canadienne de Linguistique Appliquée, 20_ (2), 90–116.
