---
title: 'Can we detect short term fluency development after 2 hours of chat with a dialogue system?'
event: CALICO Annual Conference 2022
event_url: 'https://whova.com/web/calic_202206/Agenda'
slug: detect-short-term-fluency-development-dialogue-system
aliases:
  - /talk/calico-2022
location: Renaissance Hotel
address:
  street: null
  city: Seattle
  region: WA
  postcode: null
  country: USA
summary: ''
abstract: Dialogue systems, such as chatbots and dialogue-based games, provide an opportunity for safe, meaningful conversational practice to foreign language learners. We evaluated how much the speaking fluency of A1-A2 teenage learners of French (N = 164) was impacted by a very short-term synchronous written practice with a dialogue-based CALL game. Pre-post comparisons of various semi-automatized fluency measures confirm that such precise metrics can detect short-term L2 fluency development. The detected effects are promising, even if the limited time on task, the shortcomings of the instructional design, and the limited transfer of learning from writing to speaking do not allow the effect to significantly outperform the test-retest training effect.
math: true
date: 2022-06-04T14:40:00-07:00
date_end: 2022-06-04T15:10:00-07:00
all_day: false
publishDate: 2022-05-10T14:40:00-07:00
authors:
 - S. Bibauw
 - T. François
 - P. Desmet
tags:
  - fluency
  - dialogue-based-CALL
featured: false
image:
  caption: ''
  focal_point: Smart
  preview_only: true
url_slides: Bibauw_2022_Detect_fluency_dialogue.pdf
url_code: null
url_pdf: null
url_video: ''
slides: ''
projects:
  - dialogue-systems-for-language-learning
---

<!-- {{< youtube id=QYj85Szi1pc >}} -->
<!-- 
**Abstract**

