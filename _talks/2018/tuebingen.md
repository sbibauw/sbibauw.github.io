---
title: "Dialogue-based CALL: a multilevel meta-analysis"
type: Poster
date: 2018-07-23T12:00:00Z
event: LEAD Summer School in L2 Acquisition
location: Universität Tübingen
address:
  city: Tübingen
  country: Germany
authors:
  - S. Bibauw
  - W. Van den Noortgate
  - T. François
  - P. Desmet
abstract: |
  Dialogue-based CALL systems allow a learner to practice meaningfully an L2 with an automated agent, through an oral (spoken dialogue systems) or written interface (chatbots) (Bibauw, François, & Desmet, 2015). In order to obtain a better comprehension of their effects on L2 proficiency development, we conducted a multilevel meta-analysis on all the experimental studies measuring an impact of such systems on language learning outcomes (40 publications). Effect sizes for each variable and group under observation were systematically computed ($k = 96$). By combining all studies into a multilevel linear model, we observed a significant medium effect of dialogue-based CALL on general L2 proficiency development ($d = .61$). By integrating moderator variables into our statistical model, we are able to provide insights on the relative effectiveness of certain technological and instructional characteristics (spoken vs. written, task-oriented vs. open-ended, form-focused vs. meaning-focused) on different learning outcomes (writing vs. speaking vs. comprehension skills, complexity, accuracy and fluency measures…) and different samples of populations (L2 proficiency, age, context…), as well as to model the effect of treatment duration (number of sessions and time on task) and spacing on these outcomes, to better inform future system and research design."
projects:
  - dialogue-systems-for-language-learning
tags:
  - dialogue-based CALL
  - meta-analysis
---

# Dialogue-based CALL

Dialogue-based CALL systems involve

- a dialogue (i.e., sequence of conversational turns)
- with an automated agent (chatbot, robot, voice assistant, non player character...)
- as a language learning task (≠scaffolding).

See [Bibauw, François & Desmet, 2015](#bibauw2015) and [2019](#bibauw2019) for a full discussion.

# Methods

Formulas for effect size calculation, on a single "raw" metric (aligned to _between-groups_ effects) across experimental designs, from Morris & DeShon ([2002](#morris)):

$$d\_{ \text{PP} } = J ( df\_{\text{PP}} )  \left( \frac { M\_{ \text{post,E} } - M\_{ \text{pre,E} } } { \mathit{SD}\_{ \text{pre,E}} } \right) $$

$$d\_{\text{ECPP}} = J (df\_{\text{ECPP}}) \left(\frac{M\_{\text{post,E}}-M\_{\text{pre,E}}}{\mathit{SD}\_{\text{pre,E}}}-\frac{M\_{\text{post,C}}-M\_{\text{pre,C}}}{\mathit{SD}\_{\text{pre,C}}}\right)$$

In previous Equations, we use Hedges' $J$ as a correction function for small sample size bias (the original formula rather than the commonly used approximation) in order to obtain a more accurate estimate of the effect size ([Hedges & Olkin, 1985](#hedges)):

$$J(df)=\frac{\Gamma{\left(df/2\right)}}{\sqrt{df/2}\ \Gamma{\left[\left(df-1\right)/2\right]}}$$

where $df$ corresponds to the degrees of freedom, calculated from the subsample sizes ($n$) in each study as $df\_{\text{PP}}=n\_{\text{E}}-1$ and $df\_{\text{ECPP}}=n\_{\text{E}}-1 + n\_{\text{C}}-1$.

## Multilevel meta-analysis modeling

| Level        | Number of clusters/items | Source of variance        |
| ------------ | ------------------------ | ------------------------- |
| Subjects     | $k=96$ ($n=804$)         | Random sampling variance  |
| Effect sizes | $k=96$                   | Variation within study    |
| Studies      | $k\_{studies}=17$        | Variation between studies |

All computations were done in _R_, with the _[metafor](http://metafor-project.org/)_ package, using the `rma.mv()` function ([Viechtbauer, 2010](#viechtbauer)):

    rma.mv(di, vi, data = dataset, random = ~1|Paper/Effect)

See Van den Noortgate, López-López, Marín-Martínez & Sánchez-Meca ([2013](#vdng)) for a discussion of multilevel modeling in meta-analyses.

# Results

Mean effect of use of dialogue-based CALL for L2 development: $d = .61$ (95% CI: $[.373, .831]$).

## Moderator analyses

Significant moderators:

- L2 proficiency level
- Outcome variable type (production vs. comprehension) and dimension (accuracy, complexity, fluency...)
- ...

Many interesting exploratory results needing to be confirmed in future research.

# References <a name="bibauw2015"></a><a name="bibauw2019"></a>

- Bibauw, S., François, T., & Desmet, P. (2015). [Dialogue-based CALL: an overview of existing research](/publication/bibauw-et-al-2015/). In F. Helm, L. Bradley, M. Guarda, & S. Thouësny (Eds.), _Critical CALL – Proceedings of the 2015 EUROCALL Conference_, Padova, Italy (pp. 57–64). Dublin: Research-publishing.net.
- Bibauw, S., François, T., & Desmet, P. (2019). [Discussing with a computer to practice a foreign language: from a conceptual framework to a research agenda for dialogue-based CALL](/publication/bibauw-et-al-2019/). _Computer Assisted Language Learning_.
- <a name="morris"></a>Mackey, A., & Goo, J. (2007). Interaction research in SLA: A meta-analysis and research synthesis. In A. Mackey (Ed.), _Conversational interaction in second language acquisition: A collection of empirical studies_ (pp. 407–452). Oxford: Oxford University Press.
- <a name="vdng"></a>Morris, S. B., & DeShon, R. P. (2002). Combining effect size estimates in meta-analysis with repeated measures and independent-groups designs. _Psychological Methods, 7_(1), 105‑125. [doi:10.1037//1082-989X.7.1.105](https://doi.org/10.1037//1082-989X.7.1.105)
- <a name="viechtbauer"></a>Van den Noortgate, W., López-López, J. A., Marín-Martínez, F., & Sánchez-Meca, J. (2013). Three-level meta-analysis of dependent effect sizes. _Behavior Research Methods, 45_(2), 576–594. [doi:10.3758/s13428-012-0261-6](https://doi.org/10.3758/s13428-012-0261-6)
- Viechtbauer, W. (2010). Conducting meta-analyses in R with the metafor package. _Journal of Statistical Software, 36_(3). [doi:10.18637/jss.v036.i03](https://doi.org/10.18637/jss.v036.i03)