Speaking utterance fluency, as a dimension of L2 performance, is assumed to be correlated to L2 proficiency, and the ability to measure it objectively and precisely is key for testing and research. Many utterance fluency metrics have been proposed, compared, and validated in terms of how well they discriminate or predict proficiency levels, allow to measure short-term L2 development or correlate with perceived fluency (e.g., [Segalowitz et al, 2017](#references); [Tavakoli et al, 2020](#references)). However, the precise operationalization of these fluency measurements is rarely discussed in detail and often diverges among studies ([Dumont, 2018](#references)). While some issues, such as the silent pause threshold, have been studied in more detail ([de Jong & Bosker, 2013](#references)), others, such as pruning, have rarely been discussed in depth.

The present study attempts to (semi-)automatize the testing and the computation of multiple variations of L2 fluency metrics, to compare how well they predict external proficiency estimates, including within a limited proficiency range, and how sensitive they are to very-short-term developmental changes. 

We used a computer-delivered oral interview to record 215 young low-intermediate learners of French in a pre- and a posttest separated by 1-3 weeks and, for the experimental group, a short pedagogical intervention based on interactions in a dialogue-based computer-assisted language learning game. The resulting 12’000 audio files were transcribed by automatic speech recognition, manually corrected, and annotated for a series of “disfluencies”. We computed both signal-based (e.g., via [de Jong et al 2020](#references)) and transcription-based fluency metrics, in as many variations as possible in terms of pruning (e.g., do L1-words count? proper nouns? self-talk?) and normalizations (words, syllables, silent pauses…).

We evaluate how well each metric’s variations correlate with external proficiency estimates, including a vocabulary size test, and are able to detect changes in such a short timeframe, and how reliable the fully automated metrics are.

### Methods

![](fluency-metrics-research-design-3.svg)

### Results

#### Automated estimators vs. Manual annotation

Raw metrics | MAE<br><small>(accur.)</small> | RMSE<br><small>(accur.)</small> | R<sup>2</sup><br><small>(consist.)</small> || Cron. α<br><small>(intern. consist.)</small> | $r$<sub>#Syll.-VS</sub><br><small>(pred. power)</small>
---|:--:|:--:|:--:|-|:--:|:--:
**Nb of syllables** <small>(auto count, manual transcript)</small> | _“truth”_ |  |  || .92 | .373
vs. Google ASR transcript <small>(auto count)</small>         | 1.23 | 2.93 | .874 || .91 | .370
vs. Syllable Nuclei Praat script <cite>(de Jong et al.)</cite>| 4.25 | 7.60 | .585 || .88 | .154

#### Pruning

Number of syllables Variant / Pruning | M | SD | Cron. α | $r$<sub>#Syll.-VS</sub> | $r$<sub>SpeechRate-VS</sub>
--|--|:--:|:--:|:--:|:--:
Unpruned <small>(manual transcript)</small>            | 13.4 | 5.44 | .92 | .373 | .579
‘Meant’ pruning: –disfluencies (f.pauses, repet., self-corr., meta)| 12.2 | 5.10 | .92 | **.443** | **.597**
‘Meant’, L2-only pruning: –L1/lingua franca words                  | 12.1 | 5.07 | .93 | **.459** | **.603**
‘Meant’, L2-only, –proper nouns                            | 12.0 | 5.02 | .93 | **.473** | **.609**

#### Best predictors of L2 proficiency

![](corr_VS_syll_run2.png)

##### Semi-auto vs. fully automated composite metrics 

Metric | Semi-auto,<br>pruned | Fully auto*,<br>ASR-based count | Fully auto*,<br>signal-based<cite>(deJong)</cite> | Fully auto<br>signal alt.
--|:--:|:--:|:--:|:--:
Length of runs                   | **.628** | .588 | .479
Speech rate                      | **.609** | .585 | .461
Articulation rate                | **.524** | .496 | .392 | .172
Syllable duration<sup>-1</sup>   | **.473** | .283 | **.473** | .106
Number of syllables              | **.473** | .370 | .154
Number of words                  | **.463** | .355 |  —
Silent pausing rate<sup>-1</sup> |      |      | .409 | **.428**
Duration of runs                 |      |      | .338 | **.352**
Speech-time ratio                |      |      | .269 | **.305**


#### Developmental sensitivity

![](interv_effect_metrics.png)
!-->

### References

- [Bosker, H. R., Pinget, A.-F., Quené, H., Sanders, T., & de Jong, N. H. (2013)](https://doi.org/10.1177/0265532212455394). What makes speech sound fluent? The contributions of pauses, speed and repairs. _Language Testing, 30_(2), 159–175. <small>DOI:&#8239;10.1177/0265532212455394</small>
- [Cucchiarini, C., Strik, H., & Boves, L. (2002)](https://doi.org/10.1121/1.1471894). Quantitative assessment of second language learners’ fluency: Comparisons between read and spontaneous speech. _The Journal of the Acoustical Society of America, 111_(6), 2862–2873. <small>DOI:&#8239;10.1121/1.1471894</small>
- [de Jong, N. H., & Bosker, H. R. (2013)](http://hdl.handle.net/11858/00-001M-0000-0015-0FB8-8). Choosing a threshold for silent pauses to measure second language fluency. In R. Eklund (Ed.), _Proceedings of the 6th Workshop on Disfluency in Spontaneous Speech (DiSS)_ (pp. 17–20).
- [de Jong, N. H., Pacilly, J., & Heeren, W. (2020)](https://osf.io/w3r7t/). _Praat scripts to measure fluency automatically_. 
- [de Jong, N. H., Steinel, M. P., Florijn, A. F., Schoonen, R., & Hulstijn, J. H. (2012)](https://doi.org/10.1017/S0272263111000489). Facets of speaking proficiency. _Studies in Second Language Acquisition, 34_(1), 5–34. <small>DOI:&#8239;10.1017/S0272263111000489</small>
- [Detey, S., Fontan, L., Le Coz, M., & Jmel, S. (2020)](https://doi.org/10.1016/j.specom.2020.10.001). Computer-assisted assessment of phonetic fluency in a second language: A longitudinal study of Japanese learners of French. _Speech Communication, 125_, 69–79. <small>DOI:&#8239;10.1016/j.specom.2020.10.001</small>
- Dumont, A. (2018). _Fluency and disfluency: A corpus study of non-native and native speaker (dis)fluency profiles_ [Unpublished doctoral dissertation]. Université catholique de Louvain.
- [Ferrari, S. (2012)](https://doi.org/10.1075/lllt.32.12fer). A longitudinal study of complexity, accuracy and fluency variation in second language development. In A. Housen, F. Kuiken, & I. Vedder (Eds.), _Dimensions of L2 performance and proficiency: Complexity, accuracy and fluency in SLA_ (pp. 277–298). John Benjamins. <small>DOI:&#8239;10.1075/lllt.32.12fer</small>
- Götz, S. (2013). _Fluency in native and nonnative English speech_. John Benjamins.
- Hilton, H. (2014). Oral fluency and spoken proficiency: Considerations for research and testing. In P. Leclercq, A. Edmonds, & H. Hilton (Eds.), _Measuring L2 proficiency: Perspectives from SLA_ (pp. 27–53). Multilingual Matters. 
- Koizumi, R. (2005). Predicting speaking ability from vocabulary knowledge. _Japan Language Testing Association Journal, 7_, 1–20.
- Leclercq, P., & Edmonds, A. (2014). How to assess L2 proficiency? An overview of proficiency assessment research. In P. Leclercq, A. Edmonds, & H. Hilton (Eds.), _Measuring L2 proficiency: Perspectives from SLA_. Multilingual Matters.
- [Milton, J. (2013)](http://www.eurosla.org/monographs/EM02/EM02tot.pdf#page=57). Measuring the contribution of vocabulary knowledge to proficiency in the four skills. In C. Bardel, C. Lindqvist, & B. Laufer (Eds.), _L2 vocabulary acquisition, knowledge and use_ (pp. 57–78). European Second Language Association. 
- [Noreillie, A.-S. (2019)](https://lirias.kuleuven.be/retrieve/538316). _It’s all about words. Three empirical studies into the role of lexical knowledge and use in French listening and speaking tasks_ [Doctoral dissertation, KU Leuven].
- [Noreillie, A.-S., Kestemont, B., Heylen, K., Desmet, P., & Peters, E. (2018)](https://doi.org/10.1075/itl.00013.nor). Vocabulary knowledge and listening comprehension at an intermediate level in English and French as foreign languages. _ITL - International Journal of Applied Linguistics, 169_(1), 212–231. <small>DOI:&#8239;10.1075/itl.00013.nor</small>
- [Révész, A., Ekiert, M., & Torgersen, E. N. (2016)](https://doi.org/10.1093/applin/amu069). The effects of complexity, accuracy, and fluency on communicative adequacy in oral task performance. _Applied Linguistics, 37_(6), 828–848. <small>DOI:&#8239;10.1093/applin/amu069</small>
- [Saito, K., Ilkan, M., Magne, V., Tran, M. N., & Suzuki, S. (2018)](https://doi.org/10.1017/S0142716417000571). Acoustic characteristics and learner profiles of low-, mid- and high-level second language fluency. _Applied Psycholinguistics, 39_(3), 593–617. <small>DOI:&#8239;10.1017/S0142716417000571</small>
- Segalowitz, N. (2010). _Cognitive bases of second language fluency_. Routledge.
- [Segalowitz, N., French, L., & Guay, J.-D. (2017)](https://doi.org/10.7202/1050813ar). What features best characterize adult second language utterance fluency and what do they reveal about fluency gains in short-term immersion? _Canadian Journal of Applied Linguistics / Revue Canadienne de Linguistique Appliquée, 20_(2), 90–116. <small>DOI:&#8239;10.7202/1050813ar</small>
- [Tavakoli, P. (2016)](https://doi.org/10.1515/iral-2016-9994). Fluency in monologic and dialogic task performance: Challenges in defining and measuring L2 fluency. _International Review of Applied Linguistics in Language Teaching, 54_(2), 133–150. <small>DOI:&#8239;10.1515/iral-2016-9994</small>
- [Tavakoli, P., Campbell, C., & McCormack, J. (2016)](https://doi.org/10.1002/tesq.244). Development of speech fluency over a short period of time: Effects of pedagogic intervention. _TESOL Quarterly, 50_(2), 447–471. <small>DOI:&#8239;10.1002/tesq.244</small>
- [Tavakoli, P., Nakatsuhara, F., & Hunter, A.-M. (2020)](https://doi.org/10.1111/modl.12620). Aspects of fluency across assessed levels of speaking proficiency. _Modern Language Journal, 104_(1), 169-191. <small>DOI:&#8239;10.1111/modl.12620</small>
- [Tonkyn, A. P. (2012)](https://doi.org/10.1075/lllt.32.10ton). Measuring and perceiving changes in oral complexity, accuracy and fluency: Examining instructed learners’ short-term gains. In A. Housen, F. Kuiken, & I. Vedder (Eds.), _Dimensions of L2 performance and proficiency: Complexity, accuracy and fluency in SLA_ (pp. 221–244). John Benjamins. <small>DOI:&#8239;10.1075/lllt.32.10ton</small>
- [Williams, J., Segalowitz, N., & Leclair, T. (2014)](https://doi.org/10.1075/ml.9.1.02wil). Estimating second language productive vocabulary size: A Capture-Recapture approach. _The Mental Lexicon, 9_(1), 23–47. <small>DOI:&#8239;10.1075/ml.9.1.02wil</small>
- [Wright, C., & Tavakoli, P. (2016)](https://doi.org/10.1515/iral-2016-9990). New directions and developments in defining, analyzing and measuring L2 speech fluency. _International Review of Applied Linguistics in Language Teaching, 54_(2), 73–77. <small>DOI:&#8239;10.1515/iral-2016-9990</small>